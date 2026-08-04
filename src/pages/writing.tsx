import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
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
      <header className="page-header">
        <div>
          <div className="page-kicker">記録 / Field notes / 01</div>
          <h1 className="page-title">Writing</h1>
          <p className="page-subtitle">Architecture patterns, engineering practices, and lessons from production.</p>
        </div>
      </header>
      <div className="writing-list">
        {writingData.map(({ title, subtitle, url }, index) => (
          <WritingCard key={url} index={index + 1} title={title} subtitle={subtitle} url={url} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Writing;
