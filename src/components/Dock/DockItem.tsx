import { motion, useAnimationControls, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useEvent } from 'react-use';
import { DockContextType, DockItemProps, MouseType } from 'types';
import { useMouse } from '../context/MouseProvider';
import { useDock } from './Dock';
import { useRouter } from 'next/router';

const DockItem = ({ id, children, route, ...props }: DockItemProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const mouse = useMouse() as MouseType;
  const dock = useDock() as DockContextType;
  const router = useRouter();
  const isCurrentRoute =
    route != null ? (route === '/' ? router.pathname === route : router.pathname.startsWith(route || '/')) : false;

  const [elCenterX, setElCenterX] = useState<number>(0);
  const controls = useAnimationControls();

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
    const rect = ref.current ? ref.current.getBoundingClientRect() : null;
    if (rect) setElCenterX(rect.x + rect.width / 2);
  }, []);

  useEvent('resize', () => {
    const rect = ref.current ? ref.current.getBoundingClientRect() : null;
    if (rect) setElCenterX(rect.x + rect.width / 2);
  });

  return (
    <motion.li
      className="relative"
      {...props}
      onClick={() => {
        if (!isCurrentRoute && route) {
          router.push(route);
        }
      }}
    >
      <motion.button
        ref={ref}
        id={id}
        className="ui-box relative h-full w-full"
        aria-describedby={id}
        animate={controls}
        custom={spring}
        transition={{
          default: {
            duration: 0.2,
          },
          translateY: {
            duration: 0.4,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          },
        }}
        style={{
          height: spring,
          width: spring,
          color: isCurrentRoute ? '#5A827E' : '#64748B', // Sophisticated teal for active, muted gray for inactive
        }}
        whileHover={{
          backgroundColor: '#5A827E',
          borderColor: '#5A827E',
          boxShadow: '0 8px 25px rgba(90, 130, 126, 0.25), 0 3px 10px rgba(90, 130, 126, 0.15)',
          color: '#FFFFFF',
          y: -3,
          scale: 1.05,
        }}
        whileTap={{ scale: isCurrentRoute ? 1 : 0.95 }}
        whileFocus={{
          backgroundColor: '#5A827E',
          borderColor: '#5A827E',
          boxShadow: '0 8px 25px rgba(90, 130, 126, 0.25), 0 3px 10px rgba(90, 130, 126, 0.15)',
          color: '#FFFFFF',
          outline: 'none',
        }}
      >
        {children}
      </motion.button>
      {isCurrentRoute && (
        <span
          className="absolute -bottom-2.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: '#5A827E' }}
          aria-hidden="true"
        />
      )}
    </motion.li>
  );
};

export default DockItem;
