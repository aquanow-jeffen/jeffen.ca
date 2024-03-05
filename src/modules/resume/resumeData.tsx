import { Text } from "@radix-ui/themes";

export const resumeData = [
  {
    name: 'Aquanow',
    location: 'Vancouver, Canada',
    time: 'Jun 2021 - Present',
    title: 'Staff Software Engineer',
    tech: ['Typescript', 'Node', 'NextJS', 'AWS', 'NoSQL', 'Terraform', 'Leadership'],
    description: (
      <Text as="div" size="3">
        <div>Aquanow is a crypto trading company and liquidity provider. Collaborated closely with the CTO and management team to enhance the Software Development Life Cycle (SDLC) and development processes, focusing on the technical development and strategic direction of the company. Provided technical leadership to ensure alignment across teams:</div>
        <ul>
          <li>
            • Led the modernization of front-end and back-end applications, transitioning from Vanilla JavaScript to TypeScript. Implemented development toolchains including linting, formatting, testing, bundling, continuous integration/continuous deployment (CI/CD), and monitoring.
          </li>
          <li>
            • Served as the technical product owner for a payment product, leading a five-person development team. Responsibilities included developing the product, providing customer technical support, managing the Jira backlog, and conducting Scrum ceremonies. Standardized development processes and workflows across all teams.
          </li>
          <li>
            • Research and making technical strategy for the company, focus on improving efficient, reducing cost and risk, tools and SDLC standardization etc.
          </li>
          <li>• Engaged in various projects with different teams on a quarterly basis, participating in architecture reviews, and providing guidance and technical support to teams.</li>
          <li>
            • Developed various internal development tools, such as a release cherry-picking CLI (Rust), an AI Code Review GitHub App, and a Git format checker GitHub App, to assist developers in saving time on repetitive tasks.
          </li>
          <li>• Interviewed, mentored, and provided guidance to junior and intermediate developers.</li>
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
            • Engineered, managed, and optimized the performance of an enterprise-level UI component library utilizing TypeScript, AngularJS, Vanilla JavaScript, Sass, and Webpack to meet client specifications.
          </li>
          <li>
            • Conducted in-depth research on, and provided valuable insights into, the source code of third-party platforms (such as Backbase.com) developed with JavaScript.
          </li>
          <li>• Authored unit tests employing Karma and Jasmine to ensure code reliability and functionality.</li>
          <li>
            • Developed and automated visual and end-to-end (E2E) testing procedures using BackstopJS and Cypress. This included generating visual testing reports and integrating them into the continuous integration/continuous deployment (CI/CD) pipeline for streamlined development processes.
          </li>
          <li>
            • Designed and deployed a browser extension to facilitate the visualization and management of micro-frontend components in production environments. This involved implementing request interception, enhancing communication, and integrating third-party services (including Jira and deployment information).
          </li>
          <li>• Crafted, maintained, and significantly enhanced the performance of the SCSS theming system, catering to over 70 clients.</li>
          <li>• Created and sustained Node.js command-line interface (CLI) tools, including a Yeoman generator and a theme CI/CD builder, to automate and simplify development workflows.</li>
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
          <li>• Conducted comprehensive research to standardize front-end components, processes, and infrastructure across multiple products.</li>
          <li>
            • Designed and led the development of a web component that facilitates online payments integration, as detailed at <a href="https://docs.ottpay.com/paybutton" target="_blank" rel="noreferrer">
            OTTPay PayButton Documentation
            </a>, overseeing the project from initial design through to successful delivery.
          </li>
          <li>
            • Directed the development of several internal product front-ends from scratch, including an Online Ticket Application, Merchant Dashboard, and CRM system, utilizing Angular and ReactJS.
          </li>
          <li>• Developed Progressive Web Apps (PWA) and Hybrid Apps using Ionic for various purposes, including a QA Code Scanner, Analytics Dashboard, and online forms.</li>
          <li>• Implemented performance monitoring and site statistics analysis for existing systems using Google Analytics.</li>
          <li>
            • Executed leadership responsibilities including interviewing and mentoring new team members to enhance their skills and knowledge, as well as maintaining comprehensive documentation and a knowledge base for team reference.
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
          <li>• Design and communicate with client to finalize development plan</li>
          <li>• Page styles with SemanticUI and state management with RXJS and NGRX on Angular</li>
          <li>• Design and develop mongoDB schema</li>
          <li>• API and Express security based on helmet and JsonWebToken(JWT)</li>
          <li>• Developed housing view and search service based on Google Map API from front-end to back-end</li>
          <li>• Deployed on DigitalOcean using Nginx with reverse proxy and SSL A+ rating</li>
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
