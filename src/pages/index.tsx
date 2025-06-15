import PageLayout from '@components/pageLayout';
import { Badge, Box, Flex, Link, Text } from '@radix-ui/themes';
import NextLink from 'next/link';

const Home = () => {
  return (
    <PageLayout title="Home">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-6">
            <h1 className="text-responsive-3xl font-bold mb-3" style={{ color: 'var(--colors-text)' }}>
              Jeffen Chen
            </h1>
            <p className="text-responsive-lg" style={{ color: 'var(--colors-text-secondary)' }}>
              Full-Stack Software Engineer
            </p>
          </div>
          <div
            className="w-16 sm:w-24 h-1 rounded-full mb-6 sm:mb-8"
            style={{ backgroundColor: 'var(--colors-accent)' }}
          ></div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <Text size="4" className="mb-6 leading-relaxed" style={{ color: 'var(--colors-text)' }}>
            Hi there! If we haven&#39;t met, my name is Jeffen. My professional life has been 100% driven by my passion for Web
            Development. I started my career as a Front-End developer and increased my knowledge on the backend with
            NodeJS. I have been working on the front-end, backend, DevOps and leadership roles for 7+ years.
          </Text>
        </div>

        {/* Technologies Section */}
        <div className="mb-12">
          <div className="mb-6">
            <Text size="4" weight="medium" className="mb-4" style={{ color: 'var(--colors-text)' }}>
              Technologies I worked on{' '}
              <Badge color="green" variant="soft" radius="large" className="ml-2">
                production
              </Badge>{' '}
              environments:
            </Text>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--colors-accent)' }}></div>
                <div>
                  <Text weight="medium" style={{ color: 'var(--colors-text)' }}>Languages:</Text>
                  <Text className="ml-2" style={{ color: 'var(--colors-text-secondary)' }}>JavaScript, TypeScript, Rust</Text>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--colors-accent)' }}></div>
                <div>
                  <Text weight="medium" style={{ color: 'var(--colors-text)' }}>Frontend:</Text>
                  <Text className="ml-2" style={{ color: 'var(--colors-text-secondary)' }}>React, Next.js, Angular, Material UI</Text>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--colors-accent)' }}></div>
                <div>
                  <Text weight="medium" style={{ color: 'var(--colors-text)' }}>Backend:</Text>
                  <Text className="ml-2" style={{ color: 'var(--colors-text-secondary)' }}>Node.js, ExpressJS, Lambda, GraphQL</Text>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--colors-accent)' }}></div>
                <div>
                  <Text weight="medium" style={{ color: 'var(--colors-text)' }}>Database:</Text>
                  <Text className="ml-2" style={{ color: 'var(--colors-text-secondary)' }}>DynamoDB, Redis, MongoDB, PostgreSQL</Text>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--colors-accent)' }}></div>
                <div>
                  <Text weight="medium" style={{ color: 'var(--colors-text)' }}>DevOps:</Text>
                  <Text className="ml-2" style={{ color: 'var(--colors-text-secondary)' }}>Docker, AWS, Serverless, GitHub Actions</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-8">
          <Text size="4" style={{ color: 'var(--colors-text)' }}>
            Check out{' '}
            <NextLink href="/resume" passHref legacyBehavior>
              <Link style={{ color: 'var(--colors-accent)', textDecoration: 'none' }} className="font-medium hover:underline transition-all duration-200">
                my resume
              </Link>
            </NextLink>{' '}
            for details
          </Text>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
