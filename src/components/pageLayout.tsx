import Head from "next/head";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box, Container, Section } from '@radix-ui/themes';

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
        <title>{`${title} | Jeffen Chen`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container size="2" className="mx-4 md:mx-0">
        <motion.main initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: 'linear' }}>
          <Section size={{ initial: '1', sm: '1' }} />
          {children}
        </motion.main>
      </Container>
    </Box>
  );
}
