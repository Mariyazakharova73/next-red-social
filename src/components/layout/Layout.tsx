import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import s from './Layout.module.css';
import MainProvider from './MainProvider';
import Sidebar from './sidebar/Sidebar';

const LayoutClient = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<MainProvider>
			<main className={s.layout}>
				<Sidebar />
				<section className='h-full'>{children}</section>
				<Toaster position='top-right' />
			</main>
		</MainProvider>
	);
};

export default LayoutClient;
