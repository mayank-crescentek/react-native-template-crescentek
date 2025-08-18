#!/bin/bash

echo "🚀 Starting replacements for iOS template..."

# Replace inside all .pbxproj files
find . -name "project.pbxproj" | while read file; do
  echo "🔧 Updating $file"
  sed -i '' \
    -e 's/myReactNativeTemplate/{{name}}/g' \
    -e 's/Pods-{{name}}/Pods-{{name}}/g' \
    -e 's/libPods-myReactNativeTemplate.a/libPods-{{name}}.a/g' \
    -e 's/myReactNativeTemplate.app/{{name}}.app/g' \
    -e 's/PRODUCT_NAME = myReactNativeTemplate;/PRODUCT_NAME = {{name}};/g' \
    "$file"
done

# Replace inside all .xcscheme files
find . -name "*.xcscheme" | while read file; do
  echo "🔧 Updating $file"
  sed -i '' \
    -e 's/myReactNativeTemplate/{{name}}/g' \
    -e 's/myReactNativeTemplateTests/{{name}}Tests/g' \
    -e 's/container:myReactNativeTemplate.xcodeproj/container:{{name}}.xcodeproj/g' \
    -e 's/myReactNativeTemplate.app/{{name}}.app/g' \
    -e 's/myReactNativeTemplateTests.xctest/{{name}}Tests.xctest/g' \
    "$file"
done

# Replace inside all Info.plist files (app_name etc)
find . -name "Info.plist" | while read file; do
  echo "🔧 Updating $file"
  sed -i '' \
    -e 's/myReactNativeTemplate/{{name}}/g' \
    "$file"
done

echo "✅ All iOS template replacements done!"
