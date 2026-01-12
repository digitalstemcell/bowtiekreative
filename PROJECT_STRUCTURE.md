# Bow Tie Kreative - Project Structure

## Overview
This is a fully modular marketing funnel application built for Bow Tie Kreative. Each feature is completely isolated, making it easy to maintain, debug, and update individual components.

## Folder Structure

```
src/
├── features/                 # All feature modules
│   ├── opt-in/              # Free book opt-in page
│   │   ├── components/      # Page-specific components
│   │   │   ├── Hero.tsx
│   │   │   ├── BulletPoints.tsx
│   │   │   ├── CtaSection.tsx
│   │   │   ├── CredibilitySection.tsx
│   │   │   └── BookImage.tsx
│   │   ├── data/            # Page data
│   │   │   └── optInData.ts
│   │   └── OptInPage.tsx    # Main page component
│   │
│   ├── thank-you/           # Thank you / segmentation page
│   │   ├── components/
│   │   │   ├── Confirmation.tsx
│   │   │   ├── PathCard.tsx
│   │   │   └── SegmentationCards.tsx
│   │   ├── data/
│   │   │   └── thankYouData.ts
│   │   └── ThankYouPage.tsx
│   │
│   ├── audit/               # Marketing audit sales page ($47/$297)
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── TierCard.tsx
│   │   │   ├── TierOptions.tsx
│   │   │   ├── WhatWeLookFor.tsx
│   │   │   ├── Deliverables.tsx
│   │   │   └── FaqSection.tsx
│   │   ├── data/
│   │   │   └── auditData.ts
│   │   └── AuditPage.tsx
│   │
│   ├── workshop/            # 3-day workshop sales page ($1,997)
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── WhoItsFor.tsx
│   │   │   ├── Deliverables.tsx
│   │   │   ├── DayCard.tsx
│   │   │   ├── ThreeDayPlan.tsx
│   │   │   └── FaqSection.tsx
│   │   ├── data/
│   │   │   └── workshopData.ts
│   │   └── WorkshopPage.tsx
│   │
│   ├── viral/               # Viral system page (placeholder)
│   │   └── ViralPage.tsx
│   │
│   └── vault/               # Vault page (placeholder)
│       └── VaultPage.tsx
│
├── shared/                  # Shared/reusable components
│   └── components/
│       ├── Button.tsx       # Reusable button component
│       ├── Container.tsx    # Layout container
│       └── Navigation.tsx   # Site navigation
│
├── App.tsx                  # Main app with routing
└── main.tsx                 # App entry point
```

## Key Features

### Modular Architecture
- Each page is a self-contained feature module
- Components are isolated within their feature folders
- Data is separated from presentation logic
- Easy to copy any single file into ChatGPT for debugging

### Pages

1. **Opt-In Page** (`/`)
   - Hero section with headline and subheadline
   - Book cover image
   - Bullet points highlighting key benefits
   - Email capture form
   - Credibility section

2. **Thank You / Segmentation Page** (`/thank-you`)
   - Confirmation message
   - Four path cards for user segmentation:
     - Underperforming website → Audit
     - Need fast website → Workshop
     - Need attention → Viral System
     - Want everything → Vault

3. **Audit Sales Page** (`/audit`)
   - Two-tier pricing ($47 and $297)
   - What we look for section
   - Deliverables
   - FAQ accordion

4. **Workshop Sales Page** (`/workshop`)
   - Hero with pricing ($1,997)
   - Who it's for / not for
   - Deliverables list
   - 3-day plan breakdown
   - FAQ accordion

5. **Viral Page** (`/viral`)
   - Coming soon placeholder

6. **Vault Page** (`/vault`)
   - Coming soon placeholder

## Design System

### Colors
- Primary: Slate (900, 800, 700, 600, etc.)
- Accent: Emerald (600, 700, 100, 50)
- Background: Slate-50, White
- No purple/indigo (per requirements)

### Components
- **Button**: Three variants (primary, secondary, outline)
- **Container**: Responsive max-width containers
- **Navigation**: Clean header with brand name

## Routing
- React Router for client-side navigation
- Clean URLs for each funnel step
- 404 redirects to home page

## Development

### Run Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Type Check
```bash
npm run typecheck
```

## Future Enhancements

1. **Supabase Integration**
   - Email capture storage
   - Lead tracking
   - Analytics

2. **Stripe Integration**
   - Payment processing for audit and workshop
   - Checkout flows

3. **Email Automation**
   - Welcome sequences
   - Nurture campaigns

4. **Viral System & Vault**
   - Complete these placeholder pages
   - Add content and features
