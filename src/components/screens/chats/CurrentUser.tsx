'use client';

import Loader from '@/components/ui/loader/Loader';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { RoutePath } from '@/utils/config';
import { getImageUrl } from '@/utils/get-image-url';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import profileIcon from '@/assets/profile-icon.png';

const CurrentUser = () => {
	const { user } = useAuth();
	const { data, isLoading } = useProfile();
	const { push } = useRouter();

	const logout = () => {
		signOut({ redirect: false }).then(() => {
			localStorage.removeItem('token');
			push(RoutePath.login);
		});
	};

	return (
		<div className='p-layout flex items-center justify-between'>
			<div className='flex items-center'>
				{isLoading ? (
					<div className='mr-4'>
						<Loader />
					</div>
				) : (
					<Image
						className='rounded-full object-cover object-center mr-4 w-14 h-14'
						width={56}
						height={56}
						src={getImageUrl(data?.avatar?.url) || profileIcon}
						alt='Аватар.'
						priority
					/>
				)}

				<div className='text-sm'>
					<div>{user?.username}</div>
					<div className='opacity-30'>test work</div>
				</div>
			</div>
			<button
				onClick={logout}
				className='text-[#7C7275] hover:text-white transition-colors easy-linear'
			>
				<LogOut />
			</button>
		</div>
	);
};

export default CurrentUser;
