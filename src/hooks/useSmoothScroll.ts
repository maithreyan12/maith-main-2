import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;

/** The active Lenis instance, or null before mount. */
export function getLenis(): Lenis | null {
  return lenis;
}

/**
 * Inertial smooth scrolling for wheel & trackpad.
 * Touch devices keep native momentum scrolling (syncTouch off).
 */
export function useSmoothScroll() {
  useEffect(() => {
    lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,          // snappier catch-up (was 0.1)
      smoothWheel: true,
      syncTouch: true,     // native momentum on iOS/Android
      wheelMultiplier: 1.1, // slightly faster wheel feel
      touchMultiplier: 1.5, // more responsive touch drag
    });
    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}
