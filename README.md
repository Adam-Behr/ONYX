# ONYX Tint Co. - Next.js Premium Website

A modern, premium window tinting company website built with Next.js 15, React 19, Framer Motion, and Tailwind CSS.

## Features

- **Modern Gradient Design** (`/`) - Contemporary dark aesthetic with cyan/magenta accents
- **Minimalist Luxury Design** (`/alt`) - Clean white aesthetic with elegant typography
- **Premium Micro-interactions** - Spring physics animations, perpetual micro-animations
- **Glassmorphism Effects** - Frosted glass cards with inner refraction borders
- **Responsive Design** - Mobile-first approach with proper viewport handling
- **Interactive Components**:
  - Animated navigation with staggered reveals
  - Hero section with typewriter-style text reveals
  - Services grid with rotating icons
  - Gallery with hover effects
  - Booking form with focus-state animations
  - Live chat widget with spring physics entrance
  - Smooth scroll navigation

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Animation**: Framer Motion 11
- **Styling**: Tailwind CSS 3.4
- **Icons**: Phosphor Icons
- **TypeScript**: For type safety

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the modern version.
Visit [http://localhost:3000/alt](http://localhost:3000/alt) to see the minimalist version.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── page.tsx                 # Modern gradient home page
│   ├── alt/
│   │   └── page.tsx            # Minimalist luxury home page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── Header.tsx              # Main navigation
│   ├── Hero.tsx                # Hero section
│   ├── Services.tsx            # Services grid
│   ├── Gallery.tsx             # Portfolio gallery
│   ├── BookingForm.tsx         # Booking form
│   ├── ChatBot.tsx             # Chat widget
│   ├── Footer.tsx              # Footer
│   ├── AltHeader.tsx           # Alt navigation
│   ├── AltHero.tsx             # Alt hero
│   ├── AltServices.tsx         # Alt services
│   ├── AltGallery.tsx          # Alt gallery
│   └── AltFooter.tsx           # Alt footer
├── lib/
│   └── logoImport.js           # Logo utilities
├── logo1.b64                   # Modern gradient logo
├── logo2.b64                   # Minimalist logo
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Design Principles

- **DESIGN_VARIANCE**: 8 - Asymmetric layouts with varied spacing
- **MOTION_INTENSITY**: 6 - Fluid animations with spring physics
- **VISUAL_DENSITY**: 4 - Balanced spacing for readability

## Key Features

### Animations
- Spring physics: `stiffness: 100, damping: 20`
- Staggered reveals on page load
- Perpetual micro-animations on interactive elements
- Smooth scroll transitions

### Colors
- Modern Version: Cyan, magenta, purple accents on dark background
- Alt Version: Minimalist grays and whites with subtle borders

### Typography
- Display: Bold, high contrast headings
- Body: Readable sans-serif with generous line height
- Monospace: For technical elements (optional)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with Next.js
- Image optimization with Next.js Image component
- CSS-in-JS optimization with Tailwind
- Hardware-accelerated animations using transform and opacity only

## License

Proprietary - ONYX Tint Co.
