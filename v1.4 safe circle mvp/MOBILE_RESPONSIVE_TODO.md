# Mobile Responsive Updates - Remaining Work

This document outlines all remaining sections that need mobile responsive updates for the SafeCircle landing pages.

## Completed ✅
- Header (with hamburger menu)
- Entry Router page
- Hero section (Live Alone page)
- Problem section (Live Alone page)

## Remaining To Update

### 1. Wellbeing Monitor Section (both pages)
**Current:** Desktop-only layout with left/right alternating images
**Needed:**
- Mobile: Stack vertically as Title → Screenshot → Text (no alternation)
- Tablet: Stack vertically  
- Desktop: Keep current left-right layout

**Responsive padding/spacing:**
- py-[120px] → py-16 sm:py-20 lg:py-[120px]
- px-[70px] → px-4 sm:px-8 lg:px-[70px]
- mb-[80px] → mb-12 sm:mb-16 lg:mb-[80px]

**Typography scaling:**
- Section title: text-[56px] → text-[28px] sm:text-[40px] lg:text-[56px]
- Section subtitle: text-[20px] → text-[16px] sm:text-[18px] lg:text-[20px]
- Feature title: text-[40px] → text-[24px] sm:text-[30px] lg:text-[40px]
- Feature text: text-[18px] → text-[15px] sm:text-[16px] lg:text-[18px]

**Screenshot + Text Layout:**
```tsx
{/* Mobile/Tablet: Stack */}
<div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-[96px] mb-12 sm:mb-16 lg:mb-[100px]">
  {/* Always show screenshot first on mobile */}
  <div className="w-full max-w-[300px] lg:w-[300px] shrink-0 lg:order-first">
    <div className="aspect-[9/16] overflow-hidden">
      <img src={imgPlaceholder} alt="Placeholder" className="w-full h-full object-cover rounded-[12px] sm:rounded-[16px] border-[2px] sm:border-[3px] border-black" />
    </div>
  </div>
  <div className="flex-1 w-full">
    <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[30px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
      You see daily confirmation that they are active and doing well
    </h3>
    <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
      SafeCircle monitors activity patterns in the background. When everything is normal, you get quiet confirmation that they're going about their day.
    </p>
  </div>
</div>
```

