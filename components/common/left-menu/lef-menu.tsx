import { Avatar, Box, Drawer, List, Stack, Typography } from "@mui/material";
import * as React from "react";
import Logo from "../logo";
import LeftMenuAdminItem from "./left-menu-admin-item";
import navConfig from "@/mock/config";
import configLeftMenu from "@/mock/config-left-menu";
import { useSelector } from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LeftMenuBadgeItem from "./left-menu-badge";
export interface ILeftMenuProps {}

export default function LeftMenu(props: ILeftMenuProps) {
  const user = useSelector((state: any) => state.user);
  return (
    <Drawer
      open
      variant="permanent"
      PaperProps={{
        sx: {
          width: 280,
          bgcolor: "background.default",
          borderRightStyle: "dashed",
          pl: 2,
          pr: 2,
        },
      }}
    >
      <Stack spacing={2}>
        <Stack direction={"row"} alignItems={"center"} mt={2} spacing={2}>
          <Stack sx={{ height: "40px", width: "40px" }}>
            <Logo />
          </Stack>

          <Typography
            variant="subtitle2"
            sx={{ color: "#212B36", fontSize: "17px", fontWeight: "bold" }}
          >
            Book Exchange
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          bgcolor={"rgba(145, 158, 171, 0.12)"}
          borderRadius={"9px"}
          p={"16px 20px"}
          mt={2}
        >
          <Avatar></Avatar>
          <Typography
            variant="subtitle2"
            sx={{ color: "#212B36", fontSize: "15px", fontWeight: "bold" }}
          >
            {user.name}
          </Typography>
        </Stack>
        <Stack spacing={1}>
          {configLeftMenu.map((item) => (
            <LeftMenuAdminItem key={item.title} item={item} />
          ))}
          <LeftMenuBadgeItem
            item={{
              title: "Thông báo",
              path: "/notification",
              Icon: NotificationsIcon,
            }}
          />
        </Stack>
      </Stack>
    </Drawer>
  );
}
