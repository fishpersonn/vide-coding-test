# Replit Project Documentation

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend), featuring a modern dashboard interface with authentication. The project uses PostgreSQL with Drizzle ORM for database operations and includes a comprehensive UI component library based on shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with a custom monochrome design system
- **State Management**: React Context API for authentication, TanStack Query for server state
- **Routing**: Client-side routing with context-based navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Authentication System
- Context-based authentication with React Context API
- Mock authentication (accepts any credentials for demo)
- Session management with user state persistence
- Protected routes with authentication guards

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: User management schema with username/password authentication
- **Migrations**: Database migrations stored in `./migrations` directory
- **Connection**: Neon Database serverless connection

### UI Components
- **Design System**: Professional monochrome theme with neutral colors
- **Component Library**: Comprehensive set of shadcn/ui components
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Toast Notifications**: Dual toast system (shadcn/ui + Sonner)

### Dashboard Interface
- **Layout**: Sidebar navigation with main content area
- **Views**: Dashboard, Reports, and Settings pages
- **Navigation**: Context-based active state management
- **User Interface**: Professional business dashboard with cards and metrics

## Data Flow

1. **Authentication Flow**:
   - User submits credentials via LoginPage
   - AuthContext processes login request
   - On success, user state is set and dashboard is rendered
   - Authentication state persists across components

2. **API Communication**:
   - Frontend uses TanStack Query for server state management
   - Backend routes are prefixed with `/api`
   - Express middleware handles JSON parsing and logging
   - Error handling with standardized error responses

3. **Database Operations**:
   - Storage interface abstracts database operations
   - Current implementation uses in-memory storage
   - Schema validation with Zod integration
   - Type-safe database operations with Drizzle ORM

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Development**: Vite, TypeScript, ESLint

### Backend Dependencies
- **Server**: Express.js with middleware support
- **Database**: Drizzle ORM, Neon Database serverless
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Utilities**: date-fns, nanoid, zod for validation

### Development Tools
- **Build**: esbuild for server bundling, Vite for client
- **Database**: Drizzle Kit for migrations and schema management
- **TypeScript**: Full TypeScript support with path mapping
- **Replit Integration**: Cartographer plugin and runtime error overlay

## Deployment Strategy

### Development Environment
- **Server**: Node.js with tsx for TypeScript execution
- **Client**: Vite dev server with HMR
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Integration**: Vite middleware integration for seamless development

### Production Build
- **Client**: Vite build output to `dist/public`
- **Server**: esbuild bundle to `dist/index.js`
- **Database**: Drizzle migrations for schema deployment
- **Static Assets**: Served from build directory

### Environment Configuration
- **Database**: PostgreSQL connection string required
- **Session**: PostgreSQL session store configuration
- **Build**: Separate development and production configurations
- **Deployment**: Ready for Node.js hosting platforms

### Key Files
- `server/index.ts`: Main server entry point
- `client/src/main.tsx`: React application entry
- `shared/schema.ts`: Database schema definitions
- `drizzle.config.ts`: Database configuration
- `vite.config.ts`: Frontend build configuration