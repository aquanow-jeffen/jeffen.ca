import { Box } from "@mui/system";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo } from "react";
import { photos } from "./data";
import { cardContentContainer } from "./style.css";

function Card({ id, title, src, css = {} }) {
  const router = useRouter();
  return (
    <Box
      component="li"
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        ...css,
      }}
      onClick={() => router.push(id, undefined, { scroll: false })}
    >
      <Box sx={cardContentContainer}>
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <Image className="card-image" src={src} alt={title} />
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}

export const PhotoList = memo(() => {
  return (
    <Box
      component="ul"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        gridAutoRows: "minmax(100px, auto)",
        p: 0,
        bottom: 77,
      }}
    >
      {photos.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </Box>
  );
});
