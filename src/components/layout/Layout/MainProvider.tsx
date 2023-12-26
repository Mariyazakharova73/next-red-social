'use client';
import { useAuth } from '@/hooks/useAuth';
import AuthProvider from '@/providers/AuthProvider';
import { SessionProvider } from 'next-auth/react';
import React, { PropsWithChildren, useEffect } from 'react';

const MainProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <SessionProvider>
      <AuthProvider>{children}</AuthProvider>
    </SessionProvider>
  );
};

export default MainProvider;
