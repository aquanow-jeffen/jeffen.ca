import { useEffect, useState } from "react";

export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const updateTouchSupport = () => {
      const supportsTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0;
      setIsTouch(supportsTouch);
    };

    const frame = window.requestAnimationFrame(updateTouchSupport);
    window.addEventListener('pointerdown', updateTouchSupport, { once: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointerdown', updateTouchSupport);
    };
  }, []);

  return isTouch;
}
