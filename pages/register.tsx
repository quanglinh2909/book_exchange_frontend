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
    <Stack
      sx={{
        alignItems: "center",
        background: "linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%)",
        width: "100%",
        height: "100vh",
        borderRadius: "15px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      <Stack
        sx={{
          width: "500px",
          height: "600px",
          alignItems: "center",
          backgroundColor: "white",
          margin: "100px",
          padding: "20px",
          border: "1px solid grey",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "600", color: "#000" }}
        >
          Register
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Name"
          sx={{ width: "100%", margin: 2 }}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          required
          id="outlined-required"
          label="SĐT"
          sx={{ width: "100%", margin: 2 }}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <TextField
          required
          id="outlined-required"
          label="Email*"
          sx={{ width: "100%", margin: 2 }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          sx={{ width: "100%", margin: 2 }}
          onChange={(e) => setPass(e.target.value)}
          autoComplete="current-password"
        />
        <Button
          variant="contained"
          onClick={handleRegister}
          sx={{
            width: "100%",
            marginBottom: 1,
            borderRadius: "50px",
            backgroundColor: "blue !important",
          }}
        >
          Register
        </Button>
        <Typography
          variant="body1"
          sx={{ fontWeight: "600", color: "#000", mt: 2 }}
        >
          If you have an account?{" "}
          <a style={{ color: "blue" }} href="/login">
            Login
          </a>
        </Typography>
      </Stack>
    </Stack>
  );
}
