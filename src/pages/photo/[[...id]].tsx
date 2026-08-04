import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { PhotoList } from "@modules/photo/PhotoList";
import { useRouter } from "next/router";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { PhotoStory } from "@modules/photo/PhotoStory";

const Photo: NextPage = () => {
  const router = useRouter();
  const { id = [] } = router.query;
  const selectedId = id[0];

  return (
    <PageLayout title="Photos">
      <header className="page-header">
        <div>
          <div className="page-kicker">光景 / Visual journal / 03</div>
          <h1 className="page-title">Photography</h1>
          <p className="page-subtitle">Light, distance, and small moments collected along the way.</p>
        </div>
      </header>
      <LayoutGroup>
        <PhotoList />
        <AnimatePresence>{selectedId && <PhotoStory id={selectedId} />}</AnimatePresence>
      </LayoutGroup>
    </PageLayout>
  );
};

export default Photo;