### 2. 3 Selling Points Grid (both products)
**Current:** grid-cols-3
**Needed:**
- Mobile: grid-cols-1
- Tablet: grid-cols-2 or grid-cols-3
- Desktop: grid-cols-3

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[40px] max-w-[1200px] mx-auto mb-12 sm:mb-16 lg:mb-[60px]">
```

**Card padding:** p-[24px] → p-4 sm:p-5 lg:p-[24px]
**Icon size:** size-[48px] → size-[40px] sm:size-[44px] lg:size-[48px]

### 3. Legacy Planner Section
Same responsive treatment as Wellbeing Monitor

### 4. Privacy & Security Section
**Grid:** grid-cols-2 → grid-cols-1 md:grid-cols-2
**Padding:** px-[70px] py-[120px] → px-4 sm:px-8 lg:px-[70px] py-16 sm:py-20 lg:py-[120px]
**Typography:**
- Main title: text-[56px] → text-[28px] sm:text-[40px] lg:text-[56px]
- Card title: text-[22px] → text-[18px] sm:text-[20px] lg:text-[22px]
- Card text: text-[16px] → text-[14px] sm:text-[15px] lg:text-[16px]

### 5. FAQ Section
**Padding:** px-[70px] py-[120px] → px-4 sm:px-8 lg:px-[70px] py-16 sm:py-20 lg:py-[120px]
**Title:** text-[56px] → text-[28px] sm:text-[40px] lg:text-[56px]
**FAQ button padding:** px-[32px] py-[24px] → px-4 sm:px-6 lg:px-[32px] py-4 sm:py-5 lg:py-[24px]
**FAQ text:** text-[18px] → text-[16px] sm:text-[17px] lg:text-[18px]

### 6. Final CTA Section
**Padding:** px-[70px] py-[120px] → px-4 sm:px-8 lg:px-[70px] py-16 sm:py-20 lg:py-[120px]
**Title:** text-[56px] → text-[28px] sm:text-[40px] lg:text-[56px]
**Subtitle:** text-[20px] → text-[16px] sm:text-[18px] lg:text-[20px]
**Button:** h-[60px] px-[40px] → h-[52px] sm:h-[56px] lg:h-[60px] px-6 sm:px-8 lg:px-[40px]

### 7. Pricing Section Component
**File:** `/src/app/components/PricingSection.tsx`
**Grid:** grid-cols-3 → grid-cols-1 md:grid-cols-2 lg:grid-cols-3
**Padding:** px-[70px] py-[120px] → px-4 sm:px-8 lg:px-[70px] py-16 sm:py-20 lg:py-[120px]
**Title:** text-[56px] → text-[28px] sm:text-[40px] lg:text-[56px]
**Plan card:**  
- p-[40px] → p-6 sm:p-8 lg:p-[40px]
- Most Popular badge: top-[-16px] → top-[-12px] sm:top-[-16px]
- Plan name: text-[28px] → text-[22px] sm:text-[24px] lg:text-[28px]
- Price: text-[48px] → text-[36px] sm:text-[42px] lg:text-[48px]

### 8. Footer
**File:** `/src/app/components/Footer.tsx`
**Grid:** grid-cols-4 → grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
**Padding:** px-[70px] py-[60px] → px-4 sm:px-8 lg:px-[70px] py-12 sm:py-16 lg:py-[60px]
**Gap:** gap-[80px] → gap-8 sm:gap-12 lg:gap-[80px]

### 9. WorryAboutSomeonePage_REBUILD.tsx
Apply same responsive patterns as LiveAlonePage_NEW.tsx

### 10. Checkout Page
**File:** `/src/app/pages/Checkout.tsx`
**Progress steps:** 
- Show full labels on tablet+
- Show compact version on mobile (just numbered dots without heavy spacing)
**Grid:** grid-cols-3 → grid-cols-1 lg:grid-cols-3 (sidebar should stack on mobile)
**Form inputs:** Full width on mobile
**Plan cards:** Stack vertically on mobile

### 11. Contact Page
**Grid:** grid-cols-1 lg:grid-cols-2
**Responsive padding and typography following same patterns

### 12. Help Center
**Categories grid:** grid-cols-2 → grid-cols-1 md:grid-cols-2
**Responsive padding and typography

## Breakpoint Strategy

Using Tailwind's default breakpoints:
- Mobile: < 640px (no prefix)
- sm: ≥ 640px
- md: ≥ 768px  
- lg: ≥ 1024px

## Typography Scaling Pattern

For fluid, accessible typography on all screen sizes:

**Large Headings (70px desktop):**
- Mobile: 32-36px
- Tablet: 48px
- Desktop: 70px

**Medium Headings (56px desktop):**
- Mobile: 28px
- Tablet: 40px
- Desktop: 56px

**Small Headings (40px desktop):**
- Mobile: 24px
- Tablet: 30px
- Desktop: 40px

**Body Text (20px desktop):**
- Mobile: 15-16px
- Tablet: 17-18px
- Desktop: 20px

**Small Text (16px desktop):**
- Mobile: 14px
- Tablet: 15px
- Desktop: 16px

## Spacing Scale

**Sectionpadding (120px desktop):**
- Mobile: 64px (py-16)
- Tablet: 80px (py-20)
- Desktop: 120px (py-[120px])

**Container padding (70px desktop):**
- Mobile: 16px (px-4)
- Tablet: 32px (px-8)
- Desktop: 70px (px-[70px])

**Element gaps (40px desktop):**
- Mobile: 16px (gap-4)
- Tablet: 24px (gap-6)
- Desktop: 40px (gap-[40px])
