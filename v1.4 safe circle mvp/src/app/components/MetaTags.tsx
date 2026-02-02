import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function MetaTags({ 
  title,
  description,
  image,
  url
}: MetaTagsProps) {
  const { i18n } = useTranslation();
  
  // Default meta content
  const defaultTitle = i18n.language === 'nl' 
    ? 'SafeCircle - Welzijnsmonitoring voor Zelfstandig Wonen'
    : 'SafeCircle - Wellness Monitoring for Independent Living';
  
  const defaultDescription = i18n.language === 'nl'
    ? 'SafeCircle biedt welzijnsmonitoring en beheer van contactpersonen voor mensen die zelfstandig wonen. Blijf verbonden met gemoedsrust.'
    : 'SafeCircle provides wellness monitoring and emergency contact management for people living independently. Stay connected with peace of mind.';
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  useEffect(() => {
    // Update standard meta tags
    document.title = finalTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = finalDescription;
      document.head.appendChild(meta);
    }
    
    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: finalTitle },
      { property: 'og:description', content: finalDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: finalUrl },
    ];
    
    if (image) {
      ogTags.push({ property: 'og:image', content: image });
    }
    
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (tag) {
        tag.content = content;
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.content = content;
        document.head.appendChild(tag);
      }
    });
    
    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: finalTitle },
      { name: 'twitter:description', content: finalDescription },
    ];
    
    if (image) {
      twitterTags.push({ name: 'twitter:image', content: image });
    }
    
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (tag) {
        tag.content = content;
      } else {
        tag = document.createElement('meta');
        tag.name = name;
        tag.content = content;
        document.head.appendChild(tag);
      }
    });
  }, [finalTitle, finalDescription, finalUrl, image]);
  
  return null;
}
