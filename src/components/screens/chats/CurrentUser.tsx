'use client';

import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import profileIcon from './profile-icon.png';

const CurrentUser = () => {
	const { user } = useAuth();
	return (
		<div className='p-layout flex items-center'>
			<Image
				className='mr-4'
				width={50}
				height={50}
				src={user?.avatar || profileIcon}
				alt='Аватар.'
			/>
			<div className='text-sm'>
				<div>{user?.username}</div>
				<div className='opacity-30'>test work</div>
			</div>
		</div>
	);
};

export default CurrentUser;
