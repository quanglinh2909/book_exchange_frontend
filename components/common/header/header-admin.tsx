import { Stack, Avatar, Badge, Typography } from "@mui/material";
import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useRouter } from "next/router";
export interface IHeaderAdminProps {}

export default function HeaderAdmin(props: IHeaderAdminProps) {
  const router = useRouter();
  const { pathname } = router;
  const [title, setTitle] = React.useState("");
  React.useEffect(() => {
    switch (pathname) {
      case "/admin/user":
        setTitle("Users");
        break;
      case "/admin/category":
        setTitle("Category");
        break;
      case "/admin/book":
        setTitle("Book");
        break;
      default:
        setTitle("Dashboard");
        break;
    }
  }, [pathname]);

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
        <Typography
          variant={"body1"}
          sx={{
            color: "#212B36",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          {title}
        </Typography>
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
      </Stack>
    </Stack>
  );
}
