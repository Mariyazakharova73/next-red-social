
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';
import { ArrowRightToLine } from 'lucide-react';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface IMessageField {
	sendMessage: (message: string) => Promise<void>;
}

export interface IMessageFormState {
	message: string;
}

const MessageField: FC<IMessageField> = ({ sendMessage }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IMessageFormState>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IMessageFormState> = data => {
		data.message && sendMessage(data.message);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('message', {
					required: 'Please enter your message.',
				})}
				placeholder='Write a message...'
				Icon={ArrowRightToLine}
				type='text'
			/>
			<Button
				// isLoading={isLoading}
				disabled={!isValid}
				type='submit'
			>
				Отправить
			</Button>
		</form>
	);
};

export default MessageField;
