import { Stack } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import  TextField from '@mui/icons-material';

export interface IregisterProps {
}

export default function register (props: IregisterProps) {
  return (
    <Stack>
        <Stack>
        <Typography variant="h4" gutterBottom>
         Register
      </Typography>
         <TextField
          required
          id="outlined-required"
          label="email"
        />
      
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
         <TextField
          id="outlined-password-input"
          label="enter your password again"
          type="password"
          autoComplete="current-password"
        />
           <TextField
                required
                id="outlined-required"
                label="name"
        />
           <TextField
                required
                id="outlined-required"
                label="name"
        />
           <TextField
                required
                id="outlined-required"
                label="số điện thoại"
        />
        </Stack>
    </Stack>
  );
}
