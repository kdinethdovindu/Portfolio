import { useEffect } from 'react';
import { useReducedMotion } from 'motion/react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function useSmoothScroll() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const scroll = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.075,
      wheelMultiplier: 0.85,
      // Keep the device's native touch momentum and nested form scrolling.
      syncTouch: false,
      allowNestedScroll: true,
      anchors: true,
    });

    return () => scroll.destroy();
  }, [reducedMotion]);
}
