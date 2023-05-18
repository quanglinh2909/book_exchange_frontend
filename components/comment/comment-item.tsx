import { fDate } from "@/utils";
import { Avatar, Stack, Typography } from "@mui/material";
import * as React from "react";

export interface ICommentItemProps {
  comment: any;
}

export default function CommentItem(props: ICommentItemProps) {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        marginTop: "12px",
        "& svg": {
          width: "40px",
          height: "40px",
        },
      }}
    >
      <Avatar />
      <Stack
        sx={{
          padding: "12px",
          flexGrow: "1",
          marginLeft: "16px",
          borderRadius: "6px",
          backgroundColor: "rgba(145, 158, 171, 0.16)",
        }}
      >
        <Stack>
          <Typography variant="h6">{props.comment.userCreate.name}</Typography>
          <Typography
            sx={{
              fontSize: "0.75em",
              color: "rgb(145, 158, 171)",
            }}
          >
            {fDate(props.comment.updatedAt)}
          </Typography>
        </Stack>
        <Typography sx={{ color: "#000" }}>{props.comment.content}</Typography>
      </Stack>
    </Stack>
  );
}
