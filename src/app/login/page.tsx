import Auth from '@/components/screens/auth/Auth';
import { NO_INDEX_PAGE } from '@/utils/constants/seo-constants';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Login',
  ...NO_INDEX_PAGE,
};

const LoginPage = () => {
  return <Auth type='Login' />;
};

export default LoginPage;
