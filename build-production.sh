#!/usr/bin/env bash
set -euo pipefail

# Local build script - Run this on your development machine
# This builds the static site and commits it to the production/ folder

echo "=== Building Next.js static site locally ==="
pnpm install
pnpm run build

echo "=== Copying to production folder ==="
rm -rf production && mkdir production
cp -R out/* production/

echo "=== Committing production folder ==="
git add -A production
git commit -m "chore: publish static build to production/" || echo "No changes to commit"

echo "=== Pushing to GitHub ==="
git push

echo "✅ Build complete! production/ folder pushed to GitHub"
echo "Next step: SSH into Bluehost and run ~/deploy.sh"