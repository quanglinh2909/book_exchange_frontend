import { Stack } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


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
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </Stack>
    </Stack>
  );
}
