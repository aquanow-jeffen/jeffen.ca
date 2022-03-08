import React from "react";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";

export default React.forwardRef<any, any>(function DockItem({ item }, ref) {
  const router = useRouter();
  const tooltipControl = useAnimation();
  const iconControl = useAnimation();
  const isCurrentRoute =
    item.route === "/"
      ? router.pathname === item.route
      : router.pathname.startsWith(item.route);

  const handleRouteChange = () => {
    if (typeof item.route === "string") {
      router.push(item.route);
    } else if (typeof item.onClick === "function") {
      item.onClick();
    }
    iconControl.start({
      y: ["0rem", "-3rem", "0rem"],
      transition: { duration: 0.5 },
    });
  };

  const handleHover = (isHover) => {
    tooltipControl.start({
      opacity: isHover ? 1 : 0,
      y: isHover ? -65 : -55,
    });
  };

  const Icon = item.Icon;

  return (
    <motion.div
      ref={ref}
      onClick={handleRouteChange}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      animate={iconControl}
      style={{
        transform: "none",
        cursor: "pointer",
        flexShrink: "0",
        backgroundImage:
          "linear-gradient( 45deg, var(--gradient-color-1), var(--gradient-color-2), var(--gradient-color-1), var(--gradient-color-2) )",
        backgroundSize: "200% 100%",
        border: "0px",
        padding: "0px",
        margin: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--colors-gray3)",
        borderRadius: "23%",
        position: "relative",
        color: "var(--colors-gray11)",
      }}
    >
      <motion.div
        style={{
          border: "1px solid var(--colors-gray10)",
          borderRadius: "6px",
          fontSize: "13px",
          padding: "2px 10px 3px",
          pointerEvents: "none",
          background: "var(--colors-gray1)",
          opacity: 0,
        }}
        animate={tooltipControl}
      >
        {item.name}
      </motion.div>
      <Icon
        style={{
          position: "absolute",
          inset: "22%",
          pointerEvents: "none",
          transformOrigin: "unset !important",
        }}
      />
      {isCurrentRoute && (
        <motion.div
          style={{
            position: "absolute",
            bottom: "-7px",
            width: "4px",
            height: "4px",
            background: "var(--colors-gray10)",
            borderRadius: "4px",
          }}
          transition={{
            duration: 0.3,
          }}
          layoutId="dock-item-selected"
        ></motion.div>
      )}
    </motion.div>
  );
});
