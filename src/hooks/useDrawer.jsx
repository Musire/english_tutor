'use client';
import { useEffect, useRef, useState } from "react";

// AnimationState:
// true  = animate in
// false = animate out
// null  = reset

export default function useDrawer(duration = 300) {
  const [isMounted, setIsMounted] = useState(false);
  const [animation, setAnimation] = useState(true);

  const timeoutRef = useRef(null);

  const openDrawer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setIsMounted(true);
    setAnimation(true); // animate in
  };

  const closeDrawer = () => {
    setAnimation(false); // animate out

    timeoutRef.current = setTimeout(() => {
      setIsMounted(false);
      setAnimation(null); // reset
    }, duration);
  };

  const toggleDrawer = () => {
    if (isMounted) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    isMounted,
    animation,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
}