'use client';

import { useAuth } from '@/hooks/useAuth';
import { IStrapiChat, IStrapiResponse } from '@/types/chat.types';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import profileIcon from '../profile-icon.png';

export interface IChatListItem {
	data: IStrapiResponse<IStrapiChat>;
}

const ChatListItem: FC<IChatListItem> = ({ data }) => {
	const { user } = useAuth();
	const chat = data.attributes;

	const author = chat?.users?.data.find(
		u => u.attributes.email !== user?.email
	);

	const lastMessage = chat?.messages?.data[chat.messages.data.length - 1];

	return (
		<Link
			href={`chat/${data.id}`}
			className='p-layout flex items-center border-b border-border duration-300 ease-linear transition-colors hover:bg-[#1b1a26]'
		>
			<Image
				className='mr-4'
				width={45}
				height={45}
				src={author?.attributes.avatar || profileIcon}
				alt='Аватар.'
			/>
			<div className='text-sm w-full'>
				<div className='flex items-center justify-between'>
					<span>{author?.attributes.username}</span>
					<span className='text-xs opacity-30'>
						{dayjs(lastMessage?.attributes.createdAt).format('HH:mm')}
					</span>
				</div>
				<div className='opacity-30 mt-1'>{lastMessage?.attributes.text}</div>
			</div>
		</Link>
	);
};

export default ChatListItem;
