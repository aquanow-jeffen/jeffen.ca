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
      <Flex gap="4">
        <Box>
          <h1 className="text-4xl font-bold">Photo</h1>
          <Text color="gray">Life, travel and memories</Text>
        </Box>
      </Flex>
      <Box className="w-72 mt-6 mb-4"></Box>
      <AnimateSharedLayout>
        <PhotoList />
        <AnimatePresence>{selectedId && <PhotoStory id={selectedId} />}</AnimatePresence>
      </AnimateSharedLayout>
    </PageLayout>
  );
};

export default Photo;
