import { LayoutProps } from "@/models/index";
import { Box, Stack } from "@mui/material";
import * as React from "react";
import LeftMenuAdmin from "../left-menu/lef-menu-admin";
import HeaderAdmin from "../header/header-admin";

export function AdminLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh" direction={"row"}>
      <Stack width={280}>
        <LeftMenuAdmin />
      </Stack>
      <Stack flex={1} sx={{ overflow: "hidden" }}>
        <HeaderAdmin />
        <Stack>{children}</Stack>
      </Stack>
    </Stack>
  );
}
