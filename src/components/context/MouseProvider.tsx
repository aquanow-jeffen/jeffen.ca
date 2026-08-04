import { MouseType } from 'types';
import { useMotionValue, useVelocity } from 'framer-motion';
import { ReactNode, createContext, useContext, useEffect, useMemo } from 'react';

const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return useMemo(() => ({ x, y }), [x, y]);
};

const MouseContext = createContext<MouseType | null>(null);

export const useMouse = () => {
  return useContext(MouseContext);
};

export const MouseProvider = ({ children }: { children: ReactNode }) => {
  const { x, y } = useMousePosition();
  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  const mouse = useMemo(
    () => ({
      position: { x, y },
      velocity: { x: velocityX, y: velocityY },
    }),
    [x, y, velocityX, velocityY]
  );

  return <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>;
};
