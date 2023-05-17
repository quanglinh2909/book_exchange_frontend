import { Stack } from "@mui/joy";
import { ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";

export interface ILeftMenuAdminItemProps {
  item: any;
}

export default function LeftMenuAdminItem({ item }: ILeftMenuAdminItemProps) {
  const { title, path, Icon, info } = item;
  const router = useRouter();
  const isActive = router.pathname === path;

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
        <Icon />
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
