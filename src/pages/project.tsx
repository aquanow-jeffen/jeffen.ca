import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { Box } from '@radix-ui/themes';

const Project: NextPage = () => {
  return (
    <PageLayout title="Projects">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--colors-text)' }}>
            Projects
          </h1>
          <p style={{ color: 'var(--colors-text-secondary)' }}>
            Showcasing my work and contributions
          </p>
          <div
            className="w-24 h-1 rounded-full mt-6"
            style={{ backgroundColor: 'var(--colors-accent)' }}
          ></div>
        </div>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🚧</div>
          <p className="text-xl" style={{ color: 'var(--colors-text-secondary)' }}>
            Under construction
          </p>
          <p style={{ color: 'var(--colors-text-secondary)' }}>
            Check back soon for updates!
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Project;
