'use client';

import { useAuth } from '@/hooks/useAuth';
import { IMessage } from '@/types/chat.types';
import { IUser } from '@/types/user.types';
import Image from 'next/image';
import { FC } from 'react';
import profileIcon from '../profile-icon.png';

export interface IChatListItem {
	users: IUser[];
	messages: IMessage[];
}

const ChatListItem: FC<IChatListItem> = ({ users, messages }) => {
	const { user } = useAuth();

	const author = users.find(u => u.email !== user?.email);
	const lastMessage = messages[messages.length - 1];
	return (
		<div className='p-layout flex items-center'>
			<Image
				className='mr-4'
				width={45}
				height={45}
				src={author?.avatar || profileIcon}
				alt='Аватар.'
			/>
			<div className='text-sm'>
				<div>
					<span>{author?.username}</span>
					<span>{lastMessage?.createdAt}</span>
				</div>
				<div className='opacity-30'>{lastMessage?.text}</div>
			</div>
		</div>
	);
};

export default ChatListItem;
