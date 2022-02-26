import type { NextPage } from 'next'
import PageLayout from "@components/pageLayout";
import { Box } from "@mui/system";

const Home: NextPage = () => {
  return (
    <PageLayout title="Home">
      <Box>
        <h1>Jeffen Chen</h1>
        <p>Full-Stack Javascript / Golang / DevOps.</p>
      </Box>
      <Box
        sx={{
          width: "70px",
          borderBottom: "2px solid #373737",
          my: 2,
        }}
      ></Box>
      <Box>
        <p>
          Hi there, if we haven&#39;t met, my name is Jeffen. My professional
          life has been 100% driven by my passion for Web Development. I started
          my career as a Front-End developer and increased my knowledge on the
          backend with NodeJS and Golang. I have been working on the front-end
          and backend with Angular, React, Web Component, PWA, Express and
          Lambda. Also worked on the DevOps side with AWS, Serverless, Terraform
          and Docker.
        </p>
        <p>
          I enjoy outdoor activities (soccer, hiking, snowboard), musical
          instruments(clarinet and piano) and video games at spare time. I am
          also a part-time stock market trader.
        </p>
        <p>
          Currently working at{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="https://aquanow.io"
            target="_blank"
            rel="noreferrer"
          >
            aquanow.io
          </a>
        </p>
      </Box>
    </PageLayout>
  );
};

export default Home
