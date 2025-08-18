# Authors for Nature - Deployment Guide

This repository contains a **full-stack application** with multiple deployment options:

## Deployment Options

### Option 1: Docker Full-Stack Deployment (Complete Application)

Deploy the entire application including both frontend and backend using Docker:

```bash
# Using Docker Compose (recommended)
docker-compose up --build

# Or using Docker directly
docker build -t authors-for-nature .
docker run -p 3000:5000 authors-for-nature
```

**Docker deployment includes**:
- React frontend built with Vite
- Express backend with API routes and database connectivity
- Health check endpoint at `/health`
- Production-ready configuration
- Automatic restarts and monitoring

**Access points**:
- **Main app**: http://localhost:3000
- **Health check**: http://localhost:3000/health
- **API routes**: http://localhost:3000/api/*

**Architecture**: Self-contained full-stack application with both frontend and backend running in a single container.

---

### Option 2: Cloudflare Frontend-Only Deployment (Static Site)

Deploy **ONLY the frontend** as a static site to Cloudflare Pages. This option does **NOT** include the backend.

## Important Notes for Cloudflare Deployment

⚠️ **Frontend-Only**: This Cloudflare setup deploys ONLY the frontend React app as static files. The backend Express server is NOT deployed to Cloudflare.

⚠️ **Replit Full-Stack Preserved**: All Replit configuration and full-stack functionality remains intact and operational for development on Replit.

⚠️ **No Full-Stack Pipeline**: A full-stack deployment pipeline to Cloudflare has NOT been created. Only frontend static deployment is configured.

## Project Structure

- **Frontend**: React/Vite app in `client/` directory
- **Backend**: Express server in `server/` directory (Replit only, NOT deployed to Cloudflare)
- **Build Output**: Static files generated in `dist/public/` (frontend only)
- **Large Assets**: Videos stored in Cloudflare R2 bucket
- **Deployment**: Cloudflare Pages (static hosting, frontend only)

## Prerequisites

1. Install wrangler CLI: `npm install -g wrangler`
2. Login to Cloudflare: `wrangler login`
3. Enable R2 in your Cloudflare dashboard

## Cloudflare Development Commands

### Local Development
```bash
# Start local development server
wrangler pages dev ./dist/public

# Build frontend first if needed
npm run build:frontend
```

### Building
```bash
# Build frontend only (no backend)
npm run build:frontend
```

## Cloudflare Deployment Commands

### Initial Setup (One-time)

#### 1. Create Cloudflare Pages Project
```bash
wrangler pages project create authors-for-nature --production-branch main
```

#### 2. Create R2 Bucket for Large Assets
```bash
wrangler r2 bucket create authors-for-nature-assets
```

**Important**: After creating the bucket, you must configure public access in the Cloudflare dashboard:
1. Go to Cloudflare Dashboard → R2 Object Storage → `authors-for-nature-assets`
2. Click **Settings** → **Public Access** 
3. Enable **"Allow Access"** to make files publicly accessible
4. Optional: Set up a custom domain for better URLs

### Regular Deployment

#### Deploy Frontend to Pages
```bash
# Build first
npm run build:frontend

# Deploy to Cloudflare Pages (use deploy, not publish)
wrangler pages deploy ./dist/public --project-name authors-for-nature --commit-dirty=true
```

## Large File Deployment (>26.2MB)

When you have files larger than Cloudflare Pages' 26.2MB limit, follow this workflow:

### Step 1: Upload to R2
```bash
# Upload the large file to R2
wrangler r2 object put authors-for-nature-assets/your-filename.mp4 --file=./path/to/large-file.mp4

# Verify upload
wrangler r2 object list authors-for-nature-assets
```

### Step 2: Enable Public Access (Dashboard)
**Critical**: R2 buckets are private by default. You MUST configure public access:

1. Go to **Cloudflare Dashboard** → **R2 Object Storage** → `authors-for-nature-assets`
2. Click **Settings** → **Public Access**
3. Enable **"Allow Access"** 
4. Note the public URL format: `https://pub-[bucket-id].r2.dev/`

### Step 3: Update Frontend Code
Replace local file imports with R2 URLs:

```tsx
// ❌ Before (local import)
import videoFile from "@assets/large-video.mp4";

// ✅ After (R2 URL)
const videoUrl = "https://pub-9be65ed062f448db8db00d71c1e6bde6.r2.dev/large-video.mp4";
```

### Step 4: Rebuild and Deploy
```bash
# Rebuild frontend with R2 references
npm run build:frontend

# Deploy updated frontend
wrangler pages publish ./dist/public --project-name authors-for-nature --commit-dirty=true
```

