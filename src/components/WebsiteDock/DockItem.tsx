import React, { useContext } from "react";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { ThemeContext } from "src/themeContext";

export default React.forwardRef<any, any>(function DockItem({ item }, ref) {
  const router = useRouter();
  const tooltipControl = useAnimation();
  const iconControl = useAnimation();
  const [theme, setTheme] = useContext(ThemeContext);
  const isCurrentRoute =
    item.route === "/"
      ? router.pathname === item.route
      : router.pathname.startsWith(item.route);

  const handleClick = () => {
    if (typeof item.route === "string") {
      router.push(item.route);
    } else if (item.name === "Theme") {
      const newTheme = document.documentElement.className.includes("dark")
        ? "light"
        : "dark";
      document.documentElement.className = newTheme;
      setTheme(newTheme);
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

  const Icon = React.memo(item.Icon);

  return (
    <motion.button
      type="button"
      ref={ref}
      onClick={handleClick}
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
        theme={theme}
        style={{
          position: "absolute",
          inset: "22%",
          pointerEvents: "none",
          transformOrigin: "unset !important",
        }}
      />
      {isCurrentRoute && (
        <motion.div
          layout
          style={{
            position: "absolute",
            bottom: "-7px",
            width: "4px",
            height: "4px",
            background: "var(--colors-gray10)",
            borderRadius: "100%",
          }}
          transition={{
            duration: 0.3,
          }}
          layoutId="dock-item-selected"
        ></motion.div>
      )}
    </motion.button>
  );
});
