import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function findScrollContainer(element) {
  if (!element) return null;
  let parent = element.parentElement;
  while (parent && parent !== document.documentElement) {
    const style = window.getComputedStyle(parent);
    if (
      (style.overflowY === 'auto' || style.overflowY === 'scroll') &&
      parent.scrollHeight > parent.clientHeight
    ) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return document.getElementById('app-layout-container') || window;
}

export default function Link({
  href,
  children,
  className = '',
  onClick = null,
  ...props
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const linkRef = useRef(null);

  const handleClick = (e) => {
    if (typeof onClick === 'function') {
      onClick(e);
    }

    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();

    const container = findScrollContainer(linkRef.current);

    // Case 1: Pure `#` link
    if (href === '#') {
      if (container && container !== window) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      window.history.pushState(null, '', '#');
      return;
    }

    // Case 2: In-page anchor link (e.g., `#section-1`)
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element && container && container !== window) {
        const targetPosition =
          element.getBoundingClientRect().top +
          container.scrollTop -
          container.getBoundingClientRect().top;
        container.scrollTo({ top: targetPosition, behavior: 'smooth' });
        window.history.pushState(null, '', href);
      } else if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    const [path, hash] = href.split('#');

    // Resolve relative paths so `/` and relative URLs compare correctly
    const targetPath = new URL(path, window.location.origin).pathname;

    // Case 3: Navigating within the exact same path
    if (targetPath === location.pathname) {
      if (hash) {
        const element = document.querySelector(`#${hash}`);
        if (element && container && container !== window) {
          const targetPosition =
            element.getBoundingClientRect().top +
            container.scrollTop -
            container.getBoundingClientRect().top;
          container.scrollTo({ top: targetPosition, behavior: 'smooth' });
          window.history.pushState(null, '', `#${hash}`);
        } else if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        if (container && container !== window) {
          container.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      return;
    }

    // Case 4: Navigating to a DIFFERENT route
    if (container && container !== window) {
      container.scrollTop = 0;
    }
    window.scrollTo(0, 0);

    // Perform navigation
    navigate(href);

    // If target URL contains a hash, attempt to scroll to it post-render
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <a
      ref={linkRef}
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}