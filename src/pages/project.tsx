import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";

const Project: NextPage = () => {
  return (
    <PageLayout title="Projects">
      <header className="page-header">
        <div>
          <div className="page-kicker">仕事 / Selected work / 04</div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">A closer look at systems, tools, and product work.</p>
        </div>
      </header>
      <section className="project-placeholder">
        <div>
          <div className="project-glyph" aria-hidden="true">{'{ }'}</div>
          <h2 className="text-xl font-semibold">Case studies are being assembled.</h2>
          <p className="page-subtitle mx-auto mt-3">
            I’m documenting the architecture, constraints, and outcomes—not just the polished screenshots.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Project;
