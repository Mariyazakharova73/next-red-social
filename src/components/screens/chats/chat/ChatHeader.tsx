import { IUser } from '@/types/user.types';
import { getImageUrl } from '@/utils/get-image-url';
import Image from 'next/image';
import { FC } from 'react';
import profileIcon from '@/assets/profile-icon.png';

export interface ChatHeaderProps {
	user?: IUser;
}

const ChatHeader: FC<ChatHeaderProps> = ({ user }) => {
	return (
		<div className='p-layout flex items-center justify-between'>
			<div className='flex items-center'>
				<Image
					className='rounded-full object-cover object-center mr-4 w-10 h-10'
					width={40}
					height={40}
					src={getImageUrl(user?.avatar?.url) || profileIcon}
					alt='Аватар.'
					priority
				/>
				<div className='text-sm'>
					<div>{user?.username}</div>
					<div className='opacity-30'>2 members</div>
				</div>
			</div>
		</div>
	);
};

export default ChatHeader;
