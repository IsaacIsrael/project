#!/bin/bash

AVD_NAME=""
FLOW_PATH="./e2e/android"
APP_PATH=""

while [[ "$#" -gt 0 ]]; do
  case $1 in
    -d|--device) AVD_NAME="$2"; shift ;;
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

DEVICE_ID=$(adb devices | grep -w "device" | awk '{print $1}' | head -n 1)

if [[ -z "$DEVICE_ID" ]]; then
  echo "⚠️ No booted device found. Booting the first available one..."
  AVD_NAME=$(emulator -list-avds | head -n 1)
  nohup emulator -avd "$AVD_NAME" -no-audio -no-window -no-boot-anim > /dev/null 2>&1 &

  echo "⏳ Waiting for emulator to boot..."
  until adb shell getprop sys.boot_completed | grep -m 1 "1" > /dev/null; do
    sleep 1
  done

  echo "✅ Emulator booted!"
  DEVICE_ID=$(adb devices | grep -w "device" | awk '{print $1}' | head -n 1)
else
  AVD_NAME=$(adb -s "$DEVICE_ID" emu avd name)
fi

echo "ℹ️ Using simulator ID: $DEVICE_ID($AVD_NAME)"

echo "📱 Installing on simulator..."
adb -s "$DEVICE_ID" install -r "$APP_PATH"

# # Run Maestro test
echo "▶️ Running Maestro test on '$FLOW_PATH' using device '$AVD_NAME'"
maestro --device "$DEVICE_ID" test "$FLOW_PATH"

echo "🛑 Shutting down simulator..."
adb -s "$DEVICE_ID" emu kill
