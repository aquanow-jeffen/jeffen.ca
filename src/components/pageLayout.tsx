import Head from "next/head";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  title?: string;
};

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageLayout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{`${title} | Jeffen Chen`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page-shell">
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {children}
        </motion.main>
      </div>
    </>
  );
}
