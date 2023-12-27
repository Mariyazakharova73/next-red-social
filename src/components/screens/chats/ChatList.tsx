import Field from '@/components/ui/field/Field';
import { Search } from 'lucide-react';

const ChatList = () => {
	return (
		<div className='p-layout'>
			<Field placeholder='Search chats' Icon={Search}/>
		</div>
	);
};

export default ChatList;
