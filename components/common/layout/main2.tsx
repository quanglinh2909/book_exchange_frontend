import { LayoutProps } from "@/models/common";
import { Stack } from "@mui/material";
import LeftMenu from "../left-menu/lef-menu";
import Header from "../header/header";
import SocketCustom from "../../common/socket/index";

export default function Main2Layout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh" direction={"row"}>
      <SocketCustom />
      <Stack width={280}>
        <LeftMenu />
      </Stack>
      <Stack flex={1} sx={{ overflow: "hidden" }}>
        <Header />
        <Stack sx={{ height: "100%" }}>{children}</Stack>
      </Stack>
    </Stack>
  );
}
