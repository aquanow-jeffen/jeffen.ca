import Head from "next/head";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/system";

type Props = {
  children: ReactNode;
  title?: string;
};

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageLayout({ children, title }: Props): JSX.Element {
  return (
    <Box>
      <Head>
        <title>{title} | Jeffen Chen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "720px",
          position: "relative",
          minHeight: "100vh",
          paddingLeft: "var(--space-2)",
          paddingRight: "var(--space-2)",
          paddingTop: "120px",
          paddingBottom: "120px",
          margin: "0px auto",
          padding: "var(--space-3)",
        }}
      >
        {children}
      </motion.main>
    </Box>
  );
}
