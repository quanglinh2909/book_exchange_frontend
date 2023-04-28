import { authApi } from "@/api-client";
import { setLoading } from "@/store";
import { Stack, Button, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import * as React from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "@/components";

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  //tets
  const router = useRouter();
  const dispatch = useDispatch();
  const handleRegister = async () => {
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
      const { data } = await authApi.signUp({
        email: email,
        password: pass,
        phone: phone,
        name: name,
      });
      enqueueSnackbar("Đăng ký thành công", { variant: "success" });
      router.push("/login");
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
    <Stack sx={{ alignItems: "center", marginTop: "100px" }}>
      <Stack
        sx={{
          width: "500px",
          height: "auto",
          alignItems: "center",
          backgroundColor: "yellowgreen",
          padding: "20px",
          border: "1px solid grey",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="name"
          sx={{ width: "100%", margin: 3 }}
          onChange={(e: any) => setName(e.target.value)}
          value={name}
        />
        <TextField
          required
          id="outlined-required"
          label="số điện thoại"
          sx={{ width: "100%", margin: 3 }}
          onChange={(e: any) => setPhone(e.target.value)}
          value={phone}
        />
        <TextField
          required
          id="outlined-required"
          label="email"
          sx={{ width: "100%", margin: 3 }}
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          sx={{ width: "100%", margin: 3 }}
          onChange={(e: any) => setPass(e.target.value)}
          autoComplete="current-password"
        />
        <Button variant="contained" onClick={handleRegister}>
          Đăng ký
        </Button>
      </Stack>
    </Stack>
  );
}
Register.Layout = MainLayout;
