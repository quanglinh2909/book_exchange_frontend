import * as React from 'react';
import Header from '@/components/common/header';
import BodyHome from '@/components/container/bodyhome';
import Footer from '@/components/common/footer';
import Stack from '@mui/material/Stack';

export interface IhomepageProps {
}

export default function homepage (props: IhomepageProps) {
  return (
    <Stack>
        <Header />
        <BodyHome/>
        <Footer/>
    </Stack>
  );
}
