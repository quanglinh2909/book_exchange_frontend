import { LayoutProps } from "@/models/common";
import { Container, Stack } from "@mui/material";
import { useState } from "react";
export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  const [expand, setExpand] = useState(false);

  return (
    // <Auth>
    <Stack
      minHeight="100vh"
      position="relative"
      direction={"row"}
      overflow={"hidden"}
    >
      <Stack component="main" flexGrow={1} mt={{ xs: 2, md: 0 }}>
        <Container
          className={expand ? "expand" : ""}
          sx={{ paddingRight: "0 !important" }}
          maxWidth={false}
        >
          {children}
        </Container>
      </Stack>
    </Stack>
    // </Auth>
  );
}
