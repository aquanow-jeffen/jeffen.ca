import PageLayout from '@components/pageLayout';
import NextLink from 'next/link';

const techGroups = [
  { label: 'Languages', items: ['TypeScript', 'Java', 'Rust', 'SQL'] },
  { label: 'Platforms', items: ['Kafka', 'Kafka Streams', 'Kafka Connect', 'TigerBeetle'] },
  { label: 'Cloud', items: ['AWS', 'ECS', 'Lambda', 'Terraform', 'Docker'] },
  { label: 'Quality', items: ['OpenTelemetry', 'Testcontainers', 'Microcks', 'CI/CD'] },
  { label: 'Product', items: ['Node.js', 'React', 'Next.js', 'Angular'] },
  { label: 'Data', items: ['PostgreSQL', 'DynamoDB', 'Redis', 'MongoDB'] },
];

const Home = () => {
  return (
    <PageLayout title="Home">
      <section className="intro-composition">
        <div className="intro-index">余白 / Portfolio / 2026</div>
        <div className="intro-main">
          <p className="intro-role">Staff software engineer · Vancouver</p>
        <h1 className="hero-title">
          Jeffen <span>Chen</span>
        </h1>
        <p className="hero-copy">
          Staff software engineer crafting resilient platforms, thoughtful developer experiences, and products that
          scale with the teams behind them.
        </p>
          <div className="quiet-links">
          <NextLink className="quiet-link" href="/resume">
            Experience <span aria-hidden="true">↗</span>
          </NextLink>
          <a className="quiet-link" href="mailto:chenjeffen@gmail.com">
            Email me
          </a>
          </div>
        </div>
        <div className="organic-mark" aria-hidden="true" />
      </section>

      <section className="about-flow">
        <article className="about-copy">
          <div className="section-kicker">About</div>
          <p className="body-copy">
            I started in front-end engineering and grew into backend systems, cloud infrastructure, and technical
            leadership. For more than seven years, I have worked across the full product lifecycle—from the interface
            people touch to the distributed systems that make it reliable.
          </p>
          <p className="body-copy mt-5">
            Today I focus on <strong>platform architecture, developer productivity, and pragmatic engineering</strong>—
            turning complex systems into tools teams can confidently operate and evolve.
          </p>
        </article>

        <aside className="toolkit">
          <div className="section-kicker">Production toolkit</div>
          <div className="tech-groups">
            {techGroups.map((group) => (
              <div className="tech-group" key={group.label}>
                <div className="tech-group-label">{group.label}</div>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="tech-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </PageLayout>
  );
};

export default Home;
