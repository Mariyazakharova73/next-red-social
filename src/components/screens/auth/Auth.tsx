'use client';

import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';
import { RoutePath } from '@/utils/config';
import { AtSign, KeyRound } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { kkkkk } from './auth.types';

export interface IAuth {
	type?: 'Login' | 'Register';
}

const Auth = ({ type }: IAuth) => {
	const [isLoading, setIsLoading] = useState(false);
	const { register, handleSubmit } = useForm<kkkkk>({
		mode: 'onChange',
	});

	const { push } = useRouter();

	const onSubmit: SubmitHandler<kkkkk> = async data => {
		setIsLoading(true);
		const response = await signIn(
			'credentials',
			type === 'Login'
				? {
						redirect: false,
						...data,
				  }
				: {
						redirect: false,
						username: `user${Math.random()}`,
						...data,
				  }
		);

		if (response?.error) {
			toast.error(response.error);
			setIsLoading(false);
			return;
		}
		setIsLoading(false);
		push(RoutePath.main);
	};

	return (
		<div className='flex w-screen h-full'>
			<form
				className='m-auto block w-96 border border-border p-layout'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className='text-center mb-10'>{type}</h1>
				<Field
					{...register('email', {
						required: 'Please enter your email.',
					})}
					className='mb-6'
					placeholder='Enter email'
					type='email'
					Icon={AtSign}
				/>
				<Field
					{...register('password', {
						required: 'Please enter your password.',
						minLength: {
							value: 6,
							message: 'Min length 6 symbols',
						},
					})}
					className='mb-12'
					placeholder='Enter password'
					type='password'
					Icon={KeyRound}
					// error={{ message: 'Неверный пароль', type: 'min' }}
				/>
				<div className='text-center'>
					<Button isLoading={isLoading} disabled={isLoading} type='submit'>
						{type}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Auth;
