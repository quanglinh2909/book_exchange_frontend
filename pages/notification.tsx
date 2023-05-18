import React, { useEffect, useState } from "react";
import Main2Layout from "@/components/common/layout/main2";
import { Avatar, Link, Stack, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Notify from "@/components/notification/notify";
import { useSelector } from "react-redux";
import { generalApi } from "@/api-client";

export interface INotificationProps {}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Notification(props: INotificationProps) {
  const user = useSelector((state: any) => state.user);
  const [listNotify, setListNotify] = useState<any>([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await generalApi.getAllNotify(user.id);
      setListNotify(data);
      console.log(data);
    };
    fetch();
  }, []);
  const data = [
    {
      user: {
        name: "Nguyễn Văn Hậu",
        avatar: "https://randomuser.me/api/portraits/med/men/70.jpg",
        phone: "09871234455",
      },
      book: {
        id: "10",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://salt.tikicdn.com/cache/w1200/ts/product/62/b7/62/3b3a507acef199e5149f32610ad1e8d3.png",
      },
    },
    {
      user: {
        name: "Nguyễn Văn Hậu",
        avatar: "https://randomuser.me/api/portraits/med/men/70.jpg",
        phone: "09871234455",
      },
      book: {
        id: "10",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://salt.tikicdn.com/cache/w1200/ts/product/62/b7/62/3b3a507acef199e5149f32610ad1e8d3.png",
      },
    },
    {
      user: {
        name: "Nguyễn Văn Hậu",
        avatar: "https://randomuser.me/api/portraits/med/men/70.jpg",
        phone: "09871234455",
      },
      book: {
        id: "10",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://salt.tikicdn.com/cache/w1200/ts/product/62/b7/62/3b3a507acef199e5149f32610ad1e8d3.png",
      },
    },
    {
      user: {
        name: "Nguyễn Văn Hậu",
        avatar: "https://randomuser.me/api/portraits/med/men/70.jpg",
        phone: "09871234455",
      },
      book: {
        id: "10",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://salt.tikicdn.com/cache/w1200/ts/product/62/b7/62/3b3a507acef199e5149f32610ad1e8d3.png",
      },
    },
    {
      user: {
        name: "Nguyễn Văn Hậu",
        avatar: "https://randomuser.me/api/portraits/med/men/70.jpg",
        phone: "09871234455",
      },
      book: {
        id: "10",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://salt.tikicdn.com/cache/w1200/ts/product/62/b7/62/3b3a507acef199e5149f32610ad1e8d3.png",
      },
    },
    {
      user: {
        name: "Nguyễn Văn Hậu",
        avatar: "https://randomuser.me/api/portraits/med/men/70.jpg",
        phone: "09871234455",
      },
      book: {
        id: "10",
        name: "Nghĩ giàu làm giàu",
        img: "https://salt.tikicdn.com/cache/w1200/ts/product/62/b7/62/3b3a507acef199e5149f32610ad1e8d3.png",
      },
    },
  ];
  return (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
      }}
    >
      <Stack sx={{ width: "100%", height: "550px", alignItems: "center" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ marginBottom: "10px", width: "90%" }}
        >
          <Typography
            sx={{
              borderBottom: "2px solid blue",
              width: "fit-content",
              color: "grey",
            }}
            variant="h6"
          >
            Thông báo
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            marginTop: "10px",
            overflow: "auto",
            height: "calc(100vh -108px)",
            alignItems: "center",
          }}
        >
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: "90% !important" }}
          >
            {listNotify.map((item: any, index: number) => (
              <Notify notify={item} />
            ))}
          </Grid>
        </Stack>
        {/* 2 */}
      </Stack>
    </Stack>
  );
}
Notification.Layout = Main2Layout;
export default Notification;
