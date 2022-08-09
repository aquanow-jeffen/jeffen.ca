import { Box } from "@mui/system";

export function WritingCard({ title, subtitle, url }): React.ReactElement {
  return (
    <Box
      sx={{
        padding: "12px",
        borderRadius: "12px",
        margin: "-12px",
        transition: "background-color .5s",
        "&:hover": {
          background: "var(--colors-gray4)",
        },
      }}
    >
      <Box component="a" target="_blank" href={url}>
        <Box sx={{ fontSize: "22px" }}>{title}</Box>
        <Box sx={{ fontSize: "14px", color: "var(--colors-gray10)" }}>
          {subtitle}
        </Box>
      </Box>
    </Box>
  );
}
