import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { Box, Flex, Text } from '@radix-ui/themes';
import { WritingCard } from '@modules/writing/writingCard';

const writingData = [
  {
    title: 'Event Driven Architecture and Event Sourcing',
    subtitle: 'A research on how event sourcing looks like on AWS',
    url: 'https://medium.com/@jeffen.me/event-driven-architecture-and-event-sourcing-d2d78982e523',
  },
  {
    title: 'NodeJS Lambda Best Practices with Serverless Framework',
    subtitle: 'An opinionated guide on how to organize a serverless application',
    url: 'https://medium.com/@jeffen.me/nodejs-lambda-best-practices-with-serverless-framework-c0c185960353',
  },
  {
    title: 'Best Coding Practice for AWS Lambda with NodeJS',
    subtitle: 'Focus on coding practices to ensure maintainability and scalability',
    url: 'https://medium.com/@jeffen.me/best-coding-practice-for-aws-lambda-with-nodejs-90da4176f932',
  },
];

const Writing: NextPage = () => {
  return (
    <PageLayout title="Writing">
      <Flex gap="4">
        <Box>
          <h1 className="text-4xl font-bold">Writing</h1>
          <Text color="gray">Random thoughts and findings</Text>
        </Box>
      </Flex>
      <Box className="w-72 mt-6 mb-4 border-b-2"></Box>
      <Box>
        {writingData.map(({ title, subtitle, url }) => (
          <WritingCard key={url} title={title} subtitle={subtitle} url={url} />
        ))}
      </Box>
    </PageLayout>
  );
};

export default Writing;
