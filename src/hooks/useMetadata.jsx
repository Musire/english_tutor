import { useEffect } from 'react';

export default function useMetadata(config = {}) {
  useEffect(() => {
    if (!config) return;

    // 1. Update document title
    if (config.title) {
      document.title = config.title;
    }

    // 2. Helper function to create or update head meta tags
    const updateMetaTag = (attributeName, attributeValue, contentValue) => {
      if (!contentValue) return;
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 3. Update Standard SEO tags
    updateMetaTag('name', 'description', config.description);
    updateMetaTag('name', 'keywords', config.keywords?.join(', '));

    // 4. Update Open Graph tags
    updateMetaTag('property', 'og:title', config.openGraph?.title || config.title);
    updateMetaTag('property', 'og:description', config.openGraph?.description || config.description);
    if (config.openGraph?.images?.[0]?.url) {
      updateMetaTag('property', 'og:image', config.openGraph.images[0].url);
    }

    // 5. Update Twitter Card tags
    updateMetaTag('name', 'twitter:card', config.twitter?.card);
    updateMetaTag('name', 'twitter:title', config.twitter?.title || config.title);
    updateMetaTag('name', 'twitter:description', config.twitter?.description || config.description);

  }, [JSON.stringify(config)]); // Only re-run if metadata settings change
}
