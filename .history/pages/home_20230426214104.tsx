import * as React from 'react';
import Header from '@/components/common/header';
import BodyHome from '@/components/container/bodyhome';

export interface IhomepageProps {
}

export default function homepage (props: IhomepageProps) {
  return (
    <div>
        <Header />
        <BodyHome/>
    </div>
  );
}
