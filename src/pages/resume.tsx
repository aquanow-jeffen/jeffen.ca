import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { resumeData } from "@modules/resume/resumeData";
import { Badge, Box, Button, Flex, Section, Separator, Text } from '@radix-ui/themes';

const Resume: NextPage = () => {
  return (
    <PageLayout title="Resume">
      <Section className="print:pt-0 pt-10 md:pt-inherit">
        <Flex gap='3' className="-mt-12 mb-4 md:mb-0 md:float-right print:hidden">
          <Button variant='outline' radius="full" highContrast onClick={() => window.print()}>Download CV</Button>
          <Button variant='outline' radius="full" highContrast onClick={() => window.location.href = "mailto:chenjeffen@gmail.com"}>Get in touch</Button>
        </Flex>
        <Box className="hidden print:block mb-4">
          <Text as="div" size="6" weight="bold">
            Jeffen Chen
          </Text>
          <Flex gap='2' className="mb-4">
          <Text as="p" size="2" color="gray">
            Vancouver, BC Canada
          </Text>
          <Separator orientation="vertical" />
          <Text as="p" size="2" color="gray" className="">
            chenjeffen@gmail.com
          </Text>
          </Flex>
        </Box>
        {resumeData.map((item) => (
          <Box key={item.name} className="mb-8">
            <Box
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <Flex align='baseline' gap='4' >
              <Text as="p" size="5" weight="bold">
                {item.name}
              </Text>
              <Text size="1" color="gray" className=''>
                {item.location}
              </Text>
              </Flex>
              <Text size="3" as="div">
                {item.title}
              </Text>
              <Text as="div" size="1">
                <span className="time">{item.time}</span>
              </Text>
            </Box>
            <Flex className="overflow-x-auto">
              {item.tech?.map((tech) => (
                <Badge key={tech} variant="outline" color="gray" highContrast className="mr-2">
                  {tech}
                </Badge>
              ))}
            </Flex>
            <Text as="div" className="mt-4">{item.description}</Text>
          </Box>
        ))}
      </Section>
    </PageLayout>
  );
};

export default Resume;
