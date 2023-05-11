import { Stack } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";


export interface IregisterProps {
}

export default function register (props: IregisterProps) {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');
    const [phone, setPhone] = useState('');
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
          value={name}
        />
      <TextField
          required
          id="outlined-required"
          label="số điện thoại"
          value={phone}
        />
      <TextField
          required
          id="outlined-required"
          label="email"
          value={email}
        />
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      <TextField
          id="outlined-password-input"
          label="enter password again"
          type="password"
          autoComplete="current-password"
        />
        </Stack>
        <Button variant="outlined">Đăng ký</Button>
    </Stack>
  );
}
