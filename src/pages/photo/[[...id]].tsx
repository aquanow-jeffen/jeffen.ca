import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { PhotoList } from "@modules/photo/PhotoList";
import { useRouter } from "next/router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { PhotoStory } from "@modules/photo/PhotoStory";
import { Box } from "@mui/system";

const Photo: NextPage = () => {
  const router = useRouter();
  const { id = [] } = router.query;
  const selectedId = id[0];

  return (
    <PageLayout>
      <Box
        sx={{
          borderBottom: "2px solid #373737",
          borderBottomStyle: "dotted",
        }}
      >
        <h1>Photos</h1>
        <p>Daily life, travel, hiking memories. Shot on Huawei Mate20Pro</p>
      </Box>
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
