import CurrentUser from '@/components/screens/chats/CurrentUser';
import ChatList from '@/components/screens/chats/list/ChatsList';
import { FC, PropsWithChildren } from 'react';
import s from './layout.module.css';

const ChatLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={s.grid}>
			<div className='border-r border-border'>
				<CurrentUser />
				<ChatList />
			</div>
			<div>{children}</div>
		</div>
	);
};

export default ChatLayout;
