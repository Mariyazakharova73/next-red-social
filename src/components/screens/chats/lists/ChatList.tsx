'use client';

import { $fetch } from '@/$api/api.fetch';
import Field from '@/components/ui/field/Field';
import Loader from '@/components/ui/loader/Loader';
import { useAuth } from '@/hooks/useAuth';
import { IStrapiChat, IStrapiResponse } from '@/types/chat.types';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import ChatListItem from './ChatListItem';

const ChatList = () => {
	const { user, isLoggedIn } = useAuth();
	const { data, isLoading } = useQuery({
		queryKey: ['chats'],
		queryFn: () =>
			$fetch.get<{ data: IStrapiResponse<IStrapiChat>[] }>(
				`/chats?sort=createdAt:desc&populate[messages]=*&populate[users]=*&filters[users][email][$eq]=${user?.email}`,
				true
			),
		enabled: isLoggedIn,
	});

	const chatsArr = data?.data;

	const chat = chatsArr?.length ? (
		chatsArr?.map(chat => {
			return (
				<ChatListItem key={chat?.id} data={chat}></ChatListItem>
			);
		})
	) : (
		<p className='p-layout'>Chats not found</p>
	);

	return (
		<div>
			<div className='p-layout border-t border-b border-border'>
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
