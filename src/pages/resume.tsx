import type { NextPage } from "next";
import PageLayout from "@components/pageLayout";
import { resumeData } from "@modules/resume/resumeData";
import { Box } from "@mui/system";
import { useIsTouch } from "@components/useIsTouch";

const Resume: NextPage = () => {
  const isTouch = useIsTouch();
  return (
    <PageLayout title="Resume">
      <Box
        component="ul"
        className="timeline"
        sx={{
          position: "relative",
          width: isTouch ? "100%" : 800,
          margin: "0 auto",
          marginTop: "20px",
          padding: "1em 0",
          listStyleType: "none",
          "&:before": {
            content: '""',
            position: "absolute",
            left: isTouch ? "3px" : "50%",
            top: 0,
            display: "block",
            width: 6,
            height: "100%",
            marginLeft: "-3px",
            zIndex: 5,
            background:
              "linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%)",
          },
        }}
      >
        {resumeData.map((item, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              padding: "1em 0",
              "&:after": {
                content: '""',
                display: "block",
                height: 0,
                clear: "both",
                visibility: "hidden",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: isTouch ? "calc(100% - 33px)" : 370,
                float: !isTouch && index % 2 === 0 ? "left" : "right",
                textAlign: !isTouch && index % 2 === 0 ? "right" : "left",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline",
                    padding: "6px 0",
                    fontWeight: 600,
                    fontSize: "18px",
                    textAlign: "left",
                    "&:before": {
                      position: "absolute",
                      top: "50%",
                      right: "-40px",
                      content: '""',
                      display: "block",
                      width: 12,
                      height: 12,
                      marginTop: "-10px",
                      background: "var(--colors-gray2)",
                      borderRadius: 10,
                      border: "4px solid var(--colors-gray10)",
                      zIndex: 10,
                      left: !isTouch && index % 2 === 0 ? "unset" : "-40px",
                    },
                  }}
                >
                  {item.name}
                </Box>
                <Box
                  sx={{
                    lineHeight: "1em",
                    fontSize: "12px",
                    verticalAlign: "middle",
                  }}
                >
                  <span className="time">{item.time}</span>
                </Box>
              </Box>
              <div className="title">{item.title}</div>
              <Box
                sx={{
                  margin: "1em 0.75em 0 0",
                  fontSize: "14px",
                  fontStyle: "italic",
                  lineHeight: "1.7em",
                  color: "var(--colors-gray11)",
                  "& details": {
                    color: "var(--colors-gray10)",
                    "&[open]": {
                      color: "var(--colors-gray11)",
                    },
                  },
                }}
              >
                {item.description}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ mb: 15 }}></Box>
    </PageLayout>
  );
};

export default Resume;
