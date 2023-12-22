'use client';
import React from 'react';
import { AtSign, KeyRound } from 'lucide-react';
import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormState } from './auth.types';
import { signIn } from 'next-auth/react';

export interface IAuth {
  type?: 'Login' | 'Register';
}

const Auth = ({ type }: IAuth) => {
  const { register, handleSubmit } = useForm<IAuthFormState>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IAuthFormState> = async (data) => {
    if (type === 'Login') {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });
    }
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
          })}
          className='mb-12'
          placeholder='Enter password'
          type='password'
          Icon={KeyRound}
          // error={{ message: 'Неверный пароль', type: 'min' }}
        />
        <div className='text-center'>
          <Button type='submit'>{type}</Button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
