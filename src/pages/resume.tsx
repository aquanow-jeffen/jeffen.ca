import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { resumeData } from "@modules/resume/resumeData";
import { Badge, Box, Button, Flex, Section, Separator, Text } from '@radix-ui/themes';

const Resume: NextPage = () => {
  return (
    <PageLayout title="Resume">
      <div className="max-w-4xl mx-auto">
        {/* Header with action buttons */}
        <div className="mb-8 print:mb-2">
          <div className="flex justify-between items-start mb-6 print:hidden">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--colors-text)' }}>
                Resume
              </h1>
              <p style={{ color: 'var(--colors-text-secondary)' }}>
                Full-Stack Software Engineer
              </p>
            </div>
            <Flex gap='3'>
              <Button
                variant='outline'
                radius="full"
                highContrast
                onClick={() => window.print()}
                style={{
                  borderColor: 'var(--colors-accent)',
                  color: 'var(--colors-accent)',
                  transition: 'all 0.2s ease'
                }}
                className="hover:bg-teal-50 dark:hover:bg-teal-950"
              >
                Download CV
              </Button>
              <Button
                variant='solid'
                radius="full"
                onClick={() => window.location.href = "mailto:chenjeffen@gmail.com"}
                style={{
                  backgroundColor: 'var(--colors-accent)',
                  color: 'white',
                  border: 'none',
                  transition: 'all 0.2s ease'
                }}
                className="hover:opacity-90"
              >
                Get in touch
              </Button>
            </Flex>
          </div>

          {/* Print header */}
          <Box className="hidden print:block print:mb-2">
            <Text as="div" size="6" weight="bold" style={{ color: 'var(--colors-text)' }} className="print:text-black print:text-xl print:leading-tight">
              Jeffen Chen
            </Text>
            <Flex gap='2' className="print:mb-1">
              <Text as="p" size="2" style={{ color: 'var(--colors-text-secondary)' }} className="print:text-gray-600 print:text-sm">
                Vancouver, BC Canada
              </Text>
              <Separator orientation="vertical" className="print:hidden" />
              <Text as="p" size="2" style={{ color: 'var(--colors-text-secondary)' }} className="print:text-gray-600 print:text-sm">
                chenjeffen@gmail.com
              </Text>
            </Flex>
          </Box>

          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: 'var(--colors-accent)' }}
          ></div>
        </div>

        {/* Resume content */}
        <div className="relative">
          {/* Continuous timeline line - only for work experience items */}
          <div
            className="absolute left-6 top-6 w-0.5 opacity-30 print:hidden"
            style={{
              height: `${Math.max(0, (resumeData.length - 3 - 1)) * 280 + 100}px`,
              background: 'linear-gradient(to bottom, var(--colors-accent) 0%, var(--colors-accent) 80%, transparent 100%)'
            }}
          ></div>

          <div className="space-y-6 print:space-y-2">
            {resumeData.map((item, index) => {
              const isWorkExperience = index < resumeData.length - 3;

              return (
                <div
                  key={item.name}
                  className={`relative ${isWorkExperience ? 'pl-16 print:pl-0' : ''}`}
                >
                  {/* Timeline dot for work experience */}
                  {isWorkExperience && (
                    <div
                      className="absolute left-5 top-6 w-3 h-3 rounded-full border-2 border-white shadow-lg z-10 print:hidden"
                      style={{
                        backgroundColor: 'var(--colors-accent)',
                        borderColor: 'var(--colors-surface-elevated)'
                      }}
                    ></div>
                  )}

                  <div
                    className={`rounded-xl p-5 shadow-sm border transition-all duration-200 hover:shadow-md print:rounded-none print:p-2 print:shadow-none print:border-0 print:border-b print:border-gray-200 print:break-inside-avoid ${
                      isWorkExperience ? '' : 'ml-0'
                    }`}
                    style={{
                      backgroundColor: 'var(--colors-surface-elevated)',
                      borderColor: 'var(--colors-border)'
                    }}
                  >
                    {/* Header */}
                    <div className="mb-3 print:mb-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1 print:mb-0">
                        <Text size="4" weight="bold" style={{ color: 'var(--colors-text)' }} className="print:text-black print:text-base print:leading-tight">
                          {item.name}
                        </Text>
                        {item.location && (
                          <Text size="1" style={{ color: 'var(--colors-text-secondary)' }} className="print:text-gray-600 print:text-xs">
                            {item.location}
                          </Text>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <Text size="2" weight="medium" style={{ color: 'var(--colors-text-secondary)' }} className="print:text-gray-700 print:text-sm">
                          {item.title}
                        </Text>
                        <Text size="1" style={{ color: 'var(--colors-text-secondary)' }} className="print:text-gray-600 print:text-xs">
                          {item.time}
                        </Text>
                      </div>
                    </div>

                    {/* Tech stack */}
                    {item.tech && item.tech.length > 0 && (
                      <div className="mb-3 print:mb-1">
                        <Flex wrap="wrap" gap="1" className="print:gap-1">
                          {item.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="soft"
                              radius="full"
                              size="1"
                              style={{
                                backgroundColor: 'rgba(90, 130, 126, 0.1)',
                                color: 'var(--colors-accent)',
                                fontSize: '0.75rem',
                                padding: '0.25rem 0.5rem'
                              }}
                              className="print:bg-gray-100 print:text-gray-700 print:text-xs print:px-1 print:py-0"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </Flex>
                      </div>
                    )}

                    {/* Description */}
                    {item.description && (
                      <div className="prose prose-sm max-w-none text-sm leading-relaxed print:text-xs print:leading-tight" style={{ color: 'var(--colors-text)' }}>
                        <div className="print:text-black">
                          {item.description}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resume;
