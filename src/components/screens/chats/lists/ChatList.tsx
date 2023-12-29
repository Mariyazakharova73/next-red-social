'use client';

import { $fetch } from '@/$api/api.fetch';
import Field from '@/components/ui/field/Field';
import Loader from '@/components/ui/loader/Loader';
import { IChat } from '@/types/chat.types';
import { RoutePath, userPath } from '@/utils/config';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import ChatListItem from './ChatListItem';

const ChatList = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['chats'],
		queryFn: () => $fetch.get<IChat[]>(userPath, true),
	});
	console.log(data)

	const chat = data?.length ? (
		data?.map(chat => {
			return <ChatListItem key={chat.chatId} {...chat}></ChatListItem>;
		})
	) : (
		<p className='p-layout'>Chats not found</p>
	);

	return (
		<div>
			<div className='border-t border-b border-border'>
				<Field placeholder='Search chats' Icon={Search} />
			</div>
			<div>
				{isLoading ? (
					<div className='p-layout'>
						<Loader />
					</div>
				) : (
					chat
				)}
			</div>
		</div>
	);
};

export default ChatList;
