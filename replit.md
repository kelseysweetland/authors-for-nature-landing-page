# Authors for Nature - Replit Guide

## Overview

Authors for Nature is a full-stack web application that provides a guided program for ages 13-25 to create, publish, and promote children's books that advance UN Sustainable Development Goals. The application features a modern landing page with program information, testimonials, and calls-to-action directing users to external course platforms.

The system is built as a React frontend with an Express.js backend, utilizing modern web technologies and a component-based architecture with shadcn/ui components for consistent design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming, including nature-themed color palette (greens, teals, warm accents)
- **Animations**: Framer Motion for smooth page transitions and component animations
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **API Structure**: RESTful endpoints with `/api` prefix
- **Error Handling**: Centralized error middleware with status code handling

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **ORM**: Drizzle with type-safe schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **Development Storage**: In-memory storage implementation for rapid development
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`

### Project Structure
- **Monorepo Style**: Client and server code in same repository
- **Shared Code**: Common types and schemas in `/shared` directory
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/)
- **Build Output**: Separate client (static files) and server (Node.js) builds

### Authentication and Authorization
- **Current State**: Basic user schema defined with username/password fields
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **Future Implementation**: Ready for authentication middleware integration

### Development Environment
- **Replit Integration**: Configured for Replit development with runtime error overlay
- **Hot Reload**: Vite HMR for frontend, tsx for backend auto-restart
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Path Resolution**: Bundler module resolution for modern import syntax

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database hosting
- **drizzle-orm** and **drizzle-zod**: Type-safe database ORM with Zod integration
- **express**: Web framework for Node.js backend
- **vite**: Frontend build tool and development server

### UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe styling variants
- **clsx**: Conditional CSS class utilities
- **framer-motion**: Animation library for React

### Development and Build Tools
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific development enhancements
- **@replit/vite-plugin-cartographer**: Replit integration for development mode

### Data Management
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Performant forms with minimal re-renders
- **zod**: TypeScript-first schema validation
- **date-fns**: Modern date utility library

### External Services Integration
- **Kajabi Platform**: Course hosting and user management (authors-for-nature.mykajabi.com)
- **Unsplash**: Stock photography for hero images and visual content
- **Google Fonts**: Web font loading (Inter font family)

### Session and Security
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **nanoid**: URL-safe unique string generator for IDs