import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { resumeData } from "@modules/resume/resumeData";
import { Badge, Button, Flex } from '@radix-ui/themes';

const Resume: NextPage = () => {
  return (
    <PageLayout title="Resume">
      <header className="page-header print:hidden">
        <div>
          <div className="page-kicker">経歴 / Career journey / 02</div>
          <h1 className="page-title">Experience</h1>
          <p className="page-subtitle">Building products, platforms, and stronger engineering teams.</p>
        </div>
        <Flex gap='3' wrap="wrap">
          <Button className="secondary-button" variant='outline' highContrast onClick={() => window.print()}>
            Download CV
          </Button>
          <Button className="primary-button" variant='solid' onClick={() => window.location.href = "mailto:chenjeffen@gmail.com"}>
            Get in touch
          </Button>
        </Flex>
      </header>
      <header className="print-resume-header hidden print:block">
        <div>
          <h1>Jeffen Chen</h1>
          <p>Senior / Staff Software Engineer</p>
        </div>
        <div className="print-contact">
          Vancouver, BC, Canada · chenjeffen@gmail.com · linkedin.com/in/jeffenc
        </div>
        <div className="print-skills">
          Kafka · TigerBeetle · TypeScript · Java · Rust · AWS · ECS · Terraform · OpenTelemetry
        </div>
      </header>
      <section className="resume-profile" aria-label="Professional profile">
        <div className="section-kicker">Profile</div>
        <p>
          Senior and Staff-level software engineer building shared platforms across trading, treasury, market
          operations, and financial infrastructure. I turn emerging technologies into production capabilities,
          align architecture with business priorities, and help teams adopt reliable engineering practices. Beyond
          roadmap delivery, I continuously research, prototype, demonstrate, and productionize platform improvements.
        </p>
        <div className="resume-strengths" aria-label="Core strengths">
          <span>Distributed systems</span>
          <span>Technical strategy</span>
          <span>Platform engineering</span>
          <span>Cross-team leadership</span>
        </div>
      </section>
      <div>
        <div className="resume-list">
          {resumeData.map((item) => (
            <article key={item.name} className="resume-card">
              <div className="resume-heading">
                <div>
                  <h2 className="resume-company">{item.name}</h2>
                  <div className="resume-role">{item.title}</div>
                </div>
                <div className="text-right max-md:text-left">
                  <div className="resume-time">{item.time}</div>
                  {item.location && <div className="resume-location">{item.location}</div>}
                </div>
              </div>
              <Flex className="resume-tech overflow-x-auto" wrap="wrap" gap="2">
              {item.tech?.map((tech) => (
                <Badge key={tech} variant="soft" color="tomato" radius="full">
                  {tech}
                </Badge>
              ))}
              </Flex>
              {item.description && <div className="resume-description">{item.description}</div>}
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Resume;
