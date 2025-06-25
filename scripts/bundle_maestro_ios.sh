#!/bin/bash

# set -e

IOS_DIR="ios"
SCHEME="Project"
CONFIGURATION="Maestro"
APP_NAME="Project.app"
WORKSPACE="$IOS_DIR/Project.xcworkspace"
SDK="iphonesimulator"
OUTPUT_DIR_PATH="./builds/debug"

while [[ "$#" -gt 0 ]]; do
  case $1 in
    -o|--output) OUTPUT_DIR_PATH="$2"; shift ;;
    *) echo "❌ Unknown argument: $1" >&2; exit 1 ;;
  esac
  shift
done

OUTPUT_FOLDER_PATH="$OUTPUT_DIR_PATH/temp"
OUTPUT_APP_PATH="$OUTPUT_DIR_PATH/$APP_NAME"

echo "🔧 Generating main.jsbundle..."
npx react-native bundle \
  --platform ios \
  --entry-file index.js \
  --dev true \
  --bundle-output "$IOS_DIR/main.jsbundle" \
  --assets-dest "$IOS_DIR"

echo "🛠️ Building app for simulator..."
rm -rf "$OUTPUT_FOLDER_PATH"
xcrun xcodebuild \
  -workspace "$WORKSPACE" \
  -scheme "$SCHEME" \
  -configuration "$CONFIGURATION" \
  -sdk "$SDK" \
  -destination 'generic/platform=iOS Simulator' \
  -derivedDataPath "$OUTPUT_FOLDER_PATH" \
  build



echo "📦 Copying app to build directory..."
BUILT_APP="$OUTPUT_FOLDER_PATH/Build/Products/$CONFIGURATION-iphonesimulator/$APP_NAME"

if [[ ! -d "$BUILT_APP" ]]; then
  echo "❌ Build failed: .app not found at $BUILT_APP"
  exit 1
fi

rm -rf "$OUTPUT_APP_PATH"
mkdir -p "$OUTPUT_DIR_PATH"
mv "$BUILT_APP" "$OUTPUT_APP_PATH"
echo "📍 App available at: $OUTPUT_APP_PATH"

echo "🧹 Cleaning..."
rm -rf "$IOS_DIR/assets"
rm -rf "$OUTPUT_FOLDER_PATH"

echo "✅ App compiled successfully!"

echo "$OUTPUT_APP_PATH"
