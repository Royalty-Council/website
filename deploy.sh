#!/usr/bin/env bash
set -euo pipefail

# SAFE Bluehost deployment script - NO DELETIONS, ONLY BACKUPS
# Run this ON the Bluehost server after SSH
# Prerequisites: 
#   1. Set up GitHub deploy key (see summary.md for instructions)
#   2. Clone your repo: git clone git@github-deploy:Royalty-Council/website.git repo
#   3. Place this script at ~/deploy.sh and make executable: chmod +x ~/deploy.sh

# Configuration
BACKUP_DIR=~/backups
DEPLOY_TARGET=~/public_html/website_f3221791  # RRC site deployment location
TIMESTAMP=$(date +%Y_%m_%d_%H%M%S)
BACKUP_PATH="$BACKUP_DIR/backup_$TIMESTAMP"

echo "==================================="
echo "SAFE DEPLOYMENT - NO DELETIONS"
echo "==================================="
echo ""

# Create backup directory if it doesn't exist
if [ ! -d "$BACKUP_DIR" ]; then
    echo "Creating backup directory..."
    mkdir -p "$BACKUP_DIR"
fi

echo "=== Step 1: Pulling latest from GitHub ==="
cd ~/repo
git pull

# Check if production folder exists
if [ ! -d "production" ]; then
    echo "❌ Error: production/ folder not found!"
    echo "Make sure you ran build-production.sh locally and pushed to GitHub"
    exit 1
fi

echo ""
echo "=== Step 2: Creating backup of current site ==="
echo "Backup location: $BACKUP_PATH"

# Create backup of current public_html
if [ -d "$DEPLOY_TARGET" ]; then
    mkdir -p "$BACKUP_PATH"
    # Using cp to preserve all files and permissions
    cp -R "$DEPLOY_TARGET"/* "$BACKUP_PATH"/ 2>/dev/null || true
    cp -R "$DEPLOY_TARGET"/.[!.]* "$BACKUP_PATH"/ 2>/dev/null || true
    echo "✅ Backup created successfully"
else
    echo "⚠️  No existing site to backup (first deployment?)"
fi

echo ""
echo "=== Step 3: Deploying new files (NO deletions) ==="
echo "Copying files from production/ to $DEPLOY_TARGET"

# Ensure target directory exists
mkdir -p "$DEPLOY_TARGET"

# Copy new files (overwrites existing, but doesn't delete anything)
cp -R production/* "$DEPLOY_TARGET"/ 2>/dev/null || true
cp -R production/.[!.]* "$DEPLOY_TARGET"/ 2>/dev/null || true

echo "✅ Files deployed successfully"

echo ""
echo "=== Step 4: Backup Storage Report ==="

# Calculate and report backup storage usage
if [ -d "$BACKUP_DIR" ]; then
    BACKUP_SIZE=$(du -sh "$BACKUP_DIR" 2>/dev/null | cut -f1)
    BACKUP_COUNT=$(find "$BACKUP_DIR" -maxdepth 1 -type d -name "backup_*" | wc -l)
    echo "📊 Backup Statistics:"
    echo "   - Total backups: $BACKUP_COUNT"
    echo "   - Total storage used: $BACKUP_SIZE"
    echo "   - Latest backup: $BACKUP_PATH"
    
    # Warning if backups are getting large
    BACKUP_SIZE_MB=$(du -sm "$BACKUP_DIR" 2>/dev/null | cut -f1)
    if [ "$BACKUP_SIZE_MB" -gt 1000 ]; then
        echo ""
        echo "⚠️  WARNING: Backup folder is over 1GB!"
        echo "   Consider manually cleaning old backups from $BACKUP_DIR"
    fi
fi

echo ""
echo "=== Deployment Complete! ==="
echo ""
echo "📝 Notes:"
echo "- NO files were deleted (safe for shared hosting)"
echo "- Old files remain unless overwritten by new ones"
echo "- All backups are kept in: $BACKUP_DIR"
echo "- To restore a backup: cp -R $BACKUP_PATH/* $DEPLOY_TARGET/"
echo ""
echo "Files in deployment target:"
ls -la "$DEPLOY_TARGET" | head -20