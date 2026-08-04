import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { DockContextType, DockItemProps, MouseType } from 'types';
import { useMouse } from '../context/MouseProvider';
import { useDock } from './Dock';
import { useRouter } from 'next/router';

const DockItem = ({ id, children, route, label, ...props }: DockItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMouse() as MouseType;
  const dock = useDock() as DockContextType;
  const router = useRouter();
  const isCurrentRoute =
    route != null ? (route === '/' ? router.pathname === route : router.pathname.startsWith(route || '/')) : false;

  const [elCenterX, setElCenterX] = useState<number>(0);

  const dimension = useTransform(mouse.position.x, (mouseX) => {
    return 40 + 38 * Math.cos((((mouseX - elCenterX) / (dock.width ?? 0)) * Math.PI) / 2) ** 58;
  });

  const spring = useSpring(40, {
    damping: 10,
    stiffness: 150,
    mass: 0.01,
  });

  useEffect(() => {
    return dimension.onChange((val) => {
      if (dock?.hovered) {
        spring.set(val);
      } else {
        spring.set(40);
      }
    });
  }, [spring, dimension, dock?.hovered]);

  useEffect(() => {
    const updateCenter = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) setElCenterX(rect.x + rect.width / 2);
    };

    updateCenter();
    window.addEventListener('resize', updateCenter);
    return () => window.removeEventListener('resize', updateCenter);
  }, []);

  return (
    <motion.li
      className="relative"
      {...props}
    >
      <motion.div
        ref={ref}
        id={id}
        className="ui-box dock-button relative h-full w-full"
        style={{
          height: spring,
          width: spring,
        }}
        whileTap={{ scale: isCurrentRoute ? 1 : 0.85 }}
      >
        {route ? (
          <button
            type="button"
            className="dock-action"
            aria-label={label}
            onClick={() => {
              if (!isCurrentRoute) void router.push(route);
            }}
          >
            {children}
          </button>
        ) : children}
      </motion.div>
      {isCurrentRoute && (
        <span
          className="dock-active-dot absolute -bottom-2.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
          aria-hidden="true"
        />
      )}
    </motion.li>
  );
};

export default DockItem;
