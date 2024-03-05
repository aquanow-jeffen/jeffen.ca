import { Box, Grid, Section } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { photos } from './data';

function Card({ id, title, src, css = {} }) {
  const router = useRouter();
  return (
    <Box
    className='rounded overflow-hidden shadow-lg bg-white relative'
      // onClick={() => router.push(id, undefined, { scroll: false })}
    >
        <motion.div className="h-full w-full" layoutId={`card-container-${id}`}>
          <motion.div className="h-full w-full" layoutId={`card-image-container-${id}`}>
            <Image className="object-cover h-full w-full" src={src} alt={title} />
          </motion.div>
        </motion.div>
    </Box>
  );
}

export const PhotoList = memo(() => {
  return (
    <Section className='pt-0'>
      <Grid
        columns='3'
        gap='3'
        width='auto'
        align='stretch'
      >
          {photos.map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </Grid>
    </Section>
  );
});
