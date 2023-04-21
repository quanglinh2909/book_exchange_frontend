import { Stack } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';


export interface IregisterProps {
}

export default function register (props: IregisterProps) {
  return (
    <Stack>
        <Stack>
        <Typography variant="h4" gutterBottom>
         Register
      </Typography>
        </Stack>
    </Stack>
  );
}
