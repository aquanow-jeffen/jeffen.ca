import { useState, useEffect, useRef, useCallback } from "react";
import { Box } from "@mui/system";
import Divider from "@components/Divider";
import { motion } from "framer-motion";
import { debounce, throttle } from "lodash";

import DockItem from "./DockItem";
import data from "./menuData";

const MotionComponent = motion(DockItem);

export default function WebsiteDock() {
  const FRAME_RATE = 30;
  const MAX_DISTANCE = 260;
  const INIT_SIZE = 48;
  const MAX_SIZE = 96;
  const linkRefs = useRef(data);
  const [sizes, setSizes] = useState<Array<number>>(
    Array(data.length).fill(INIT_SIZE)
  );

  const handleMouseMove = useCallback(
    throttle(
      (e) => {
        const newSizes = linkRefs.current.map((item) => {
          if (!item.elRef) return INIT_SIZE;
          const distance = Math.min(
            Math.abs(e.clientX - item.centerX),
            MAX_DISTANCE
          );
          return MAX_SIZE - ((MAX_SIZE - INIT_SIZE) / MAX_DISTANCE) * distance;
        });
        setSizes(newSizes);
      },
      1000 / FRAME_RATE,
      { leading: true }
    ),
    []
  );

  const handlePointerOut = useCallback(
    debounce((e) => {
      if (e.relatedTarget?.tagName) {
        setSizes(Array(data.length).fill(INIT_SIZE));
      }
    }, 1000 / FRAME_RATE),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        const bounds = entry.boundingClientRect;
        const centerX = bounds.x + bounds.width / 2;
        linkRefs.current[i].centerX = centerX;
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
      onPointerLeave={handlePointerOut}
      onMouseMove={handleMouseMove}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        width: "auto",
        height: "70px",
        paddingLeft: "10px",
        paddingRight: "10px",
        position: "fixed",
        bottom: "40px",
        background: "rgba(22, 22, 22, 0.85)",
        boxShadow: "0 30px 60px rgba(0, 0, 0, 0.12)",
        backdropFilter: "blur(25px)",
        border: "1px solid hsl(0 0% 15.8%)",
        left: "50%",
        borderRadius: "20px",
        zIndex: "10",
        transform: "translate(-50%, -50%) translateY(64px)",
      }}
    >
      <Box
        className="dock"
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: "8px",
          width: "100%",
          pt: "10px",
          pb: "10px",
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
            />
          ) : (
            <Divider
              key={`divider-${index}`}
              ref={(el: HTMLElement) => (linkRefs.current[index].elRef = el)}
            />
          )
        )}
      </Box>
    </Box>
  );
}
