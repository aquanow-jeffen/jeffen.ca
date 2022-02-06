import React from "react";
import { Box } from "@mui/system";

export default React.forwardRef(function Divider(props, ref) {
  return (
    <Box
      ref={ref}
      sx={{
        margin: "0px 4px",
        border: "0px",
        width: "1px",
        height: "48px",
        background: "var(--colors-gray4)",
        flexShrink: 0,
      }}
    />
  );
});
