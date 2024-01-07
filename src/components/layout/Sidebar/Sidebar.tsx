'use client';
import { useAuth } from '@/hooks/useAuth';
import { RoutePath, routeConfig } from '@/utils/config';
import cn from 'clsx';
import { Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import icon from '../../../../public/linear-icon.svg';
import s from './Sidebar.module.css';

const Sidebar = () => {
	const pathname = usePathname();
	const { isLoggedIn } = useAuth();

	return (
		<aside className={s.sidebar}>
			{isLoggedIn ? (
				<>
					<Link href={RoutePath.chats}>
						<Image 
						//className='w-11 h-11' 
						src={icon} alt='logo.' priority width={44} height={44} />
					</Link>
					<div>
						{Object.values(routeConfig).map(item => {
							return (
								<Link
									className={cn(s.link, { [s.active]: pathname === item.path })}
									href={item.path}
									key={item.path}
								>
									{item.element}
								</Link>
							);
						})}
					</div>
					<Sun className={s.icon} size={35} />
				</>
			) : null}
		</aside>
	);
};

export default Sidebar;
