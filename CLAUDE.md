# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VES et Vous - Home services website for Nantes area (ménage, garde d'enfants, accompagnement senior). Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Single-Page Application Structure

This is a **single-page marketing site** using hash-based navigation (`#accueil`, `#services`, `#rdv`, etc.) with smooth scrolling. No Next.js routing - all sections are on the root `/` page.

### Component Organization

**Flat structure** in `app/components/`:
- All components are siblings (no nested folders)
- Server Components by default
- Client Components (`'use client'`) only for forms: `Appointment.tsx`, `Contact.tsx`
- `Navigation.tsx` exists but is **commented out in page.tsx** - user preference

**Component composition in `app/page.tsx`:**
```tsx
<main>
  <Hero />              // 85vh height, background image
  <Services />          // 3 service cards in grid
  <Appointment />       // Booking form (client component)
  <AdvanceImmediate />  // URSSAF info section
  <About />             // Company info + Next.js Image
  <Testimonials />      // 3 customer reviews
  <Contact />           // Contact form (client component)
</main>
<Footer />
```

### Styling System

**Hybrid approach** combining three methods:

1. **CSS Variables** (`app/globals.css:3-9`):
   ```css
   --primary-blue: #2A6B84
   --light-blue: #E1F0F7
   --orange: #FF7E36
   ```

2. **Global CSS Classes** (`app/globals.css:35-78`):
   - `.section` - Standard section padding
   - `.card` - Card component with shadow and hover
   - `.btn-primary` - Primary blue button
   - `.success-message` - Green success alert

3. **Tailwind CSS v4** - Utility classes throughout components
   - Configured via PostCSS (`postcss.config.mjs`)
   - No separate `tailwind.config.js` (using v4 inline theme)
   - Access CSS variables via inline styles: `style={{ color: 'var(--primary-blue)' }}`

### Form Pattern

**Important:** Forms currently **mock submissions** (console.log only, no backend).

Both `Appointment.tsx` and `Contact.tsx` follow identical pattern:
```tsx
const [formData, setFormData] = useState({...});
const [showSuccess, setShowSuccess] = useState(false);

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  console.log('Data:', formData);  // ⚠️ No API call
  setShowSuccess(true);
  setFormData({...});  // Reset form
  setTimeout(() => setShowSuccess(false), 5000);
};
```

When adding backend, create API routes in `app/api/` and replace console.log with fetch calls.

### Static Data Management

**Hardcoded arrays** in components (no external data source):
- `Services.tsx:2-36` - Services array (Ménage, Garde d'Enfants, Accompagnement Senior)
- `Testimonials.tsx:2-18` - Testimonials array
- `AdvanceImmediate.tsx:45-58` - URSSAF plafonds

To modify content, edit these arrays directly in the component files.

### Image Handling

**Two patterns in use:**

1. **Next.js Image Component** (`About.tsx:52-58`):
   ```tsx
   <Image
     src="https://images.unsplash.com/..."
     fill
     className="object-cover"
   />
   ```

2. **CSS Background Image** (`Hero.tsx:6-13`):
   ```tsx
   style={{
     backgroundImage: "url(https://images.unsplash.com/...)",
     backgroundSize: "cover",
     backgroundPosition: "center"
   }}
   ```

**Remote images configured** in `next.config.ts:4-11`:
```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' }
  ]
}
```

Add new remote domains here if using external images.

## Key Technical Details

### TypeScript Configuration
- Strict mode enabled
- Path alias `@/*` maps to root (configured in `tsconfig.json:21-23`)
- React 19 JSX transform (automatic JSX)

### No Backend Currently
- No API routes (`app/api/` doesn't exist)
- No database connections
- No environment variables
- Forms are demonstration only

### Hero Section Specifics
- Height: `85vh` (user preference - shows next section below)
- Background image from Unsplash
- Text uses `<br />` tags for line breaks: "Aide à Domicile<br />Nantes et alentours"
- Buttons have `inline-flex items-center justify-center` for proper text centering

### Navigation Notes
- `Navigation.tsx` component exists but is **intentionally disabled**
- User commented it out in `page.tsx:14`
- Site uses hash navigation only (#accueil, #services, etc.)
- Smooth scrolling enabled via `globals.css:32`

## Common Patterns

### Adding a New Section
1. Create component in `app/components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to `<main>` component order
4. Use `.section` class for consistent padding
5. Add `id="new-section"` for hash navigation

### Modifying Forms
Both forms share identical logic. When updating one, consider updating the other:
- `Appointment.tsx` - Service booking form
- `Contact.tsx` - General contact form

### Color Usage
Always use CSS variables for brand colors:
- Primary actions: `var(--primary-blue)`
- Highlights/prices: `var(--orange)`
- Backgrounds: `var(--light-blue)`

Access via inline styles or create new Tailwind classes in `globals.css`.

## Deployment

Designed for Vercel deployment:
- Standard Next.js build process
- No environment-specific configs needed
- Remote images already configured
- Production-ready build with `npm run build`
