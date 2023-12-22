import React from 'react';
import Chat from '@/components/chats/Chat';
import ChatList from '@/components/chats/ChatList';
import CurrentUser from '@/components/chats/CurrentUser';
import { Metadata } from 'next';
import s from './page.module.css';

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
