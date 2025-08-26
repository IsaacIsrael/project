#!/bin/bash

SIMULATOR_ID=""
FLOW_PATH="./e2e/ios"
APP_PATH=""
CLEAN_DEVICE=false

while [[ "$#" -gt 0 ]]; do
  case $1 in
    -d|--device) SIMULATOR_ID="$2"; shift ;;
    -f|--flow) FLOW_PATH="$2"; shift ;;
    -a|--app) APP_PATH="$2"; shift ;;
    -c|--clean-device) CLEAN_DEVICE=true ;;
    *) echo "❌ Unknown argument: $1" >&2; exit 1 ;;
  esac
  shift
done

if [[ -z "$APP_PATH" ]]; then
  echo "❌ Missing required argument: --app <path-to-.app>"
  exit 1
fi

if [[ ! -d "$APP_PATH" ]]; then
  echo "❌ APP_PATH does not exist: $APP_PATH"
  exit 66
fi

if [[ ! -f "$APP_PATH/Info.plist" ]]; then
  echo "❌ Info.plist not found in: $APP_PATH"
  exit 66
fi

BUNDLE_ID=$(/usr/libexec/PlistBuddy -c 'Print :CFBundleIdentifier' "$APP_PATH/Info.plist" 2>/dev/null)

if [[ -z "$BUNDLE_ID" ]]; then
  echo "❌ Could not read CFBundleIdentifier from: $APP_PATH/Info.plist"
  exit 66
fi

echo "📦 App: $APP_PATH"
echo "🆔 Bundle ID: $BUNDLE_ID"


echo "📱 Installing on simulator..."
if [[ -z "$SIMULATOR_ID" ]]; then
  echo "⚠️ No booted device found. Booting the first available one..."
  SIMULATOR_ID=$(xcrun simctl list devices available | grep -E 'iPhone|iPad' | sed -E 's/.*\(([-A-F0-9]{36})\).*/\1/i' | head -n 1)
fi

if [ -z "$SIMULATOR_ID" ]; then
  echo "❌ No available simulator found. Please start a simulator first."
  exit 1
fi

echo "ℹ️ Using simulator ID: $SIMULATOR_ID"

if [ "$CLEAN_DEVICE" = true ]; then
  echo "🧼 Cleaning simulator device..."
  xcrun simctl uninstall "$SIMULATOR_ID" "$BUNDLE_ID" 2>/dev/null || true
fi

# Check if the simulator is already booted
IS_BOOTED=$(xcrun simctl list devices booted | grep "$SIMULATOR_ID")

if [ -z "$IS_BOOTED" ]; then
  echo "🚀 Booting simulator..."
  xcrun simctl boot "$SIMULATOR_ID"
else
  echo "✅ Simulator is already booted."
fi

LOG_DIR="$PWD/builds/debug/$SIMULATOR_ID"
mkdir -p "$LOG_DIR"
echo "📝 Capturing install logs in $LOG_DIR/install.log"
xcrun simctl spawn "$SIMULATOR_ID" log stream --style syslog --level debug \
  --predicate 'subsystem == "com.apple.installcoordination" || category CONTAINS "Install"' \
  > "$LOG_DIR/install.log" 2>&1 & LOGGER_PID=$!

echo "🧹 Uninstalling $BUNDLE_ID (if present)..."
xcrun simctl uninstall "$SIMULATOR_ID" "$BUNDLE_ID" || true

# Install and shutdown
echo "📦 Installing app at path: $APP_PATH"
set +e
xcrun simctl install "$SIMULATOR_ID" "$APP_PATH"
RC=$?
set -e

kill "$LOGGER_PID" 2>/dev/null || true

if [[ $RC -ne 0 ]]; then
  echo "❌ Installation failed (possible IXErrorDomain code=13)."
  tail -n 200 "$LOG_DIR/install.log" || true
  xcrun simctl diagnose > "$LOG_DIR/sim_diagnose.txt" 2>&1 || true
  exit $RC
fi

echo "✅ Installation complete."
# # Run Maestro test
echo "▶️ Running Maestro test on '$FLOW_PATH' using device '$SIMULATOR_ID'"
maestro --device "$SIMULATOR_ID" test "$FLOW_PATH" --format=junit --output=report.xml --no-ansi


echo "🛑 Shutting down simulator..."
xcrun simctl shutdown "$SIMULATOR_ID"


if [[ "$CLEAN_DEVICE" == "true" ]]; then
  echo "🗑️ Deleting simulator after run..."
  xcrun simctl delete "$SIMULATOR_ID" || true
else
  echo "🛑 Shutting down simulator..."
  xcrun simctl shutdown "$SIMULATOR_ID"
fi

echo "🎉 Done."
