import { Stack } from "@mui/joy";
import { Badge, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useSelector } from "react-redux";

export interface ILeftMenuBadgeItemProps {
  item: any;
}

export default function LeftMenuBadgeItem({ item }: ILeftMenuBadgeItemProps) {
  const { title, path, Icon, info } = item;
  const router = useRouter();
  const isActive = router.pathname === path;
  const notify: any = useSelector((state: any) => state.notify.listNotify);
  const notifyBadge = notify.filter((i: any) => i.isRead === "NOTREAD").length;
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{
        borderRadius: "9px",
        cursor: "pointer",
        p: "16px 20px",
        "&:hover": {
          bgcolor: "rgba(145, 158, 171, 0.12)",
        },
        ...(isActive && {
          bgcolor: "rgba(145, 158, 171, 0.12)",
        }),
      }}
      onClick={() => {
        router.push(path);
      }}
    >
      <Stack>
        <Badge badgeContent={notifyBadge} color="success">
          <Icon />
        </Badge>
      </Stack>

      <ListItemText
        disableTypography
        primary={title}
        sx={{ fontWeight: 600 }}
      />

      {info && info}
    </Stack>
  );
}
