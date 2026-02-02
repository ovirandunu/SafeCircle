/**
 * Initialize analytics services (Google Analytics 4 and Microsoft Clarity)
 * Call this once at app initialization
 */

export function initAnalytics() {
  // Google Analytics 4
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 measurement ID
  
  // Load GA4 script
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);
  
  // Initialize GA4
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  // Microsoft Clarity
  const CLARITY_PROJECT_ID = 'XXXXXXXXXX'; // Replace with your Clarity project ID
  
  // Load Clarity script
  const clarityScript = document.createElement('script');
  clarityScript.type = 'text/javascript';
  clarityScript.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
  `;
  document.head.appendChild(clarityScript);
}

/**
 * Check if analytics is enabled (for GDPR compliance)
 */
export function isAnalyticsEnabled(): boolean {
  // You can add cookie consent logic here
  return true;
}
