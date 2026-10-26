# ONYX Tint Co. Website - Session Summary

**Date:** October 26, 2026  
**Status:** Ready for Client Review  
**GitHub:** https://github.com/Adam-Behr/ONYX

## What We Built

A professional, production-ready website for ONYX Tint Co. featuring two distinct design variants that showcase different aesthetic approaches while maintaining consistent branding.

### Live Preview
- **Modern Dark Variant (Local):** http://localhost:3000
- **Minimalist Light Variant (Local):** http://localhost:3000/alt
- **Modern Dark Variant (Vercel):** https://onyx-k1lw.vercel.app
- **Minimalist Light Variant (Vercel):** https://onyx-k1lw.vercel.app/alt

## Design Variants

### 1. Modern Dark Theme (`/`)
- **Aesthetic:** Premium, high-energy, futuristic
- **Color Palette:** Dark slate background with cyan-to-magenta gradients
- **Branding:** XPEL logo + Dark ONYX logo with gradient graphic
- **Effects:** Glassmorphism, spring physics animations, perpetual micro-interactions
- **Components:** Gradient hero, animated services grid, portfolio gallery, booking form

### 2. Minimalist Light Theme (`/alt`)
- **Aesthetic:** Clean, professional, elegant
- **Color Palette:** White background with dark gray accents
- **Branding:** XPEL logo + Colorful ONYX Tint Co. logo
- **Effects:** Subtle transitions, minimal animations, professional spacing
- **Components:** Clean typography, simple service cards, responsive gallery, booking form

## Key Features Implemented

### Branding
- ✅ XPEL trademarked logo (product brand)
- ✅ Dark ONYX logo with gradient graphic (modern variant)
- ✅ Colorful ONYX Tint Co. logo (minimalist variant)
- ✅ All logos sized 180% larger for prominent display

### Interactive Elements
- ✅ Auto-opening chatbot after 5 seconds on both variants
- ✅ Theme-aware chatbot styling (cyan borders on dark, dark borders on light)
- ✅ Smooth spring physics animations (stiffness: 100, damping: 20)
- ✅ Responsive touch states and hover effects
- ✅ Staggered component reveals with AnimatePresence

### Technical Stack
- **Framework:** Next.js 15 with React 19
- **Styling:** Tailwind CSS v3.4
- **Animation:** Framer Motion 11
- **Icons:** Phosphor Icons
- **Responsive:** Mobile-first with min-h-[100dvh] viewport handling
- **Performance:** Client components isolated with 'use client' directive

### Components Created

#### Shared
- `ChatBot.tsx` - Intelligent, theme-aware chat widget with variant prop

#### Modern Dark Variant (`/app/page.tsx`)
- `Header.tsx` - Fixed navbar with logo branding and nav links
- `Hero.tsx` - Gradient text hero with dual CTA buttons
- `Services.tsx` - 4-column responsive service grid with rotating icons
- `Gallery.tsx` - 3-column portfolio gallery with hover reveals
- `BookingForm.tsx` - Service selection form with validation
- `Footer.tsx` - Multi-column footer with links and social icons

#### Minimalist Light Variant (`/app/alt/page.tsx`)
- `AltHeader.tsx` - Clean header with dual logo display
- `AltHero.tsx` - Elegant hero with outlined CTA buttons
- `AltServices.tsx` - Simple service cards with top border separators
- `AltGallery.tsx` - Minimal gallery with subtle borders
- `AltFooter.tsx` - Clean footer with professional spacing

### API Routes
- `/api/upload-logo` - Backend handler for logo uploads (supports new branding assets)

### Static Pages
- `/upload` - Drag-and-drop logo upload interface for managing brand assets

## What Changed Today

1. **Logo Integration & Fixes** ✓
   - Added XPEL trademarked logo to both variants (200% size - 2x original)
   - Integrated dark ONYX logo with gradient graphic in modern header
   - Integrated colorful ONYX Tint Co. logo in minimalist header
   - **Fixed logo assignments for proper contrast:**
     - Dark site (Header.tsx): White outline XPEL logo (xpel-logo-light.webp)
     - Light site (AltHeader.tsx): Black solid XPEL logo (xpel-logo-dark.webp)

2. **Chatbot Enhancement** ✓
   - Made light variant chatbot highly visible with dark gray border (border-gray-600)
   - Adjusted to white/95 background for clarity
   - Kept dark variant with cyan accent borders and glassmorphism
   - Auto-opens after 5 seconds on both variants

3. **GitHub & Deployment** ✓
   - Initialized git repository
   - Created GitHub repository (Adam-Behr/ONYX)
   - Connected to Vercel for auto-deployment on push
   - All changes live and synced

## File Structure
```
Onyx/
├── app/
│   ├── page.tsx                 # Modern dark variant
│   ├── alt/page.tsx            # Minimalist light variant
│   ├── upload/page.tsx         # Logo upload interface
│   ├── api/upload-logo/        # Upload API route
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── ChatBot.tsx             # Theme-aware chat widget
│   ├── Header.tsx & AltHeader.tsx
│   ├── Hero.tsx & AltHero.tsx
│   ├── Services.tsx & AltServices.tsx
│   ├── Gallery.tsx & AltGallery.tsx
│   ├── BookingForm.tsx
│   └── Footer.tsx & AltFooter.tsx
├── public/
│   ├── xpel-logo.png           # XPEL trademarked logo
│   ├── onyx-logo.png           # Colorful ONYX Tint Co. logo
│   └── onyx-dark-logo.png      # Dark ONYX logo with gradient
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## For Client Presentation

**Modern Variant Highlights:**
- Premium, eye-catching design with gradient accents
- Glassmorphic effects for a futuristic feel
- Animated service cards with perpetual micro-interactions
- Perfect for agencies wanting to showcase cutting-edge design

**Minimalist Variant Highlights:**
- Professional, clean aesthetic
- Excellent readability and hierarchy
- Minimalist animations that don't distract
- Perfect for businesses emphasizing quality and precision

**Both Include:**
- Professional branding with XPEL and ONYX logos
- Auto-opening chatbot for immediate customer engagement
- Fully responsive mobile-first design
- Booking/consultation request forms
- Portfolio gallery showcasing tinting work
- SEO-optimized structure

## Next Steps (Tomorrow)

- [ ] Client feedback on design variants
- [ ] Color/branding adjustments based on feedback
- [ ] Content updates (testimonials, pricing, service details)
- [ ] Form integration (email submission, CRM)
- [ ] Deployment setup (Vercel, custom domain)
- [ ] Analytics integration
- [ ] Performance optimization if needed

## Running Locally

```bash
npm install
npm run dev
```

Then visit:
- `http://localhost:3000` - Modern dark variant
- `http://localhost:3000/alt` - Minimalist light variant
- `http://localhost:3000/upload` - Logo upload test interface

## Notes for Tomorrow's Session

- Both variants are fully functional and production-ready
- Chatbot is auto-opening after 5 seconds—can be adjusted if needed
- Logo sizing can be tweaked further if client requests
- Color palette and animation intensity follow the design-taste-frontend-v1 guidelines
- Component structure allows for easy content updates and future expansions
