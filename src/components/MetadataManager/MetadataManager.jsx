import { globalMetadata } from '@/config/globalMetadata';
import { useLocation } from 'react-router-dom';


const MetadataManager = () => {
  const { pathname } = useLocation();

  // 1. Resolve metadata match (strict path lookup first, then fallback wildcard matching)
  let matchedConfig = globalMetadata[pathname];

  if (!matchedConfig) {
    // Handle dynamic wildcards like /users/123 matching /users/*
    const wildcardKey = Object.keys(globalMetadata).find(key => {
      if (!key.endsWith('/*')) return false;
      const baseRoute = key.slice(0, -2);
      return pathname.startsWith(baseRoute);
    });
    matchedConfig = wildcardKey ? globalMetadata[wildcardKey] : globalMetadata.default;
  }

  // Merge matched config fields safely with global base fallbacks
  const meta = { ...globalMetadata.default, ...matchedConfig };

  // 2. Write Document Tab Title directly during render phase
  if (meta.title) {
    document.title = meta.title;
  }

  // Reusable utility function to manage standard DOM meta tags synchronously
  const updateOrCreateMeta = (attrName, attrValue, contentValue) => {
    if (!contentValue) return;
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', contentValue);
  };

  // 3. Inject standard SEO configuration tags
  updateOrCreateMeta('name', 'description', meta.description);
  if (meta.keywords && Array.isArray(meta.keywords)) {
    updateOrCreateMeta('name', 'keywords', meta.keywords.join(', '));
  }

  // 4. Inject Open Graph configurations
  updateOrCreateMeta('property', 'og:title', meta.openGraph?.title || meta.title);
  updateOrCreateMeta('property', 'og:description', meta.openGraph?.description || meta.description);
  updateOrCreateMeta('property', 'og:url', meta.openGraph?.url || window.location.href);

  // 5. Inject Twitter Card configurations
  updateOrCreateMeta('name', 'twitter:card', meta.twitter?.card || 'summary_large_image');
  updateOrCreateMeta('name', 'twitter:title', meta.twitter?.title || meta.title);
  updateOrCreateMeta('name', 'twitter:description', meta.twitter?.description || meta.description);

  return null; 
};

export default MetadataManager