import { Stack } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useDispatch } from 'react-redux';


export interface IregisterProps {
}

export default function register (props: IregisterProps) {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const handleRegister= ()=> {
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

    }
  return (
    <Stack sx={{alignItems:"center",marginTop:"100px"}}>
        <Stack
            sx={{
                width:"500px",
                height:'auto',
                alignItems:'center',
                backgroundColor:'yellowgreen',
                padding:"20px",
                border:"1px solid grey",
                borderRadius:"5px",
              }}
        >
        <Typography variant="h4" gutterBottom>
         Register
      </Typography>
      <TextField
          required
          id="outlined-required"
          label="name"
          sx={{width:"100%",margin:3}}
          onChange={(e)=> setName(e.target.value)}
          value={name}
        />
      <TextField
          required
          id="outlined-required"
          label="số điện thoại"
          sx={{width:"100%",margin:3}}
          onChange={(e)=> setPhone(e.target.value)}
          value={phone}
        />
      <TextField
          required
          id="outlined-required"
          label="email"
          sx={{width:"100%",margin:3}}
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
        />
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          sx={{width:"100%",margin:3}}
          onChange={(e)=> setPass(e.target.value)}
          autoComplete="current-password"
        />
           <Button variant="contained" onClick={handleRegister} >Đăng ký</Button>
        </Stack>
        
    </Stack>
  );
}
