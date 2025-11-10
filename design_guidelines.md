# Cyberters (CyberMatrix AI Shield) Design Guidelines

## Design Approach
**Reference-Based Approach**: Enterprise cybersecurity SaaS platform drawing inspiration from Stripe's restraint, Linear's typography, and modern dashboard applications with dark theme aesthetics. Focus on data visualization excellence and professional trust-building.

## Brand Identity & Visual Language
**Theme**: Modern dark mode cybersecurity aesthetic with neon accents and professional enterprise polish. High-tech, trustworthy, powerful.

## Color Palette (Exact Specifications)

### Primary Colors
- **Deep Blue** `#003C91` - Navbar, sidebar, main backgrounds, primary containers
- **Electric Blue Gradient** `#0068FF → #2E9AFE` - Primary buttons, progress bars, hover states, CTAs
- **Shadow Navy** `#021B40` - Card shadows, panel depths, modal overlays

### Accent Colors
- **Cyber Orange** `#FF7A00` - Active menu icons, logo glow, primary CTA accents, highlights
- **Amber Glow** `#FF9D3B` - Hover animations, text glows, interactive state feedback

### Neutral & Backgrounds
- **Midnight Black** `#0C0C0F` - Primary page background
- **Steel Gray** `#1F1F25` - Card backgrounds, container backgrounds, secondary surfaces
- **Light Silver** `#E0E0E0` - Secondary text, borders, dividers
- **White** `#FFFFFF` - Primary text
- **Gray** `#B0B0B0` - Muted text, subtitles, helper text

### Glow Effects
- **Blue Neon Glow**: `rgba(0, 104, 255, 0.4)` - Highlights, focus states
- **Orange Glow**: `rgba(255, 122, 0, 0.6)` - Hover elements, active states

## Typography

