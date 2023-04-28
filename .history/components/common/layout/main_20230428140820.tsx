import { LayoutProps } from "@/models/common";
import { Box, Container, Stack } from "@mui/material";
import { useState } from "react";
import Header from "../header";
import Footer from "../footer";
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
      <Box>
        <Header />

        <Container
          className={expand ? "expand" : ""}
          sx={{ paddingRight: "0 !important" }}
          maxWidth={false}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </Stack>
    // </Auth>
  );
}
