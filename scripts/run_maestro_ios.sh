#!/bin/bash

SIMULATOR_ID=""
FLOW_PATH="./e2e/ios"
APP_PATH=""

while [[ "$#" -gt 0 ]]; do
  case $1 in
    -d|--device) SIMULATOR_ID="$2"; shift ;;
    -f|--flow) FLOW_PATH="$2"; shift ;;
    -a|--app) APP_PATH="$2"; shift ;;
    *) echo "❌ Unknown argument: $1" >&2; exit 1 ;;
  esac
  shift
done

if [[ -z "$APP_PATH" ]]; then
  echo "❌ Missing required argument: --app <path-to-.app>"
  exit 1
fi

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

# Check if the simulator is already booted
IS_BOOTED=$(xcrun simctl list devices booted | grep "$SIMULATOR_ID")

if [ -z "$IS_BOOTED" ]; then
  echo "🚀 Booting simulator..."
  xcrun simctl boot "$SIMULATOR_ID"
else
  echo "✅ Simulator is already booted."
fi

# Install and shutdown
echo "📦 Installing app at path: $APP_PATH"
xcrun simctl install $SIMULATOR_ID "$APP_PATH"

# # Run Maestro test
echo "▶️ Running Maestro test on '$FLOW_PATH' using device '$SIMULATOR_ID'"
maestro --device "$SIMULATOR_ID" test "$FLOW_PATH"

echo "🛑 Shutting down simulator..."
xcrun simctl shutdown "$SIMULATOR_ID"