### Font Families
- **Primary**: Poppins (preferred) or Montserrat
- **Usage**: All UI elements, headings, body text
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Type Scale & Hierarchy
- **Hero Headlines**: 48-64px, bold weight, Electric Blue gradient text treatment
- **Page Titles (H1)**: 32-40px, semibold, white
- **Section Headers (H2)**: 24-28px, semibold, white
- **Card Titles (H3)**: 18-20px, medium, white
- **Body Text**: 14-16px, regular, white
- **Captions/Labels**: 12-14px, regular, gray (#B0B0B0)
- **Micro Text**: 10-12px, light, muted

## Layout System

### Spacing Units (Tailwind)
Primary spacing set: `2, 4, 6, 8, 12, 16, 20, 24, 32`
- Component padding: `p-6, p-8`
- Section spacing: `py-12, py-16, py-20`
- Card gaps: `gap-4, gap-6, gap-8`
- Container max-widths: `max-w-7xl` for full sections, `max-w-6xl` for content

### Grid Systems
- **Dashboard Layout**: Sidebar (280px fixed) + Main content (flex-1)
- **Card Grids**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- **Stat Cards**: `grid-cols-2 md:grid-cols-4` for metric displays
- **Feature Sections**: 2-3 column layouts on desktop, single column mobile

## Component Library

### Navigation
- **Sidebar**: Fixed 280px, Deep Blue (#003C91) background, icon + text menu items, active state with Cyber Orange (#FF7A00) left border and icon color
- **Topbar**: Steel Gray (#1F1F25) background, logo placement (left), search bar (center), alerts bell + profile menu (right)
- **Breadcrumbs**: Light Silver text with Electric Blue active state

### Cards
- **Background**: Steel Gray (#1F1F25)
- **Border**: 1px solid rgba(224, 224, 224, 0.1)
- **Border Radius**: 8-12px
- **Shadow**: 0 4px 12px rgba(2, 27, 64, 0.6)
- **Hover**: Subtle lift with Shadow Navy glow
- **Padding**: p-6 to p-8

### Buttons
- **Primary**: Electric Blue gradient background, white text, bold weight, rounded-lg, px-6 py-3
- **Primary Hover**: Brighter gradient + Blue Neon Glow
- **Secondary**: Transparent with Electric Blue border, Electric Blue text
- **Accent CTA**: Cyber Orange background, white text, Amber Glow on hover
- **Ghost**: Transparent, white text, hover shows Steel Gray background
- **On Images/Video**: Blurred background (backdrop-blur), no hover background changes

### Form Inputs
- **Background**: Deep Blue (#003C91) with slight transparency
- **Border**: 1px Light Silver, focus state Electric Blue with glow
- **Text**: White
- **Labels**: Light Silver, 14px
- **Validation**: Red for errors, Electric Blue for success
- **Password Strength Meter**: Gradient from red to Electric Blue

### Data Tables
- **Header**: Deep Blue background, white bold text
- **Rows**: Alternating Steel Gray and slightly lighter, hover state with Blue Neon Glow
- **Borders**: Light Silver at 0.5 opacity
- **Actions**: Icon buttons with Cyber Orange on hover

### Charts & Visualizations
- **Library**: Recharts or Chart.js
- **Color Scheme**: Electric Blue primary, Cyber Orange secondary, additional data series use gradient variations
- **Grid Lines**: Light Silver at 0.2 opacity
- **Tooltips**: Steel Gray background, white text, rounded corners

### Modals & Overlays
- **Backdrop**: rgba(12, 12, 15, 0.85) with backdrop-blur
- **Modal Container**: Steel Gray background, Shadow Navy border, rounded-xl
- **Header**: Deep Blue with Electric Blue accent line
- **Close Button**: Top-right, Light Silver with Cyber Orange hover

## Page-Specific Designs

### Landing Page
- **Hero Section**: Full-bleed muted autoplay looped video background (cybersecurity visuals - circuit boards, data streams, network nodes)
  - Video overlay: gradient from Midnight Black (bottom) to transparent
  - Headline: 56px bold, Electric Blue gradient text
  - Subtitle: 20px, Light Silver
  - CTA buttons with blurred backgrounds on video
  - Trust bar below hero: partner logos in Light Silver with opacity
- **Features Quick-Nav**: 7 cards in grid (icons + titles), Cyber Orange icon color, hover lifts with glow
- **Live Stats Strip**: 4-column counter widgets, large numbers in Electric Blue gradient, labels in gray
- **Deep Features Grid**: 3 columns, cards with icon, title, description, "Explore" link in Cyber Orange
- **Footer**: Deep Blue background, multi-column layout with sitemap, social icons in Light Silver

### Sign Up Page
- **Layout**: Split screen - Left (60%): onboarding video loop or illustration with overlay text, Right (40%): signup form card
- **Form Card**: Steel Gray background, Deep Blue border, centered, max-w-md
- **Tabs**: Email / SSO / Invite Link - Electric Blue active underline
- **Role Dropdown**: Custom styled select with Deep Blue background
- **Password Strength**: Visual meter below input, color-coded red to Electric Blue
- **Submit Button**: Full-width Electric Blue gradient

### Sign In Page
- **Layout**: Centered card on Midnight Black background with subtle grid pattern
- **Card**: Steel Gray, max-w-md, p-8
- **Logo**: Top center of card
- **Form**: Minimal, email + password inputs
- **Remember Me**: Custom checkbox with Electric Blue checked state
- **SSO Buttons**: Outlined style, icons + text
- **MFA Input**: 6-digit code boxes, Electric Blue focus state

### Dashboard Pages
- **Layout**: Sidebar (fixed left) + Topbar (fixed top) + Main content area (scrollable)
- **Summary Cards**: Grid of 4 metric cards at top, large number + small label + trend indicator
- **Charts Section**: Full-width or 2-column chart containers
- **Data Tables**: Full-width, sortable headers, pagination
- **Action Panels**: Right sidebar for quick actions (280px) when needed

## Images & Media

### Landing Page Hero
- **Video Background**: Cybersecurity-themed loop (network visualizations, data packets, circuit boards, digital security imagery)
- **Fallback Poster**: High-quality still from video with blue/orange tinting
- **Size**: 1920x1080 desktop, 720p mobile
- **Overlay**: Dark gradient for text readability

### Dashboard Illustrations
- **Empty States**: Minimalist illustrations in Electric Blue and Cyber Orange line art
- **Feature Icons**: Solid color icons (Cyber Orange) or outlined (Light Silver)

## Animations (Minimal)

### Subtle Micro-Interactions
- **Button Hover**: 200ms ease scale(1.02) + glow
- **Card Hover**: 300ms ease translate-y(-4px) + shadow increase
- **Menu Items**: 150ms ease background color fade
- **Loading States**: Subtle pulse or shimmer effect in Electric Blue
- **Page Transitions**: 250ms fade-in

### Avoid
- Heavy page transitions
- Distracting background animations
- Auto-playing carousels with motion

## Accessibility

- **Contrast**: All text meets WCAG 2.1 AA minimum (4.5:1 for normal text)
- **Focus States**: 2px Electric Blue outline with glow
- **Keyboard Navigation**: Full support, visible focus indicators
- **ARIA Labels**: All interactive elements properly labeled
- **Reduced Motion**: Respect prefers-reduced-motion media query

## Responsive Breakpoints
- **Desktop**: 1280px+ (full feature display)
- **Laptop**: 1024px (sidebar collapsible)
- **Tablet**: 768px (sidebar to mobile menu)
- **Mobile**: 480px (single column, stacked layouts)