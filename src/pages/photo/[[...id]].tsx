import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { PhotoList } from "@modules/photo/PhotoList";
import { useRouter } from "next/router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { PhotoStory } from "@modules/photo/PhotoStory";

const Photo: NextPage = () => {
  const router = useRouter();
  const { id = [] } = router.query;
  const selectedId = id[0];

  return (
    <PageLayout>
      <AnimateSharedLayout>
        <PhotoList />
        <AnimatePresence>
          {selectedId && <PhotoStory id={selectedId} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </PageLayout>
  );
};

export default Photo;
