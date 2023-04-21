import { Stack } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { TextFields } from '@mui/icons-material';

export interface IregisterProps {
}

export default function register (props: IregisterProps) {
  return (
    <Stack>
        <Stack>
        <Typography variant="h4" gutterBottom>
         Register
      </Typography>
      <TextFields
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        </Stack>
    </Stack>
  );
}
