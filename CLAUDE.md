# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a Next.js 16 application using the App Router with React 19 and React Compiler enabled.

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with CSS-first configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: `cn()` helper in `src/lib/utils.ts` using clsx + tailwind-merge

### Project Structure
- `src/app/` - App Router pages and layouts
- `src/components/` - React components (Navbar, Hero, Services, Footer)
- `src/lib/` - Utility functions

### Styling Conventions
- Custom brand colors defined in `src/app/globals.css` using CSS variables and Tailwind v4's `@theme inline` directive
- Primary palette: `brand-orange`, `brand-black`, `brand-gray-*` variants
- Use `cn()` utility for conditional class merging

### Key Configuration
- Path alias: `@/*` maps to `./src/*`
- React Compiler enabled in `next.config.ts`
- TypeScript strict mode enabled
