import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '@/components/common/header';
import BodyHome from '@/components/container/bodyhome';

export interface IhomepageProps {
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function homepage (props: IhomepageProps) {
  return (
    <div>
        <Header />
        <h1>hello</h1>
        <BodyHome/>
    </div>
  );
}
