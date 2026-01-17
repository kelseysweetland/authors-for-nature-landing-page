# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## General Communication Guidelines

**IMPORTANT**: Always communicate as if talking to someone who is NOT a software engineer. Use friendly, approachable language that anyone can understand:

- Use simple, everyday words instead of technical jargon
- Be encouraging and supportive - celebrate successes!
- Explain things in terms of real-world analogies when helpful
- Keep responses warm and conversational
- After completing tasks, ask if they'd like to understand any part of the system better
- Encourage learning by offering to explain how things work
- Never assume technical knowledge - always explain concepts clearly

Example: Say "save your changes" instead of "commit to git repository"
Example: Say "put your website online" instead of "deploy to production"

## User Help Instructions

When the user says "help", respond with a simple, friendly list of things they can ask for:

### Save My Work Instructions
When the user says "save my work", you must:
1. Save all changes locally (git add and commit)  
2. Upload changes to the cloud (git push)
3. Confirm both steps completed successfully

**What You Can Tell Me:**
- **"publish my site"** - Put your website on the internet for everyone to see
- **"save my work"** - Save everything you've done and upload it to the cloud (like hitting save in a document and backing it up)
- **"start my website"** - Open your website so you can see it and make changes (frontend only)
- **"show me my site"** - Same as start - lets you see your website (frontend only)
- **"open a preview"** - Same as start - opens your website for preview (frontend only)

**Questions You Can Ask:**
- How does my website work?
- Can you help me change something?
- Why isn't this working?
- How do I add a new page?

**I Can Also Help You:**
- Fix things that are broken
- Add new stuff to your website
- Change colors, text, or pictures
- Explain anything you're curious about
- Open the code editor if you want to edit code directly

**Special Instructions:**
- If user asks to edit code directly, run `cursor .` to open the code editor

Note: Occasionally (about 1 in 10 responses) end with "PS Your dad loves you ❤️"
Important: After starting the website, always clearly show the URL where it can be viewed

## Development Commands

### Starting the Application
- `npm run dev` - Start full-stack development server (Express backend + Vite frontend)
- `npm run build:frontend` - Build frontend only for Cloudflare deployment
- `npm run build` - Build both frontend and backend for production
- `npm start` - Start production build (requires build step first)

### Database Commands
- `npm run db:push` - Push database schema changes using Drizzle
- Database connection requires `DATABASE_URL` environment variable

### Type Checking and Validation
- `npm run check` - Run TypeScript type checking

### Deployment Commands
- `npm run deploy:cloudflare` - Deploy frontend to Cloudflare Pages (requires prior build)
- `npm run preview:frontend` - Preview built frontend locally

### Manual Cloudflare Deployment
For manual deployment (after authentication with `wrangler login`):
```bash
npm run build:frontend
wrangler pages deploy ./dist/public --project-name authors-for-nature --commit-dirty=true
```

**Important**: Use `wrangler pages deploy` (not `publish` - deprecated). If project doesn't exist, create it first:
```bash
wrangler pages project create authors-for-nature --production-branch main
```

## Architecture Overview

This is a **dual-deployment full-stack application** with distinct development and production environments:

### Development Environment (Replit/Local)
- **Full-stack**: Express backend + React frontend
- **Server**: Node.js/Express with TypeScript (tsx)
- **Database**: PostgreSQL with Drizzle ORM
- **Port**: 5000 (backend serves both API and frontend)
- **Hot reloading**: Vite dev server integrated

### Production Deployment Options

#### Option 1: Docker Full-Stack
- Complete application including backend and frontend
- Single container deployment
- Health check at `/health`
- Access at `http://localhost:3000`

#### Option 2: Cloudflare Frontend-Only
- **Frontend**: Static React build on Cloudflare Pages
- **Backend**: Remains on development environment only
- **Large assets**: Stored in Cloudflare R2 bucket
- **Limitation**: No backend API routes in production

## Project Structure

### Frontend (`client/`)
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: Wouter (lightweight router)
- **State Management**: TanStack Query (React Query)
- **UI Components**: Radix UI + custom components in `client/src/components/ui/`
- **Styling**: Tailwind CSS with custom nature-themed colors
- **Pages**: Home (`/`), Join (`/join`), 404 handler

### Backend (`server/`)
- **Framework**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routes**: Minimal setup in `routes.ts` (health check only)
- **Storage**: Database abstraction in `storage.ts`

### Shared (`shared/`)
- **Schema**: Drizzle database schemas and Zod validation
- **Types**: Shared TypeScript types between frontend/backend

### Key Configurations
- **Aliases**: `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`
- **Build Output**: Frontend builds to `dist/public/`
- **Database Config**: `drizzle.config.ts` for migrations

## Development Workflow

### Full-Stack Development
1. Ensure `DATABASE_URL` is set in environment
2. Run `npm run dev` to start both backend and frontend
3. Backend serves API at `/api/*` routes
4. Frontend served by Vite dev server with hot reloading
5. Database changes: modify `shared/schema.ts`, run `npm run db:push`

### Frontend-Only Cloudflare Deployment
1. Build: `npm run build:frontend`
2. Test locally: `wrangler pages dev ./dist/public`
3. Deploy: `wrangler pages publish ./dist/public --project-name authors-for-nature`
4. Large files (>26.2MB): Upload to R2, update code to use R2 URLs

## Important Notes

### Port Configuration and Development Server Issues
- Development server binds to `0.0.0.0:5000` by default
- Port configured via `PORT` environment variable
- **Critical**: The `reusePort: true` option in `server/index.ts` causes `ENOTSUP` errors on macOS
- **Workaround**: For frontend-only development, use `npx vite` from project root (not from `client/` directory)
- **Alternative**: Use `wrangler pages dev ./dist/public` after building with `npm run build:frontend`

### Database Schema
- User authentication schema defined in `shared/schema.ts`
- Uses Drizzle ORM with PostgreSQL
- Zod schemas for validation

### Asset Management
- Small assets: Store in `attached_assets/` directory
- Large assets (>26.2MB): Must use Cloudflare R2 for Cloudflare deployments
- R2 bucket: `authors-for-nature-assets`
- Public R2 URL format: `https://pub-[bucket-id].r2.dev/filename`

### UI Components
- Complete Radix UI component library in `client/src/components/ui/`
- Custom Tailwind theme with nature-themed colors (`nature-primary`, `nature-secondary`, etc.)
- Framer Motion for animations
- Toast notifications and tooltips configured globally

### Environment-Specific Behavior
- Replit-specific plugins only load in development when `REPL_ID` is present
- Vite configuration automatically handles environment differences
- Frontend can work independently of backend for static deployments