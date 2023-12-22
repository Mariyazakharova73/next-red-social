import React, { InputHTMLAttributes } from 'react';
import Loader from '../loader/Loader';
import s from './Button.module.css';

export interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button = ({ isLoading, children }: IButton) => {
  return <button className={s.button}>{isLoading ? <Loader /> : children}</button>;
};

export default Button;
