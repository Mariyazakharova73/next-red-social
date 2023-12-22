import Auth from '@/components/screens/auth/Auth';
import { NO_INDEX_PAGE } from '@/utils/constants/seo-constants';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Register',
  ...NO_INDEX_PAGE,
};

const RegisterPage = () => {
  return <Auth type='Register' />;
};

export default RegisterPage;
