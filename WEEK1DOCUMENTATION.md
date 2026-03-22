# Week 1 Documentation - Christian Gem Raganit Portfolio

## Project Overview

**Purpose:** Build a minimalist, Apple-inspired developer portfolio homepage for Christian Gem Raganit, a 2nd-year BSIT web development student from Saint Paul University of Philippines.

**Tech Stack:** Next.js (app router), Tailwind CSS v4, TypeScript, Geist font, lucide-react icons

---

## Part 1: Design System

### Black & White Minimalist Theme
The design uses a strict black and white color palette (70% white background, 30% black accents) inspired by Apple's minimalist aesthetic. This creates a clean, professional look with sharp edges (no rounded borders) that emphasizes content over decoration.

### Typography Strategy
All text uses the Geist font family with careful size hierarchy (text-xs for labels, text-sm for body, text-base/lg for headings) to ensure readability while maintaining the minimal aesthetic. The tracking-wider classes add letter-spacing for an upscale, professional feel.

---

## Part 2: Hero Component Structure

### Layout Architecture
The hero section uses a centered flex layout with a two-column design: left side contains tagline, education info, and CTAs, while the right side displays a color hero image (not grayscale—only the theme is black/white). Both sections sit close together with `justify-center gap-14` for visual balance.

### Component Features
- Header with navigation links (right-aligned only, nav removed)
- Main content area with "web developer" label, education details with SPUP logo inline, and call-to-action buttons
- Color hero image (260×320px) with name caption below
- Footer with location and social media links

---

## Part 3: Implementation Details

### Image Handling
We imported `heroimage.jpg` using Next.js Image component for optimization and `spuplogo.png` (20×20px) placed inline beside the university text. The hero image uses `object-cover` to maintain aspect ratio without grayscale filter—the black/white theme comes from typography and layout, not image manipulation.

### Spacing & Padding
Main section uses `px-8 py-10 md:px-16 lg:px-24` for responsive padding with `gap-6` between text blocks. Header and footer have subtle `border-b` and `border-t` separators to define sections. Left text block is fixed at `w-72` to prevent stretching.

---

## Troubleshooting & Solutions

### Issue: Text Too Small
**Problem:** Initial typography (text-xs throughout) made content difficult to read.
**Solution:** Bumped font sizes to text-sm for body content and added uppercase tracking for labels to improve visual hierarchy while staying minimal.

### Issue: Name Appearing Multiple Times
**Problem:** "Christian Gem Raganit" appeared in header, hero title, and below image—too repetitive.
**Solution:** Removed name from header and h1 element; kept only the caption below the image for a cleaner, less redundant design.

### Issue: Image & Text Too Far Apart
**Problem:** Large `gap-20` and `justify-between` pushed the image and text content to opposite edges.
**Solution:** Changed main layout to `justify-center gap-14` and fixed left block width to `w-72` so both sections sit close together in the center.

### Issue: SPUP Logo Visibility
**Problem:** Initial logo size (22px) was slightly too large.
**Solution:** Reduced to 20px with `flex-shrink-0` to sit cleanly inline with university text without disturbing flow.

---

## Development Commits - Iteration Log

The hero component went through 5 key iterations:

1. **Update full name to christian gem raganit in hero**
   - Initial commit to set the correct full name display

2. **Add hero image to homepage in minimal layout**
   - Imported heroimage.jpg using Next.js Image component
   - Placed image on right side with grayscale filter applied
   - Set image dimensions to 260×320px

3. **Fix name casing, image placement, and font readability**
   - Changed all text to proper title case: "Christian Gem Raganit"
   - Bumped typography sizes from text-xs to text-sm for better readability
   - Repositioned image as caption below the main content

4. **Redesign hero layout with SPUP logo and improved typography**
   - Removed grayscale from hero image (kept color, theme only black/white)
   - Added spuplogo.png (20×20px) inline beside university text
   - Added subtle border separators on header and footer
   - Improved spacing with better gap consistency and alignment

5. **Remove duplicate names, center hero content together**
   - Removed name from header and hero h1 element
   - Name now appears only once as caption below the image
   - Changed layout from justify-between to justify-center with gap-14
   - Fixed left text block width to w-72 so both sections sit close together

---

## Week 1 Achievements

✓ Created Apple-inspired minimal design system with black/white theme
✓ Built responsive hero component with image and education details
✓ Implemented SPUP logo integration and layout improvements
✓ Fixed typography hierarchy and spacing for professional presentation
✓ Deployed to GitHub repo: https://github.com/devichann/next-boiler-nextjs-Christiangem.git

---

## Deployment & Links

**Live Website:** https://next-boiler-nextjs-christiangem-por.vercel.app/

**GitHub Repository:** https://github.com/devichann/next-boiler-nextjs-Christiangem

**Documentation & Proofs:** All screenshots and proofs are included in the ZIP file located inside the `IMAGES/ASSETS` folder.

---

## Next Steps (Week 2+)

- Add work portfolio section
- Build about/experience section
- Add Testimonials and Socials Sections
- Implement project showcase with filtering
- Add contact form integration
