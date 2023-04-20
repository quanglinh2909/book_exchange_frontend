import * as React from "react";
import { useSelector } from "react-redux";

export interface ILoadingComponentProps {}

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
export default function LoadingComponent(props: ILoadingComponentProps) {
  const loading = useSelector((state: any) => state.loading);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading.loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
