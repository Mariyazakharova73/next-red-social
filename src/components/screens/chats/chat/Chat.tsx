'use client';

import { $fetch } from '@/$api/api.fetch';
import Loader from '@/components/ui/loader/Loader';
import { useAuth } from '@/hooks/useAuth';
import { IChat } from '@/types/chat.types';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import ChatHeader from './ChatHeader';
import Message from './Message';
import MessageField from './MessageField';

export interface IChatProps {
	id: string;
}

const Chat: FC<IChatProps> = ({ id }) => {
	const { user } = useAuth();
	const { data, isLoading } = useQuery({
		queryKey: ['chat', id],
		queryFn: () =>
			$fetch.get<{ data: IChat }>(
				`/chats/${id}
		?populate[messages][populate][owner][populate][avatar]=*
		&populate[users][populate][avatar]=*`,
				true
			),
		select: data => data.data,
		enabled: !!id,
	});

	const author = data?.users.find(u => u.email !== user?.email);

	return (
		<div
			className='w-8/12 border-r border-border h-full grid'
			style={{ gridTemplateRows: isLoading ? '1fr .089fr' : '.6fr 6fr .6fr' }}
		>
			{isLoading ? (
				<div className='flex items-center justify-center'>
					<Loader />
				</div>
			) : (
				<>
					<ChatHeader user={author} />
					<div className='p-layout border-t border-border'>
						{data?.messages.map(m => (
							<Message key={m.id} message={m} />
						))}
					</div>
				</>
			)}
			<MessageField />
		</div>
	);
};

export default Chat;
