import { useState, useEffect, useRef, useCallback } from "react";
import { Box } from "@mui/system";
import Divider from "@components/Divider";
import { motion } from "framer-motion";
import { debounce, throttle } from "lodash";

import HomeIcon from "./icons/home.svg";
import WritingIcon from "./icons/writing.svg";
import ProjectIcon from "./icons/project.svg";
import PhotoIcon from "./icons/photo.svg";
import ResumeIcon from "./icons/resume.svg";
import GithubIcon from "./icons/github.svg";
import EmailIcon from "./icons/email.svg";
import MoonIcon from "./icons/moon.svg";
import LinkedinIcon from "./icons/linkedin.svg";

import DockItem from "./DockItem";

interface Link {
  type: "link";
  name: string;
  route: string;
  centerX: number;
  Icon: React.ComponentType;
  elRef?: Element;
}

interface DividerItem {
  type: "divider";
  centerX: number;
  elRef?: Element;
}

const menus: Array<Link | DividerItem> = [
  {
    type: "link",
    name: "Home",
    route: "/",
    Icon: HomeIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Writing",
    route: "/writing",
    Icon: WritingIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Projects",
    route: "/project",
    Icon: ProjectIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Photos",
    route: "/photo",
    Icon: PhotoIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Resume",
    route: "/resume",
    Icon: ResumeIcon,
    centerX: 0,
  },
  { type: "divider", centerX: 0 },
  {
    type: "link",
    name: "Linkedin",
    route: "https://www.linkedin.com/in/jeffenc/",
    Icon: LinkedinIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Github",
    route: "https://github.com/Jeffen",
    Icon: GithubIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Email",
    route: "mailto:chenjeffen@gmail.com",
    Icon: EmailIcon,
    centerX: 0,
  },
  { type: "divider", centerX: 0 },
  {
    type: "link",
    name: "Theme",
    route: "/theme",
    Icon: MoonIcon,
    centerX: 0,
  },
];

const MotionComponent = motion(DockItem);

export default function WebsiteDock() {
  const FRAME_RATE = 30;
  const MAX_DISTANCE = 260;
  const INIT_SIZE = 48;
  const MAX_SIZE = 96;
  const linkRefs = useRef(menus);
  const [sizes, setSizes] = useState<Array<number>>(
    Array(menus.length).fill(INIT_SIZE)
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
      if (e.relatedTarget?.tagName === "MAIN") {
        setSizes(Array(menus.length).fill(INIT_SIZE));
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
      onPointerOut={handlePointerOut}
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
