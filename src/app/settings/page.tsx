import Button from '@/components/ui/button/Button';
import { RoutePath } from '@/utils/config';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Settings',
	description: '',
};

const SettingsPage = () => {
	return (
		<div className='p-layout flex flex-col gap-2'>
			<h1>Страница в разработке</h1>
			<Link href={RoutePath.chats}>
				<Button>На главную</Button>
			</Link>
		</div>
	);
};

export default SettingsPage;
