'use client';
import { useAuth } from '@/hooks/useAuth';
import { RoutePath } from '@/utils/config';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
	// status === 'authenticated'
	const { user, isLoggedIn } = useAuth();
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		if (isLoggedIn) {
			localStorage.setItem('token', user?.jwt || '');
		}
	}, [user, isLoggedIn]);

	useEffect(() => {
		if (pathname !== RoutePath.login && pathname !== RoutePath.register) {
			const isLoggedIn = !!localStorage.getItem('token');
			if (!isLoggedIn) {
				router.push(RoutePath.login);
			}
		}
	}, [pathname, isLoggedIn]);

	return <>{children}</>;
};

export default AuthProvider;
