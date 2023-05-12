import { Stack, Avatar, Badge, Typography } from "@mui/material";
import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Link from "next/link";
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const router = useRouter();

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      p={"10px 16px"}
      position={"sticky"}
      top={0}
      zIndex={100}
      bgcolor={"rgb(216,221,222)"}
    >
      <Stack>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: "20px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Nhập tên sách, tác giả, thể loại..."
          />
        </Paper>
      </Stack>
      <Stack
        direction={"row"}
        color={"#637381"}
        alignItems={"center"}
        spacing={2}
      >
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon />
        </Badge>

        <Avatar sx={{ width: "35px", height: "35px" }} />
        <Link href="/login">
              <Typography
              color={"#000"}
              className="hover:text-blue-500 transition duration-300 flex items-center"
                sx={{ fontSize: "18px", cursor: "pointer" }}
              >
                Đăng nhập
              </Typography>
            </Link>

            <Typography sx={{ margin: "0 8px" }}>|</Typography>
            <Link href="/register">
              <Typography
              color={"#000"}
              className="hover:text-blue-500 transition duration-300 flex items-center"
                sx={{ fontSize: "18px", cursor: "pointer" }}
              >
                Đăng ký
              </Typography>
            </Link>
      </Stack>
    </Stack>
  );
}
