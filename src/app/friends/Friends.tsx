'use client';

import { $fetch } from '@/$api/api.fetch';
import Loader from '@/components/ui/loader/Loader';
import { useProfile } from '@/hooks/useProfile';
import { IUser } from '@/types/user.types';
import { getImageUrl } from '@/utils/get-image-url';
import { useQuery } from '@tanstack/react-query';
import cn from 'clsx';
import Image from 'next/image';
import profileIcon from '@/assets/profile-icon.png';

const Friends = () => {
	const { data: authUser } = useProfile();
	const { data, isLoading, isFetching } = useQuery({
		queryKey: ['users'],
		queryFn: () => $fetch.get<IUser[]>('/users?populate=avatar', true),
	});

	return (
		<div className='w-7/12'>
			<h1 className='p-layout border-r border-b border-border'>All users</h1>
			{isLoading || isFetching ? (
				<div className='p-layout'>
					<Loader />
				</div>
			) : (
				<div className='grid grid-cols-3'>
					{data?.map(user => {
						const isFriend = authUser?.friends?.some(u => u.id === user.id);
						return (
							<div
								key={user.id}
								className={cn(
									'text-center border border-l-0 border-t-0 border-border p-layout'
								)}
							>
								<Image
									width={96}
									height={96}
									alt={user.username}
									src={getImageUrl(user.avatar?.url) || profileIcon}
									priority
									className='mx-auto rounded-full w-24 h-24 object-cover object-center'
								/>
								<div className='mt-3 text-xl font-medium'>{user.username}</div>
								<button className='border p-1 rounded-lg border-white transition-colors hover:border-primary hover:text-primary cursor-pointer mt-2'>
									{isFriend ? 'Remove' : 'Add'}
								</button>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Friends;
