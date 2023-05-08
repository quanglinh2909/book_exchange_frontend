// icons
import { Icon } from "@iconify/react";
// @mui
import { Box } from "@mui/material";
import * as React from "react";

export interface IIconifyProps {}

export default function Iconify({ icon, width = 20, sx, ...other }: any) {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );
}
