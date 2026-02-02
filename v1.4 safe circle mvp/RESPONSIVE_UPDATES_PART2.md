# Part 2: Remaining Responsive Updates

## Quick Summary of Fixes Needed

Based on your feedback, here are the remaining critical updates:

### 1. Product Sections (Wellbeing Monitor & Legacy Planner)

**Current Issues:**
- Screenshots still next to title/subtitle on mobile
- Titles too large on mobile
- USP boxes not stacking vertically
- "Learn more" button with chevron causing line breaks

**Mobile Layout Required:**
1. Title (outcome-focused) - smaller on mobile
2. Screenshot (placeholder)  
3. Subtitle/explainer text

**Updates Needed:**

```tsx
// Wellbeing Monitor & Legacy Planner sections need:

// 1. Section wrapper - responsive padding
<section id="wellbeing-monitor" className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px]">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
  
    // 2. Product title - responsive sizing + left-align on mobile
    <div className="text-left md:text-center mb-12 sm:mb-16 lg:mb-[80px]">
      <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[36px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]">
        Wellbeing monitor: Daily reassurance without checking in
      </h2>
      <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] text-[#838383] max-w-[884px] md:mx-auto">
        Your trusted contacts know you're okay through quiet background monitoring...
      </p>
    </div>

    // 3. Screenshot + Text pairs - Stack on mobile (Title → Screenshot → Text)
    <div className="max-w-[960px] mx-auto">
      {/* Feature 1 - Always Title → Screenshot → Text on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-[96px] mb-12 sm:mb-16 lg:mb-[100px]">
        {/* Title comes first on mobile */}
        <div className="w-full lg:hidden text-left">
          <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[22px] sm:text-[28px] leading-[1.2] tracking-[-0.02em] text-[#323232] mb-3">
            You see daily confirmation that they are active and doing well
          </h3>
        </div>
        
        {/* Screenshot second on mobile, left on desktop */}
        <div className="w-full max-w-[280px] sm:max-w-[300px] lg:w-[300px] shrink-0 mx-auto lg:mx-0">
          <div className="aspect-[9/16] overflow-hidden">
            <img src={imgPlaceholder} alt="Placeholder" className="w-full h-full object-cover rounded-[12px] sm:rounded-[16px] border-[2px] sm:border-[3px] border-black" />
          </div>
        </div>
        
        {/* Text last on mobile, right on desktop */}
        <div className="flex-1 w-full text-left">
          {/* Desktop title (hidden on mobile) */}
          <h3 className="hidden lg:block font-['Open_Sans:ExtraBold',sans-serif] text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4">
            You see daily confirmation that they are active and doing well
          </h3>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#838383]">
            SafeCircle monitors activity patterns in the background. When everything is normal, you get quiet confirmation that they're going about their day.
          </p>
        </div>
      </div>

      {/* Feature 2 - Same pattern, no alternation on mobile */}
      <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-6 sm:gap-8 lg:gap-[96px] mb-12 sm:mb-16 lg:mb-[100px]">
        {/* Title first on mobile */}
        <div className="w-full lg:hidden text-left">
          <h3 className="font-['Open_Sans:ExtraBold',sans-serif] text-[22px] sm:text-[28px] leading-[1.2] tracking-[-0.02em] text-[#323232] mb-3">
            If something happens, the right people know
          </h3>
        </div>
        
        {/* Screenshot second on mobile, right on desktop */}
        <div className="w-full max-w-[280px] sm:max-w-[300px] lg:w-[300px] shrink-0 mx-auto lg:mx-0">
          <div className="aspect-[9/16] overflow-hidden">
            <img src={imgPlaceholder} alt="Placeholder" className="w-full h-full object-cover rounded-[12px] sm:rounded-[16px] border-[2px] sm:border-[3px] border-black" />
          </div>
        </div>
        
        {/* Text last on mobile, left on desktop */}
        <div className="flex-1 w-full text-left">
          <h3 className="hidden lg:block font-['Open_Sans:ExtraBold',sans-serif] text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4">
            If something happens, the right people know
          </h3>
          <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#838383]">
            When a check-in is missed, trusted contacts are notified automatically...
          </p>
        </div>
      </div>
    </div>

    // 4. 3 Selling Points - Stack vertically on mobile
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-[40px] max-w-[1200px] mx-auto mb-10 sm:mb-12 lg:mb-[60px]">
      {/* Each card... */}
    </div>

    // 5. Learn More button - Change text, remove chevron
    <div className="text-center">
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-[#f8918a] font-['Open_Sans:SemiBold',sans-serif] text-[15px] sm:text-[16px] hover:underline cursor-pointer"
      >
        {showDetails ? 'Hide details' : 'Learn more about how Wellbeing Monitor works'}
      </button>
    </div>

    // 6. Expanded details - Fix padding
    {showDetails && (
      <div className="max-w-[800px] mx-auto mt-10 sm:mt-12 lg:mt-[60px] space-y-8 sm:space-y-10 lg:space-y-[48px]">
        <div>
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] lg:text-[28px] text-[#323232] mb-4 sm:mb-5 lg:mb-[24px] text-left">
            How it works
          </h3>
          <div className="space-y-4 sm:space-y-5 lg:space-y-[20px] text-left">
            {/* Steps with responsive padding */}
          </div>
        </div>

        <div className="bg-white border-[2px] border-black rounded-[12px] p-4 sm:p-6 lg:p-[32px]">
          <h3 className="font-['Open_Sans:Bold',sans-serif] text-[18px] sm:text-[20px] lg:text-[24px] text-[#323232] mb-4 sm:mb-5 lg:mb-[20px] text-left">
            What this is not
          </h3>
          <div className="space-y-3 sm:space-y-4 lg:space-y-[16px] text-left">
            {/* Content */}
          </div>
        </div>
      </div>
    )}
```

