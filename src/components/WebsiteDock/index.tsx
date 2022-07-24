import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/system";
import Divider from "@components/Divider";
import { motion } from "framer-motion";
import { useDebounce, useThrottle } from "rooks";

import DockItem from "./DockItem";
import data from "./menuData";
import { isTouchDevice } from "@lib/touch";

const MotionComponent = motion(DockItem);

export default function WebsiteDock() {
  const FRAME_RATE = 60;
  const MAX_DISTANCE = 260;
  const INIT_SIZE = 48;
  const MAX_SIZE = 96;
  const linkRefs = useRef(data);
  const [isTouch, setIsTouch] = useState(false);
  const [sizes, setSizes] = useState<Array<number>>(
    Array(data.length).fill(INIT_SIZE)
  );

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  const setSizeDebounced = useDebounce(setSizes, 1000 / FRAME_RATE);

  const [handleMouseMove] = useThrottle((e) => {
    if (isTouchDevice()) return;
    const newSizes = linkRefs.current.map((item) => {
      if (!item.elRef) return INIT_SIZE;
      const distance = Math.min(
        Math.abs(e.clientX - item.centerX),
        MAX_DISTANCE
      );
      return MAX_SIZE - ((MAX_SIZE - INIT_SIZE) / MAX_DISTANCE) * distance;
    });
    setSizes(newSizes);
  }, 1000 / FRAME_RATE);

  const handlePointerOut = (e) => {
    if (e.relatedTarget?.tagName) {
      setSizeDebounced(Array(data.length).fill(INIT_SIZE));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        const bounds = entry.boundingClientRect;
        const centerX = bounds.x + bounds.width / 2;
        if (linkRefs.current[i]) {
          linkRefs.current[i].centerX = centerX;
        }
      });
    });

    for (const { elRef } of linkRefs.current) {
      elRef && observer.observe(elRef);
    }

    return () => {
      for (const { elRef } of linkRefs.current) {
        elRef && observer.unobserve(elRef);
      }
    };
  }, [sizes]);

  return (
    <Box
      component="footer"
      onMouseLeave={handlePointerOut}
      onMouseMove={handleMouseMove}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        position: "fixed",
        bottom: "18px",
        left: "50%",
        zIndex: "10",
        transform: "translateX(-50%)",
        maxWidth: "calc(100vw - 20px)",
      }}
    >
      <Box
        className="dock"
        sx={{
          p: "0 10px 4px 10px",
          width: "100%",
          position: "relative",
          height: isTouch ? 196 : "auto",
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            overflowX: isTouch ? "auto" : "unset",
            overflowY: isTouch ? "hidden" : "unset",
            gap: "8px",
            px: "11px",
            pb: "7px",
            zIndex: 2,
          }}
        >
          {linkRefs.current.map((item, index) =>
            item.type === "link" ? (
              <MotionComponent
                ref={(el: HTMLElement) => (linkRefs.current[index].elRef = el)}
                item={item}
                key={item.name}
                animate={{
                  height: sizes[index],
                  width: sizes[index],
                }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <Divider
                key={`divider-${index}`}
                ref={(el: HTMLElement) => (linkRefs.current[index].elRef = el)}
              />
            )
          )}
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            transform: "none",
            background: "var(--colors-dock-bg)",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.12)",
            border: "1px solid var(--colors-gray4)",
            zIndex: 1,
            height: 70,
            borderRadius: "20px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
