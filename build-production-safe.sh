#!/usr/bin/env bash
set -euo pipefail

# SAFE build script - Uses a separate worktree to avoid deleting files
# Run this on your development machine

echo "=== Building Next.js static site ==="
pnpm install
pnpm run build

echo "=== Setting up production branch safely ==="

# Check if we already have a production worktree
if [ -d "../RRC-production" ]; then
    echo "Using existing production worktree"
    cd ../RRC-production
    git pull origin production 2>/dev/null || true
else
    echo "Creating new production worktree"
    # Create a separate worktree for production branch
    git worktree add -B production ../RRC-production origin/production 2>/dev/null || \
    git worktree add -B production ../RRC-production
    cd ../RRC-production
fi

# Clear the production worktree and copy new files
echo "=== Updating production branch ==="
rm -rf ./* 2>/dev/null || true
rm -rf ./.* 2>/dev/null || true

# Copy built files from main worktree
cp -R ../RRC/production/* . 2>/dev/null || true
cp -R ../RRC/production/.[!.]* . 2>/dev/null || true

# Commit and push
echo "=== Committing to production branch ==="
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

echo "=== Pushing to GitHub production branch ==="
git push -u origin production

# Go back to main directory
cd ../RRC

echo "✅ Build complete! Production branch updated safely"
echo "Your main branch files are untouched"
echo "Next step: SSH into Bluehost and run ~/deploy.sh"