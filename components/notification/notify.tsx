import { generalApi } from "@/api-client";
import { PATH_API } from "@/constants";
import { fDate } from "@/utils";
import {
  Avatar,
  Box,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export interface INotifyProps {
  notify: any;
}

export default function Notify(props: INotifyProps) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [isRead, setIsRead] = useState(false);
  const handleClick = () => {
    setIsRead(true);
  };
  const base64Flag = "data:image/jpeg;base64,";

  return (
    <Grid
      item
      xs={12}
      onClick={handleClick}
      sx={{ padding: "0 !important", marginTop: "8px" }}
    >
      <Item
        sx={{
          borderLeft: isRead ? "none" : "3px red solid",
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} sx={{ width: "100%" }}>
            <Avatar sx={{ width: "40px", height: "40px" }} />
            <Stack sx={{ paddingLeft: "15px", maxWidth: "400px" }}>
              <Typography sx={{ textAlign: "left", whiteSpace: "pre-wrap" }}>
                {props.notify.userCreate.name + " "}
                <Box component="span">({props.notify.userCreate.phone})</Box> đã
                yêu cầu đổi sách{" "}
                <Link
                  href={"/details-page?idBook=" + props.notify.book.bookId}
                  sx={{ cursor: "pointer", whiteSpace: "pre-wrap" }}
                >
                  {props.notify.book.bookName}
                </Link>
              </Typography>
              <Typography sx={{ textAlign: "left", fontSize: "0.9em" }}>
                {fDate(props.notify.createdAt)}
              </Typography>
            </Stack>
          </Stack>
          <Box
            component={"img"}
            src={PATH_API + props.notify.book.image}
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "15px",
            }}
          ></Box>
        </Stack>
      </Item>
    </Grid>
  );
}
