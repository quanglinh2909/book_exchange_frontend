import Main2Layout from "@/components/common/layout/main2";
import { Stack } from "@mui/material";
import { Typography } from "antd";

export interface INotificationProps {}

function Notification(props: INotificationProps) {
  
  return 
  <Stack>
    <Typography>Notifications</Typography>
  </Stack>
}
Notification.Layout = Main2Layout;
export default Notification;
