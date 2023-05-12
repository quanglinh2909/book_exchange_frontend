import { LayoutProps } from "@/models/common";
import {
  Box,
  Container,
  Stack,
  Backdrop,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { useSelector } from "react-redux";
export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  const [expand, setExpand] = useState(false);
  const loading = useSelector((state: any) => state.loading);
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
        <Grid item sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Backdrop
            sx={{
              color: "#000",
            }}
            open={loading?.loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Grid>
        <Container
          className={expand ? "expand" : ""}
          sx={{ paddingRight: "0 !important", zIndex: "1 !important" }}
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
