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
import { useGridRegisterStrategyProcessor } from "@mui/x-data-grid/internals";

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
  const [listNotify, setListNotify] = useState([]);
  const notifys = useSelector((state: any) => state.notify.listNotify);
  useEffect(() => {
    setListNotify(notifys);
  }, [notifys]);
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
              <Notify key={index} notify={item} />
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
