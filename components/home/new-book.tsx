import { Stack } from "@mui/joy";
import { Typography, Grid } from "@mui/material";
import * as React from "react";
import ItemBook from "./item-book";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export interface INewBookHomeProps {
  title?: string;
}

export default function NewBookHome(props: INewBookHomeProps) {
  const { title } = props;
  return (
    <Stack flex={1}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          color={"#000"}
          variant={"body1"}
          sx={{
            fontWeight: 600,
            fontSize: "30px",
            ml: "16px",
          }}
        >
          {title}
        </Typography>
        <Stack
          color={"#000"}
          direction={"row"}
          alignItems={"center"}
          sx={{
            cursor: "pointer",
            mr: "16px",
            "&:hover": {
              //đổi màu khi hover
              color: "blue",
            },
          }}
        >
          <Typography
            variant={"body1"}
            sx={{
              fontSize: "18px",
            }}
          >
            Xem tất cả
          </Typography>
          <NavigateNextIcon />
        </Stack>
      </Stack>
      <Stack mt={2} p={2}>
        <Grid container spacing={3}>
          <ItemBook />
          <ItemBook />
          <ItemBook />
          <ItemBook />
          <ItemBook />
          <ItemBook />
          <ItemBook />
          <ItemBook />
          <ItemBook />
          <ItemBook />
          <ItemBook />
          <ItemBook />
        </Grid>
      </Stack>
    </Stack>
  );
}
