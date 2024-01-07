import { Metadata } from 'next';
import React from 'react';
import Friends from './Friends';

export const metadata: Metadata = {
  title: 'Friends',
  description: '',
};

const FriendsPage = () => {
  return <Friends/>;
};

export default FriendsPage;
