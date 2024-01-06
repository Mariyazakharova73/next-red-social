'use client';
import { $fetch } from '@/$api/api.fetch';
import Field from '@/components/ui/field/Field';
import { useAuth } from '@/hooks/useAuth';
import { useReactQuerySubscription } from '@/hooks/useReactQuerySubscription';
import { MESSAGES_PATH } from '@/utils/config';
import { useMutation } from '@tanstack/react-query';
import { ArrowRightToLine, Send } from 'lucide-react';
import { useParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface IMessageFormState {
	message: string;
}

const MessageField = () => {
	const { user } = useAuth();

	const send = useReactQuerySubscription();
	const { id } = useParams();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<IMessageFormState>({
		mode: 'onChange',
	});

	const { mutate } = useMutation({
		mutationKey: ['update chat', id],
		mutationFn: (data: IMessageFormState) =>
			$fetch.post(
				MESSAGES_PATH,
				{
					data: {
						text: data.message,
						owner: Number(user?.id),
						chat: id,
					},
				},
				true
			),
		onSuccess() {
			reset()
			send({
				operation: 'update',
				entity: 'chat',
				id: id.toString(),
			});
		},
	});

	const onSubmit: SubmitHandler<IMessageFormState> = data => {
		if (!data.message) return;
		mutate(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='border-t border-border p-layout flex items-center justify-between'
		>
			<Field
				className='w-4/5'
				{...register('message', {
					required: 'Please enter your message.',
				})}
				placeholder='Write a message...'
				Icon={ArrowRightToLine}
				type='text'
			/>
			<button
				// isLoading={isLoading}
				disabled={!isValid}
				type='submit'
				className='hover:text-primary transition-colors'
			>
				<Send />
			</button>
		</form>
	);
};

export default MessageField;
