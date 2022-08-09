import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { Box } from "@mui/system";
import { WritingCard } from "@modules/writing/writingCard";
import Divider from "@components/Divider";

const writingData = [
  {
    title: "Event Driven Architecture and Event Sourcing",
    subtitle: "A research on how event sourcing looks like on AWS",
    url: "https://blog.jeffen.me/event-driven-architecture-and-event-sourcing-d2d78982e523?source=friends_link&sk=03f0cf86d41539e63f9b9d7cafc34180",
  },
];

const Writing: NextPage = () => {
  return (
    <PageLayout title="Writing">
      <Box>
        <h1>Writings</h1>
        <Box
          sx={{
            width: "100%",
            borderBottom: "2px dashed #373737",
            marginBottom: "32px",
            marginTop: "32px",
          }}
        ></Box>
        {writingData.map(({ title, subtitle, url }) => (
          <WritingCard key={url} title={title} subtitle={subtitle} url={url} />
        ))}
      </Box>
    </PageLayout>
  );
};

export default Writing;
