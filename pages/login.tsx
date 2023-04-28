import { authApi } from "@/api-client";
import { setLoading } from "@/store";
import { Stack, Button, Typography, Link } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import * as React from "react";
import { useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import { useState } from "react";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const [email,setEmail] = useState('');
  const [pass,setpass] = useState('');
  const dispatch = useDispatch();
  const handleLogin = async () => {
    dispatch(setLoading(true));

    try {
      if(!email){
        enqueueSnackbar('Vui lòng nhập email', { variant: "error" });
        return;

      }
      
      if(!pass){
        enqueueSnackbar('Vui lòng nhập password', { variant: "error" });
        return;

      }
      const { data } = await authApi.login({
        email: email,
        password: pass,
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
    <Stack sx={{alignItems:"center",marginTop:"100px"}}>
      <Stack sx={{
      width:"500px",
      height:'auto',
      alignItems:'center',
      backgroundColor:'yellowgreen',
      padding:"20px",
      border:"1px solid grey",
      borderRadius:"5px",
      

    }}> 
      <Typography variant="h3" padding={'5px 0 10px 0'}>SignIn</Typography> 
      <TextField
          required
          id="outlined-required"
          label="Email"
          sx={{width:"100%",margin:3}}
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
        

        />
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{width:"100%",marginBottom:1}}
          onChange={(e)=> setpass(e.target.value)}
          value={pass}
        />
        <Link href="#" underline="hover" sx={{marginBottom:1}}>
        Forgot password ? 
      </Link>
      <Button variant="contained" sx={{marginBottom:1,width:"100%"}} onClick={handleLogin} >Đăng Nhập</Button>
      
      <Typography sx={{marginBottom:2}}> Or Sign Up Using</Typography>

      <Link href="#" underline="hover" sx={{marginBottom:1,width:"100%"}}>
      <Button variant="contained"sx={{marginBottom:1,width:"100%"}} >Đăng Ký</Button>
      </Link>
      
    </Stack>
    </Stack>
    
  );
}
