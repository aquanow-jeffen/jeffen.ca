import { Text } from "@radix-ui/themes";

export const resumeData = [
  {
    name: 'Aquanow',
    location: 'Vancouver, Canada',
    time: 'Jun 2021 - Present',
    title: 'Staff Software Engineer',
    tech: ['Typescript', 'Node', 'AWS', 'Kafka','Java', 'Rust', 'Leadership'],
    description: (
      <Text as="div" size="3">
        <div>Aquanow is a crypto trading company and liquidity provider:</div>
        <ul>
          <li>
            <strong>Spearheaded Technical Modernization & Developer Velocity:</strong> Championed the migration of legacy front-end and back-end applications from JavaScript to <strong>TypeScript</strong>. Drove developer efficiency by engineering a complete SDLC toolchain, including linting, CI/CD pipelines, monitoring, NX Monorepo and an AI-powered code review github app and a feature-rich <strong>Tauri (Rust + Svelte)</strong> desktop application that automated the complex cherry-picking release process with a unified operational view.
          </li>
          <li>
            <strong>Engineered Mission-Critical Messaging & Data Platforms:</strong> Architected and implemented a high-throughput <strong>Kafka</strong> messaging layer, ensuring exactly-once delivery for critical financial transactions. Led the migration from Confluent Cloud to a self-hosted platform, reducing operational costs. Optimized market data aggregation using Kafka Streams and scaled order book synchronization across AWS regions with Redis.
          </li>
          <li>
            <strong>Architected & Delivered Core Transaction Systems:</strong> Designed and built a resilient workflow orchestration engine in <strong>Java</strong> and <strong>Quarkus</strong> to manage complex customer transactions across banking, trading, and settlement systems. Implemented a hybrid event sourcing framework using <strong>DynamoDB</strong> and AWS EventBridge to ensure data integrity and scalability.
          </li>
          <li>
            <strong>Led Product Development & Process Automation:</strong> Served as the Technical Product Owner for a key payment product, leading a five-person team through the full lifecycle. Managed the product backlog, ran Scrum ceremonies, writing documentations and delivered a high availability and high resiliency payment system.
          </li>
          <li>
            <strong>Drove Technical Strategy & Mentorship:</strong> Acted as a key technical advisor, leading research on emerging technologies to reduce cost and risk (Sonarcloud, pentest). Regularly conducted architecture reviews, provided performance tuning expertise, and mentored junior and intermediate developers, playing a vital role in talent growth.
          </li>
        </ul>
      </Text>
    ),
  },
  {
    name: 'Central 1 Credit Union',
    location: 'Vancouver, Canada',
    time: 'Jun 2019 - May 2021',
    title: 'Web Developer 3',
    tech: ['Typescript', 'Angular', 'React', 'MicroFE', 'Node', 'Docker', 'Java'],
    description: (
      <>
        <div>
          Central 1 is a technical provider for most credit unions management systems across BC. I was responsible for maintaining a micro-frontend (micro-FE) component library and framework leveraging RequireJS, with a strong emphasis on robustness and accessibility. Additionally, I developed several internal tools and websites to enhance productivity across teams:
        </div>
        <ul>
          <li>
            Engineered, managed, and optimized the performance of an enterprise-level UI component library utilizing TypeScript, AngularJS, Vanilla JavaScript, Sass, and Webpack to meet client specifications.
          </li>
          <li>
            Conducted in-depth research on, and provided valuable insights into, the source code of third-party platforms (such as Backbase.com) developed with JavaScript.
          </li>
          <li>Authored unit tests employing Karma and Jasmine to ensure code reliability and functionality.</li>
          <li>
            Developed and automated visual and end-to-end (E2E) testing procedures using BackstopJS and Cypress. This included generating visual testing reports and integrating them into the continuous integration/continuous deployment (CI/CD) pipeline for streamlined development processes.
          </li>
          <li>
            Designed and deployed a browser extension to facilitate the visualization and management of micro-frontend components in production environments. This involved implementing request interception, enhancing communication, and integrating third-party services (including Jira and deployment information).
          </li>
          <li>Crafted, maintained, and significantly enhanced the performance of the SCSS theming system, catering to over 70 clients.</li>
          <li>Created and sustained Node.js command-line interface (CLI) tools, including a Yeoman generator and a theme CI/CD builder, to automate and simplify development workflows.</li>
        </ul>
      </>
    ),
  },
  {
    name: 'OTT Financial Group',
    location: 'Toronto, Canada',
    time: 'Aug 2017 - May 2019',
    title: 'Senior Frontend Developer',
    tech: ['Angular', 'Ionic', 'React', 'StencilJS', 'Nginx', 'Docker', 'Node', 'Leadership'],
    description: (
      <div>
        <div>
        Led the front-end team through the entire product lifecycle, from planning to delivery, with a focus on Single Page Applications (SPA), form optimization, performance enhancement, and platform usability:
        </div>
        <ul>
          <li>Conducted comprehensive research to standardize front-end components, processes, and infrastructure across multiple products.</li>
          <li>
            Designed and led the development of a web component that facilitates online payments integration, as detailed at <a href="https://docs.ottpay.com/paybutton" target="_blank" rel="noreferrer">
            OTTPay PayButton Documentation
            </a>, overseeing the project from initial design through to successful delivery.
          </li>
          <li>
            Directed the development of several internal product front-ends from scratch, including an Online Ticket Application, Merchant Dashboard, and CRM system, utilizing Angular and ReactJS.
          </li>
          <li>Developed Progressive Web Apps (PWA) and Hybrid Apps using Ionic for various purposes, including a QA Code Scanner, Analytics Dashboard, and online forms.</li>
          <li>Implemented performance monitoring and site statistics analysis for existing systems using Google Analytics.</li>
          <li>
            Executed leadership responsibilities including interviewing and mentoring new team members to enhance their skills and knowledge, as well as maintaining comprehensive documentation and a knowledge base for team reference.
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Freelancer',
    location: 'Ottawa, Canada',
    time: 'May 2016 - Aug 2017',
    title: 'Full-stack developer',
    tech: ['Angular', 'Express', 'MongoDB', 'Nginx', 'Google Map'],
    description: (
      <div>
        Sole developer on a House rental website of location based searching, uploading rental information and images,
        3rd party service integration:
        <ul>
          <li>Design and communicate with client to finalize development plan</li>
          <li>Page styles with SemanticUI and state management with RXJS and NGRX on Angular</li>
          <li>Design and develop mongoDB schema</li>
          <li>API and Express security based on helmet and JsonWebToken(JWT)</li>
          <li>Developed housing view and search service based on Google Map API from front-end to back-end</li>
          <li>Deployed on DigitalOcean using Nginx with reverse proxy and SSL A+ rating</li>
        </ul>
      </div>
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