### 2. Privacy & Security Section

```tsx
<section id="privacy" className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px]">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
    <div className="max-w-[1000px] mx-auto">
      <div className="text-left md:text-center mb-12 sm:mb-16 lg:mb-[80px]">
        <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[36px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-3 sm:mb-4 lg:mb-[16px]">
          Your privacy is protected
        </h2>
        <p className="font-['Open_Sans:Regular',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] text-[#838383] max-w-[700px] md:mx-auto">
          We designed SafeCircle to give you peace of mind...
        </p>
      </div>
      
      {/* Stack vertically on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[32px]">
        <div className="bg-white border-[2px] border-black rounded-[12px] p-5 sm:p-6 lg:p-[32px] text-left">
          {/* Content */}
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. FAQ Section

```tsx
<section className="bg-[#fff5f0] py-16 sm:py-20 lg:py-[120px]">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
    <div className="text-left md:text-center mb-12 sm:mb-16 lg:mb-[80px]">
      <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[24px] sm:text-[36px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232]">
        Common questions
      </h2>
    </div>
    
    <div className="max-w-[900px] mx-auto space-y-3 sm:space-y-4 lg:space-y-[16px]">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white border-[2px] border-black rounded-[8px] overflow-hidden">
          <button className="w-full px-4 sm:px-6 lg:px-[32px] py-4 sm:py-5 lg:py-[24px] flex items-center justify-between text-left hover:bg-[#ffebe5] transition-colors cursor-pointer">
            <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] text-[#323232] pr-4">
              {faq.question}
            </span>
            <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-[#323232] shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          {openIndex === index && (
            <div className="px-4 sm:px-6 lg:px-[32px] pb-4 sm:pb-5 lg:pb-[24px]">
              <p className="font-['Open_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] leading-[1.6] text-[#838383] text-left">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
```

### 4. Final CTA Section

```tsx
<section className="bg-white py-16 sm:py-20 lg:py-[120px]">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
    <div className="max-w-[800px] mx-auto text-left md:text-center">
      <h2 className="font-['Open_Sans:ExtraBold',sans-serif] text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#323232] mb-4 sm:mb-5 lg:mb-[24px]">
        Live independently, stay prepared
      </h2>
      <p className="font-['Open_Sans:Regular',sans-serif] text-[17px] sm:text-[18px] lg:text-[20px] leading-[1.5] text-[#838383] mb-6 sm:mb-8 lg:mb-[40px]">
        Join SafeCircle today. 14-day money-back guarantee.
      </p>
      <button className="w-full sm:w-auto inline-flex items-center justify-center bg-[#f8918a] h-[52px] sm:h-[56px] lg:h-[60px] px-8 sm:px-10 lg:px-[40px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[18px] sm:text-[19px] lg:text-[20px] text-white hover:bg-[#f9675d] transition-colors cursor-pointer">
        Get Started
      </button>
    </div>
  </div>
</section>
```

### 5. Pricing Section - Fix Order

Order should be: Wellbeing Monitor, Legacy Planner, Complete Care

```tsx
const plans = [
  {
    id: 'wellbeing-monitor',
    name: 'Wellbeing Monitor',
    // ... existing config
  },
  {
    id: 'legacy-planner',
    name: 'Legacy Planner',
    // ... existing config
  },
  {
    id: 'complete-care',
    name: 'Complete Care',
    popular: true,
    // ... existing config
  }
];
```

### 6. Contact Page Updates

```tsx
<section className="bg-white py-16 sm:py-20 lg:py-[120px]">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px]">
    {/* Content boxes with padding: p-4 sm:p-5 lg:p-[16px] */}
  </div>
</section>
```

### 7. Checkout Page - Major Restructure

**Cart → Fixed Bottom Navigation:**
```tsx
{/* Fixed bottom cart on mobile */}
<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black shadow-lg z-40">
  <div className="px-4 py-3">
    {!cartExpanded && (
      <button onClick={() => setCartExpanded(true)} className="w-full flex items-center justify-between">
        <span className="font-['Open_Sans:SemiBold',sans-serif] text-[16px]">
          Order Summary
        </span>
        <span className="font-['Open_Sans:Bold',sans-serif] text-[18px]">
          ${total}/mo
        </span>
      </button>
    )}
    {cartExpanded && (
      <div className="max-h-[60vh] overflow-y-auto">
        {/* Full cart details */}
        <button onClick={() => setCartExpanded(false)}>Close</button>
      </div>
    )}
  </div>
</div>

{/* Desktop sidebar cart */}
<div className="hidden lg:block lg:col-span-1">
  {/* Existing cart */}
</div>
```

**Step Indicator:**
```tsx
<div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
  {[1, 2, 3].map((step) => (
    <div key={step} className="flex items-center">
      <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${
        currentStep === step ? 'bg-[#f8918a] border-[#f8918a] text-white' : 'bg-white border-black text-[#323232]'
      }`}>
        <span className="font-['Open_Sans:Bold',sans-serif] text-[14px] sm:text-[16px]">{step}</span>
      </div>
      {/* Show label only for active step on mobile, all steps on desktop */}
      {(currentStep === step || window.innerWidth >= 768) && (
        <span className="ml-2 font-['Open_Sans:SemiBold',sans-serif] text-[14px] sm:text-[16px]">
          {['Select Plan', 'Your Info', 'Payment'][step - 1]}
        </span>
      )}
      {step < 3 && <div className="w-8 sm:w-12 h-0.5 bg-black/20 mx-2" />}
    </div>
  ))}
</div>
```

**Billing Toggle on First Step:**
```tsx
{currentStep === 1 && (
  <div className="mb-6 sm:mb-8">
    <div className="flex items-center gap-2 bg-white p-1.5 rounded-lg border-2 border-black w-full">
      {/* Full width toggle */}
    </div>
  </div>
)}
```

## Key Responsive Patterns

1. **Text alignment:** Left on mobile (<768px), center on desktop
2. **Padding consistency:** `px-4 sm:px-8 lg:px-[70px]`
3. **Typography:** Scale down significantly on mobile
4. **Grids:** Always stack to 1 column on mobile
5. **Buttons:** Full width on mobile when primary CTA
6. **Product features:** Title → Image → Text on mobile (no alternation)

