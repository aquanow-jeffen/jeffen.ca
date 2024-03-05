import PageLayout from '@components/pageLayout';
import { Badge, Box, Flex, Link, Text } from '@radix-ui/themes';
import NextLink from 'next/link';

const Home = () => {
  return (
    <PageLayout title="Home">
      <Flex gap="4">
        <Box>
          <h1 className="text-4xl font-bold">Jeffen Chen</h1>
          <p>Full-Stack Software Engineer</p>
        </Box>
      </Flex>
      <Box className="w-72 mt-6 mb-4 border-b-2"></Box>
      <Box className="pb-20">
        <Text>Hi there!</Text>
        <br />
        <Text as="p">
          If we haven&#39;t met, my name is Jeffen. My professional life has been 100% driven by my passion for Web
          Development. I started my career as a Front-End developer and increased my knowledge on the backend with
          NodeJS. I have been working on the front-end, backend, DevOps and leadership roles for 7+ years.
        </Text>
        <br />
        <Text as="div">
          Technologies I worked on{' '}
          <Badge color="green" variant="soft" radius="large">
            production
          </Badge>{' '}
          environments:
        </Text>
        <Text as="div">
          <ul>
            <li>Language: Javascript, TypeScript, Rust</li>
            <li>Frontend: React, Next.js, Angular, Material UI</li>
            <li>Backend: Node.js, ExpressJS, Lambda, GraphQL, SQS, EventBridge</li>
            <li>Database: DynamoDB, Redis, MongoDB, postgreSQL</li>
            <li>DevOps: Docker, AWS, Serverless, Github Action, Terraform</li>
          </ul>
        </Text>
        <br />
        <Text>
          Check out{' '}
          <NextLink href="/resume" passHref legacyBehavior>
            <Link>my resume</Link>
          </NextLink>{' '}
          for details :)
        </Text>
      </Box>
    </PageLayout>
  );
};

export default Home;
