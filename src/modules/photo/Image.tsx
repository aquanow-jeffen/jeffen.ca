import * as React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";

export const Image = ({
  id,
  src,
  title,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
}) => {
  return (
    <motion.div
      className="card-image-container"
      style={{ backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.div
        className="card-image"
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
      >
        <NextImage
          key={id}
          src={src}
          layout="responsive"
          width={720}
          height={800}
          alt={title}
        />
      </motion.div>
    </motion.div>
  );
};
