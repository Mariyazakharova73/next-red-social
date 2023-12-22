import React, { PropsWithChildren } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import s from './Layout.module.css'

const LayoutClient = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <main className={s.layout}>
      <Sidebar />
      <section className='h-full'>{children}</section>
    </main>
  );
};

export default LayoutClient;
