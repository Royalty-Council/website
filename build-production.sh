#!/usr/bin/env bash
set -euo pipefail

# Simple build script - Builds and commits to main branch
# Run this on your development machine

echo "=== Building Next.js static site ==="
pnpm install
pnpm run build

echo "=== Committing production folder to main branch ==="
git add -A production
git commit -m "chore: build production $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

echo "=== Pushing to GitHub ==="
git push -u origin main

echo "✅ Build complete! Production folder pushed to main branch"
echo "Next step: SSH into Bluehost and run ~/deploy.sh"