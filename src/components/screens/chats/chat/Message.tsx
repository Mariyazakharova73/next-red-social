import { useAuth } from '@/hooks/useAuth';
import { IMessage } from '@/types/chat.types';
import { getImageUrl } from '@/utils/get-image-url';
import dayjs from 'dayjs';
import Image from 'next/image';
import { FC } from 'react';
import profileIcon from '../profile-icon.png';

export interface IMessageProps {
	message: IMessage;
}

const Message: FC<IMessageProps> = ({ message }) => {
	const { user } = useAuth();
	const isSender = user?.email === message?.owner?.email;

	return (
		<div
			className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2.5`}
		>
			<div
				className={`relative flex items-center ${
					isSender ? 'flex-row-reverse' : ''
				}`}
			>
				<Image
					src={getImageUrl(message?.owner?.avatar?.url) || profileIcon}
					alt='Avatar'
					className='rounded-full w-14 h-14'
					width={56}
					height={56}
				/>
				<div className={isSender ? 'mr-3' : 'ml-3'}>
					<div
						className={`text-sm text-white py-1.5 mt-4 px-3 rounded-2xl ${
							isSender
								? 'rounded-tr-none bg-primary'
								: 'rounded-tl-none bg-border'
						}`}
					>
						{message.text}
					</div>
					<div
						className={`text-xs opacity-30 block mt-1.5 ${
							isSender ? 'text-right' : 'text-left'
						}`}
					>
						{dayjs(message.createdAt).format('HH:mm')}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;
