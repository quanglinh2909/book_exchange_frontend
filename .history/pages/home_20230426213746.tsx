import * as React from 'react';
import Header from '@/components/common/header';
import bodyhome from '@/components/container/bodyhome';

export interface IhomepageProps {
}

export default function homepage (props: IhomepageProps) {
  return (
    <div>
        <Header />
        <h1>hello</h1>
    </div>
  );
}
