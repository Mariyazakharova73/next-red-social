import Button from '@/components/ui/button/Button';
import { RoutePath } from '@/utils/config';
import Link from 'next/link';

const CallPage = () => {
	return (
		<div className='p-layout flex flex-col gap-2'>
			<h1>Страница в разработке</h1>
			<Link href={RoutePath.chats}>
				<Button>На главную</Button>
			</Link>
		</div>
	);
};

export default CallPage;
