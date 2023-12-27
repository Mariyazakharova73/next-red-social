import React from 'react';
import { Metadata } from 'next';
import s from './page.module.css';
import CurrentUser from '@/components/screens/chats/CurrentUser';
import ChatList from '@/components/screens/chats/ChatList';
import Chat from '@/components/screens/chats/Chat';

export const metadata: Metadata = {
  title: 'Chat',
  description: '',
};

const ChatPage = () => {
  return (
    <div className={s.grid}>
      <div className='border-r border-border p-5'>
        <CurrentUser />
        <ChatList />
      </div>
      <div className='p-5'>
        <Chat />
      </div>
    </div>
  );
};

export default ChatPage;
