'use client';

import { $fetch } from '@/$api/api.fetch';
import Field from '@/components/ui/field/Field';
import Loader from '@/components/ui/loader/Loader';
import { useAuth } from '@/hooks/useAuth';
import { useDebounce } from '@/hooks/useDebounce';
import { IChat } from '@/types/chat.types';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import ChatListItem from './ChatListItem';

const ChatsList = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedTerm = useDebounce(searchTerm, 2000);
	const { user, isLoggedIn } = useAuth();
	const { data, isLoading, isFetching } = useQuery({
		queryKey: ['chats', debouncedTerm],
		queryFn: () =>
			$fetch.get<{ data: IChat[] }>(
				`/chats?sort=createdAt:desc
				&populate[messages]=*
				&populate[users][populate][avatar]=*
				&filters[users][email][$eq]=${user?.email}
				&filters[$or][0][users][username][$contains]=${debouncedTerm}
				&filters[$or][1][messages][text][$contains]=${debouncedTerm}
				`,
				true
			),
		enabled: isLoggedIn,
	});


	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<div className='p-layout border-t border-b border-border'>
				<Field
					placeholder='Search chats'
					Icon={Search}
					value={searchTerm}
					onChange={onSearchChange}
				/>
			</div>
			<div>
				{isLoading || isFetching ? (
					<div className='p-layout'>
						<Loader />
					</div>
				) : (
					data?.data?.map(ch => {
						return <ChatListItem key={ch?.id} chat={ch}></ChatListItem>;
					})
				)}
			</div>
		</div>
	);
};

export default ChatsList;
