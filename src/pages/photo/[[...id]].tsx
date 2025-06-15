import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { PhotoList } from "@modules/photo/PhotoList";
import { useRouter } from "next/router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { PhotoStory } from "@modules/photo/PhotoStory";
import { Box, Flex, Text } from '@radix-ui/themes';

const Photo: NextPage = () => {
  const router = useRouter();
  const { id = [] } = router.query;
  const selectedId = id[0];

  return (
    <PageLayout title="Photos">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--colors-text)' }}>
            Photos
          </h1>
          <Text style={{ color: 'var(--colors-text-secondary)' }}>
            Life, travel and memories
          </Text>
          <div
            className="w-24 h-1 rounded-full mt-6"
            style={{ backgroundColor: 'var(--colors-accent)' }}
          ></div>
        </div>
        <AnimateSharedLayout>
          <PhotoList />
          <AnimatePresence>{selectedId && <PhotoStory id={selectedId} />}</AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </PageLayout>
  );
};

export default Photo;
