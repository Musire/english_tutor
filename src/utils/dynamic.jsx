import React from 'react';

export function dynamic(importFn, options = {}) {
  // Load the component lazily
  const LazyComponent = React.lazy(importFn);

  // Return a wrapper component
  return function DynamicWrapper(props) {
    // Use the custom loading component or fallback to null
    const fallback = options.loading ? <options.loading /> : null;

    return (
      <React.Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  };
}
