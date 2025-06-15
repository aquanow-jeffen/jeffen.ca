import Head from "next/head";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Container, Section } from '@radix-ui/themes';

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
    <>
      <Head>
        <title>{`${title} | Jeffen Chen`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </Head>
      <Container size="2" className="container-responsive pb-20 sm:pb-16 md:pb-12 print:pb-0">
        <motion.main initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: 'linear' }}>
          <Section size={{ initial: '1', sm: '2' }} className="py-4 sm:py-6 md:py-8 print:py-0" />
          {children}
        </motion.main>
      </Container>
    </>
  );
}
