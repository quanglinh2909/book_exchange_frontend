import { authApi } from "@/api-client";
import { setLoading } from "@/store";
import { Stack, Button } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import * as React from "react";
import { useDispatch } from "react-redux";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    dispatch(setLoading(true));

    try {
      const { data } = await authApi.login({
        email: "linh@gmail.com",
        password: "12345678",
      });
      enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.message) {
        enqueueSnackbar(error?.response?.data?.message, { variant: "error" });
      } else {
        enqueueSnackbar(error?.message, { variant: "error" });
      }
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <Stack>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Hello World
      </Button>
    </Stack>
  );
}
