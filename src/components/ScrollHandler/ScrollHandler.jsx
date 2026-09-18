import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const container = document.getElementById('app-layout-container');

    if (hash && hash !== '#') {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element && container) {
          // Calculate the target element's position inside our custom scroll wrapper box
          const targetPosition = element.getBoundingClientRect().top + container.scrollTop - container.getBoundingClientRect().top;
          container.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (container) {
        container.scrollTop = 0; // Snap cleanly back to top on full route changes
      }
    }
  }, [pathname, hash]);

  return null;
}
