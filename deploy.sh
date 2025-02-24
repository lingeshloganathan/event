#!/bin/bash

# Stop on errors
set -e

# Checkout release/development
git checkout release/development

# Modify .gitignore to track only dist/
echo "/*" >.gitignore
echo "!/dist" >>.gitignore

# Commit and push only dist/
git add .gitignore dist/
git commit -m "Deploy only dist/ to release/development"
git push origin release/development --force

echo "✅ Successfully pushed only dist/ to release/development"
