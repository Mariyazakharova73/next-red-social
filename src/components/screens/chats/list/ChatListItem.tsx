'use client';

import { useAuth } from '@/hooks/useAuth';
import { IChat } from '@/types/chat.types';
import { getImageUrl } from '@/utils/get-image-url';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import profileIcon from '../profile-icon.png';

export interface IChatListItem {
	chat: IChat;
}

const ChatListItem: FC<IChatListItem> = ({ chat }) => {
	const { user } = useAuth();
	const author = chat?.users?.find(u => u.email !== user?.email);

	const lastMessage = chat?.messages[chat.messages.length - 1];

	return (
		<Link
			href={`/chat/${chat.id}`}
			className='p-layout flex items-center border-b border-border duration-300 ease-linear transition-colors hover:bg-[#1b1a26] animation-slide-fade'
		>
			<Image
				className='mr-4 rounded-full object-cover object-center w-14 h-14'
				width={56}
				height={56}
				src={getImageUrl(author?.avatar?.url) || profileIcon}
				alt='Аватар.'
			/>
			<div className='text-sm w-full'>
				<div className='flex items-center justify-between'>
					<span>{author?.username}</span>
					<span className='text-xs opacity-30'>
						{dayjs(lastMessage?.createdAt).format('HH:mm')}
					</span>
				</div>
				<div className='opacity-30 mt-1'>{lastMessage?.text}</div>
			</div>
		</Link>
	);
};

export default ChatListItem;
