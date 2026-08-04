export const resumeData = [
  {
    name: 'Aquanow',
    location: 'Vancouver, Canada',
    time: 'Jun 2021 - Present',
    title: 'Staff Software Engineer',
    tech: ['Kafka', 'Node.js', 'Java', 'AWS', 'ECS', 'OpenTelemetry', 'Leadership'],
    description: (
      <>
        <div>
          Set technical direction across trading, treasury, market operations, and platform teams, turning prototypes
          into reusable production services, components, and engineering standards.
        </div>
        <ul>
          <li>
            Architected Kafka as a shared platform service, spanning Schema Registry, Streams,
            Connect, reusable policies, and a self-managed deployment model supporting on-premises and VPC environments.
          </li>
          <li>
            Designed a workflow engine for critical deposit, withdrawal, and reporting processes across banking,
            trading, compliance, and ledger systems, with operational visibility and recovery controls.
          </li>
          <li>
            Implemented a TigerBeetle ledger architecture targeting 1,000 TPS with double-digit millisecond p99 end-to-end
            latency.
          </li>
          <li>
            Introduced a unified asynchronous API gateway for inbound webhooks, centralizing validation, routing,
            observability, and operational policy.
          </li>
          <li>
            Proved and led the migration path from serverless Lambda workloads to ECS, improving deployment flexibility
            and establishing reusable container patterns.
          </li>
          <li>
            Prototyped and productionized Microcks, Testcontainers, OpenTelemetry, and internal developer hubs, bringing
            API mocking, integration testing, and observability into the development lifecycle.
          </li>
          <li>
            Modernized legacy JavaScript services to TypeScript and standardized testing, bundling, CI/CD, and monitoring
            practices across applications.
          </li>
          <li>
            Built a Rust CLI that reduced release preparation from a full day to minutes during the transition from
            multiple repositories to a monorepo.
          </li>
          <li>
            Served as technical product owner for a five-person payments team, shaping roadmaps with business
            stakeholders while interviewing and mentoring engineers across the company.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Central 1 Credit Union',
    location: 'Vancouver, Canada',
    time: 'Jun 2019 - May 2021',
    title: 'Web Developer 3',
    tech: ['TypeScript', 'AngularJS', 'React', 'Micro Frontends', 'Node.js', 'Docker', 'Java'],
    description: (
      <>
        <div>
          Owned shared frontend infrastructure for a technology provider serving Canadian credit unions.
        </div>
        <ul>
          <li>
            Built an enterprise UI framework, component library, and theming system serving more than 70 clients.
          </li>
          <li>
            Investigated and extended Backbase internals to solve complex integration and performance constraints.
          </li>
          <li>
            Embedded visual and end-to-end testing into CI/CD using Cypress and BackstopJS, improving confidence across
            client-specific releases.
          </li>
          <li>
            Built a browser extension for inspecting production micro-frontends and automated repetitive work with
            Node.js CLIs, generators, and theme-build pipelines.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'OTT Financial Group',
    location: 'Toronto, Canada',
    time: 'Aug 2017 - May 2019',
    title: 'Senior Frontend Developer',
    tech: ['Angular', 'Ionic', 'React', 'StencilJS', 'Nginx', 'Docker', 'Node.js', 'Leadership'],
    description: (
      <>
        <div>
          Led frontend architecture and delivery across customer and internal financial products.
        </div>
        <ul>
          <li>
            Established shared architecture, component standards, and delivery practices across product teams.
          </li>
          <li>
            Designed and led the OTTPay payment component from architecture through production release.
          </li>
          <li>
            Launched an online ticketing platform, merchant dashboard, and CRM using Angular and React.
          </li>
          <li>
            Built Ionic PWAs and hybrid applications, introduced performance analytics, and supported frontend hiring
            and mentorship.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Freelancer',
    location: 'Ottawa, Canada',
    time: 'May 2016 - Aug 2017',
    title: 'Full-Stack Developer',
    tech: ['Angular', 'Express', 'MongoDB', 'Nginx', 'Google Maps'],
    description: (
      <>
        <div>Designed, built, and operated a location-based rental marketplace as the sole developer.</div>
        <ul>
          <li>
            Delivered the Angular, RxJS, and NgRx application with Express APIs and MongoDB.
          </li>
          <li>
            Implemented property search, media uploads, Google Maps integration, and JWT-based authentication.
          </li>
          <li>
            Deployed and operated the platform on DigitalOcean behind Nginx with an A+ SSL rating.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'University of Ottawa, Canada',
    time: '2015 - 2017',
    title: 'Master of Engineering',
    description: '',
  },
  {
    name: 'Seoul National University, South Korea',
    time: '2014 - 2015',
    title: 'Korean Language and Culture',
    description: '',
  },
  {
    name: 'Beijing University of Chemical Technology, China',
    time: '2010 - 2014',
    title: 'Bachelor of Engineering',
    description: '',
  },
];