### Step 5: Verify Access
```bash
# Test that the R2 URL is publicly accessible
curl -I "https://pub-9be65ed062f448db8db00d71c1e6bde6.r2.dev/your-filename.mp4"
# Should return: HTTP/1.1 200 OK
```

## Asset Management Commands

### R2 Object Operations
```bash
# Upload a file
wrangler r2 object put authors-for-nature-assets/filename.mp4 --file=./path/to/local/file.mp4

# List objects in bucket
wrangler r2 object list authors-for-nature-assets

# Delete an object
wrangler r2 object delete authors-for-nature-assets/filename.mp4

# Download an object
wrangler r2 object get authors-for-nature-assets/filename.mp4 --file=./downloaded-file.mp4
```

### R2 Public URLs
After enabling public access, large assets are accessible via: 
`https://pub-9be65ed062f448db8db00d71c1e6bde6.r2.dev/filename.mp4`

## File Size Limits

- **Cloudflare Pages**: 26.2 MB per file maximum
- **Cloudflare R2**: No practical limit for large files

## Configuration Files

### wrangler.toml
```toml
name = "authors-for-nature"
compatibility_date = "2025-08-18"
```

**Important**: Do NOT include `main` field or `[site]` configuration for static sites. Use Pages, not Workers.

## Common Operations

### Check Deployment Status
```bash
wrangler pages deployment list --project-name authors-for-nature
```

### View Project Info
```bash
wrangler pages project list
```

### View R2 Buckets
```bash
wrangler r2 bucket list
```

### Rollback Deployment
```bash
# Get deployment ID from list command, then:
wrangler pages deployment promote <deployment-id> --project-name authors-for-nature
```

## Troubleshooting

### Common Issues

1. **"File too large" error**: Move large files (>26.2MB) to R2 and update code to reference R2 URLs (see Large File Deployment section)
2. **"Project not found"**: Create the project first with `wrangler pages project create`
3. **"R2 not enabled"**: Enable R2 in Cloudflare dashboard before creating buckets
4. **"Missing entry-point"**: Use `wrangler pages deploy` for static sites, not `wrangler publish`
5. **"401 Unauthorized" on R2 URLs**: R2 bucket not configured for public access - enable in dashboard
6. **Video/large files not loading**: Verify R2 public URL returns `200 OK` with `curl -I`

### Deployment Commands

For Cloudflare Pages static deployment:
```bash
wrangler pages dev ./dist/public
wrangler pages deploy ./dist/public --project-name authors-for-nature
```

Note: `wrangler pages publish` has been deprecated in favor of `wrangler pages deploy`.

## URLs

- **Live Site**: https://authors-for-nature-7cl.pages.dev
- **Development**: http://localhost:8788 (when running `wrangler pages dev`)
- **R2 Assets**: https://pub-9be65ed062f448db8db00d71c1e6bde6.r2.dev/

## Deployment Architecture

### Replit (Full-Stack Development)
- **Frontend**: React app served by Vite
- **Backend**: Express server with API routes
- **Database**: Full backend functionality available
- **Use**: Development and testing environment

### Cloudflare (Frontend-Only Production)
- **Frontend**: Static React build served by Cloudflare Pages
- **Backend**: NOT DEPLOYED (Express server remains on Replit only)
- **Assets**: Large files served from Cloudflare R2
- **Use**: Production static site hosting

### Build Process (Frontend-Only)
1. `npm run build:frontend` compiles React/Vite app to static files in `dist/public/`
2. Static files deployed to Cloudflare Pages (no server-side code)
3. Large assets served from Cloudflare R2
4. **Backend remains untouched** and operational on Replit

## Workflow Summary

### Development Workflow
1. **Replit Development**: Make changes in Replit environment (full-stack available)
2. **Frontend Changes**: Modify code in `client/` directory
3. **Test on Replit**: Ensure full-stack functionality works in Replit
4. **Build for Cloudflare**: `npm run build:frontend` (frontend only)
5. **Test Cloudflare Build**: `wrangler pages dev ./dist/public`
6. **Deploy to Cloudflare**: `wrangler pages publish ./dist/public --project-name authors-for-nature --commit-dirty=true`
7. **Large Files**: Upload to R2 and update code to reference R2 URLs

### Key Principles
- **Replit stays operational**: Never break Replit's full-stack configuration
- **Frontend-only Cloudflare**: Only static files go to Cloudflare
- **Dual environment**: Replit for development, Cloudflare for production frontend