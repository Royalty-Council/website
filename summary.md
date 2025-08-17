# Next.js Static Site Deployment to Bluehost

## Overview
Simple manual deployment workflow for deploying a Next.js static site to Bluehost shared hosting.

## Setup Complete ✅

### Files Created:
1. **next.config.js** - Configured for static export with:
   - `output: 'export'` - Enables static HTML export
   - `images: { unoptimized: true }` - Required for static images
   - `trailingSlash: true` - Creates `/route/index.html` for proper routing

2. **build-production.sh** - Local build script
   - Builds the Next.js static site
   - Copies `out/` folder to `production/`
   - Commits and pushes to GitHub

3. **deploy.sh** - SAFE server deployment script
   - Pulls latest from GitHub
   - Creates timestamped backups (NEVER deletes)
   - Copies `production/` to `public_html` (overwrites only)
   - Reports backup storage usage

## Deployment Workflow

### Step 1: Build Locally
```bash
./build-production.sh
```
This will:
- Build your Next.js app (`pnpm run build`)
- Copy static files to `production/` folder
- Commit and push to GitHub

### Step 2: Deploy to Server

#### First-time Setup (on Bluehost):

##### A. Set up GitHub Deploy Key (Secure Read-Only Access):
```bash
# 1. Generate deploy key on Bluehost
ssh-keygen -t ed25519 -C "bluehost-deploy" -f ~/.ssh/github_deploy
# Press Enter for no passphrase

# 2. Display public key and copy it
cat ~/.ssh/github_deploy.pub
# Copy this entire output

# 3. Add to GitHub:
# - Go to https://github.com/Royalty-Council/website → Settings → Deploy keys
# - Click "Add deploy key"
# - Title: "Bluehost Server"
# - Paste the public key
# - Leave "Allow write access" UNCHECKED (read-only)
# - Click "Add key"

# 4. Configure SSH on Bluehost
cat >> ~/.ssh/config <<EOF
Host github-deploy
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_deploy
  IdentitiesOnly yes
EOF

# 5. Test connection
ssh -T git@github-deploy
# Should see: "Hi Royalty-Council/website! You've successfully authenticated..."
```

##### B. Clone Repository and Set Up Deploy Script:
```bash
# Clone using deploy key
cd ~
git clone git@github-deploy:Royalty-Council/website.git repo

# Create the deploy script
nano ~/deploy.sh
# Paste the deploy.sh content, save (Ctrl+X, Y, Enter)
chmod +x ~/deploy.sh
```

#### Deploy Updates:
```bash
# SSH into Bluehost, then run:
~/deploy.sh
```

## How It Works

1. **Local Development**: Make changes to your Next.js app
2. **Build**: Run `./build-production.sh` to build and push to GitHub
3. **Deploy**: SSH into Bluehost and run `~/deploy.sh`
4. **Safe Deployment**: Creates backups, never deletes files (safe for shared hosting)

## Key Features

- **Manual Control**: You decide when to deploy
- **NO DELETIONS**: Never removes files (safe for shared hosting with multiple projects)
- **Automatic Backups**: Every deployment creates a timestamped backup
- **Storage Monitoring**: Reports backup folder size and warns when >1GB
- **Simple**: No complex automation or dependencies
- **Git-based**: All deployments tracked in version control
- **Secure**: Uses GitHub deploy key (read-only access to single repo)

## File Structure

```
Local:
├── build-production.sh    # Run this locally
├── deploy.sh             # Copy this to server
├── next.config.js        # Next.js config
├── out/                  # Build output (git-ignored)
└── production/           # Static files (committed to git)

Server (Bluehost):
├── ~/repo/               # Your cloned repository
├── ~/deploy.sh           # Deployment script
├── ~/backups/            # Timestamped backups (never deleted)
│   ├── backup_2024_12_19_143022/
│   ├── backup_2024_12_20_091533/
│   └── ...
└── ~/public_html/
    └── website_f3221791/ # RRC site deployment location
```

## Notes

- The `production/` folder contains your built static site
- Always build locally before deploying
- The server only pulls and copies files (no Node.js required)
- Files are served directly by Apache with proper routing
- **NO FILES ARE EVER DELETED** - safe for shared hosting with multiple projects
- Backups accumulate over time - manually clean old ones if needed: `rm -rf ~/backups/backup_2024_*`
- Deploys to `~/public_html/website_f3221791/` - your RRC site location

## Restoring from Backup

If you need to restore a previous version:
```bash
# List available backups
ls -la ~/backups/

# Restore a specific backup
cp -R ~/backups/backup_2024_12_19_143022/* ~/public_html/website_f3221791/
```