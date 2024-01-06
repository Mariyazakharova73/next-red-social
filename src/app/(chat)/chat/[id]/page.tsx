import Chat from '@/components/screens/chats/chat/Chat';
import { NO_INDEX_PAGE } from '@/utils/constants/seo-constants';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
	...NO_INDEX_PAGE,
};

export interface IChatPageProps {
	params: { id: string };
}

const ChatPage: FC<IChatPageProps> = ({ params }) => {
	return <Chat id={params.id}/>;
};

export default ChatPage;
