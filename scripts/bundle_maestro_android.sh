#!/bin/bash

set -e

ANDROID_DIR="./android/app/src/main"
CONFIGURATION="Maestro"
APP_NAME="app-$(echo "$CONFIGURATION" | tr '[:upper:]' '[:lower:]').apk"
BUILD_PATH="./android/app/build"
OUTPUT_FOLDER_PATH="./builds/debug"

while [[ "$#" -gt 0 ]]; do
  case $1 in
    -o|--output) OUTPUT_FOLDER_PATH="$2"; shift ;;
    *) echo "❌ Unknown argument: $1" >&2; exit 1 ;;
  esac
  shift
done

OUTPUT_APP_PATH="$OUTPUT_FOLDER_PATH/$APP_NAME"
BUNDLE_OUTPUT="$ANDROID_DIR/assets/main.jsbundle"

echo "🔧 Generating main.jsbundle..."
npx react-native bundle \
  --platform android \
  --entry-file index.js \
  --dev true \
  --bundle-output "$BUNDLE_OUTPUT" \
  --assets-dest "$ANDROID_DIR/res"

echo "🛠️ Building app for simulator..."
rm -rf android/.gradle \
      android/.cxx \
      android/app/.cxx \
      android/app/build \
      .gradle \
      .cxx\
      $ANDROID_DIR/res/drawable-mdpi \
      $BUILD_PATH

./android/gradlew -p android clean assemble$CONFIGURATION

echo "📦 Copying app to build directory..."
BUILT_APP="$BUILD_PATH/outputs/apk/$(echo "$CONFIGURATION" | tr '[:upper:]' '[:lower:]')/$APP_NAME"

if [[ ! -f "$BUILT_APP" ]]; then
  echo "❌ Build failed: .apk not found at $BUILT_APP"
  exit 1
fi

echo "$BUILT_APP"
echo "$OUTPUT_APP_PATH"
mv "$BUILT_APP" "$OUTPUT_APP_PATH"
echo "📍 App available at: $OUTPUT_APP_PATH"

echo "🧹 Cleaning..."
./android/gradlew -p android clean
rm -rf android/.gradle \
      android/.cxx \
      android/app/.cxx \
      android/app/build \
      .gradle \
      .cxx\
      $BUILD_PATH \
      $BUNDLE_OUTPUT \
      $ANDROID_DIR/res/drawable-mdpi

echo "✅ App compiled successfully!"
echo "$OUTPUT_APP_PATH"
