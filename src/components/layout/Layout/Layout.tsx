import React, { PropsWithChildren } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import s from './Layout.module.css';
import { Toaster } from 'react-hot-toast';
import MainProvider from '../MainProvider';

const LayoutClient = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <MainProvider>
      <main className={s.layout}>
        <Sidebar />
        <section className='h-full'>{children}</section>
        <Toaster position='top-right'/>
      </main>
    </MainProvider>
  );
};

export default LayoutClient;
