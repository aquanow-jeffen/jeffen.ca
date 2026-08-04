import { memo } from "react";
import { motion } from "framer-motion";
import { photos } from "./data";
import { useRouter } from "next/router";
import Image from "next/image";

export const PhotoStory = memo(
  ({ id }: any) => {
    const router = useRouter();
    const { title, src } = photos.find((item) => item.id === id) as any;

    return (
      <>
        <Overlay />
        <motion.div className="photo-story" layoutId={`card-container-${id}`}>
          <button
            type="button"
            className="photo-story-close"
            aria-label="Close photo"
            onClick={() => router.push("/photo", undefined, { scroll: false })}
          >
            ×
          </button>
          <motion.div className="absolute inset-0" layoutId={`card-image-container-${id}`}>
            <Image className="object-contain" src={src} alt={title} fill sizes="90vw" priority />
          </motion.div>
        </motion.div>
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
      className="photo-overlay"
    />
  );
};
