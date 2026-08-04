import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { photos } from './data';

function Card({ id, title, src }) {
  const router = useRouter();

  return (
    <motion.button
      type="button"
      className="photo-card"
      layoutId={`card-container-${id}`}
      onClick={() => void router.push(`/photo/${id}`, undefined, { scroll: false })}
      whileTap={{ scale: 0.985 }}
    >
      <motion.div className="absolute inset-0" layoutId={`card-image-container-${id}`}>
        <Image className="object-cover" src={src} alt={title} fill sizes="(max-width: 720px) 50vw, 33vw" />
      </motion.div>
      <span className="photo-label">{title}</span>
    </motion.button>
  );
}

export const PhotoList = memo(() => {
  return (
    <section className="photo-grid">
      {photos.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </section>
  );
});
