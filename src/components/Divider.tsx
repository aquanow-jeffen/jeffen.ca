import React from "react";
import { Box } from '@radix-ui/themes';

export default React.forwardRef(function Divider(props, ref) {
  return <Box className="mx-4 border-0 w-1 h-48 bg-gray-400" />;
});
