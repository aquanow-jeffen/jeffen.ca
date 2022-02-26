/* eslint-disable jsx-a11y/alt-text */
import { memo } from "react";
import { motion } from "framer-motion";
import { photos } from "./data";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box } from "@mui/system";
import {
  cardContent,
  cardContentContainer,
  openedCardContentContainer,
} from "./style.css";

const dismissDistance = 150;
export const PhotoStory = memo(
  ({ id }: any) => {
    const { title, src } = photos.find((item) => item.id === id) as any;

    return (
      <>
        <Overlay />
        <Box
          sx={{
            ...cardContentContainer,
            ...openedCardContentContainer,
          }}
        >
          <motion.div
            className="card-content"
            layoutId={`card-container-${id}`}
            style={cardContent}
          >
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <Image
                className="card-image"
                src={src}
                alt={title}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className="content-container"
              animate
              style={{
                padding: "30px 35px 35px 35px",
                maxWidth: 700,
              }}
            >
              {title}
            </motion.div>
          </motion.div>
        </Box>
      </>
    );
  },
  (prev, next) => prev.id === next.id
);

const Overlay = () => {
  const router = useRouter();
  return (
    <motion.div
      onClick={() => router.push("/photo", undefined, { scroll: false })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
      style={{
        pointerEvents: "auto",
        zIndex: 1,
        position: "fixed",
        background: "rgba(0, 0, 0, 0.5)",
        willChange: "opacity",
        top: 0,
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
      }}
      className="overlay"
    ></motion.div>
  );
};
