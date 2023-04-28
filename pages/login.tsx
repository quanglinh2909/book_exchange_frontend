import { authApi } from "@/api-client";
import { setLoading } from "@/store";
import { Stack, Button, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import * as React from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { MainLayout } from "@/components";
import { useRouter } from "next/router";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = async () => {
    dispatch(setLoading(true));

    try {
      if (!email) {
        enqueueSnackbar("Vui lòng nhập email", { variant: "error" });
        return;
      }
      if (!pass) {
        enqueueSnackbar("Vui lòng nhập password", { variant: "error" });
        return;
      }
      const { data } = await authApi.login({
        email: email,
        password: pass,
      });
      enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
      router.push("/");
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
    <Stack sx={{ alignItems: "center", marginTop: "100px",background:"linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%)",width:'60%',
                marginLeft:'290px', borderRadius:'15px',boxShadow:'0 0 10px rgba(0,0,0,0.5)' }}>
      <Stack
        sx={{
          width: "500px",
          height: "auto",
          alignItems: "center",
          margin:"100px",
          padding: "20px",
          border: "1px solid grey",
          borderRadius: "5px",
          backgroundColor:'white',
        }}
      >
        <Typography variant="h3" padding={"5px 0 10px 0"} sx={{fontWeight:'600'}}>
          Login Form
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Email"
          sx={{ width: "100%", margin: 3 }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ width: "100%", marginBottom: 3 }}
          onChange={(e) => setpass(e.target.value)}
          value={pass}
        />
        <Button variant="contained" sx={{ width: "100%", marginBottom: 1,borderRadius:'50px',
        backgroundColor:"blue !important"}} onClick={handleLogin}>
          Đăng Nhập
        </Button>
      </Stack>
    </Stack>
  );
}

Login.Layout = MainLayout;