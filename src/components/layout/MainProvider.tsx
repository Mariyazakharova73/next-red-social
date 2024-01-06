'use client';
import AuthProvider from '@/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	},
});

const MainProvider = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<SessionProvider>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>{children}</AuthProvider>
			</QueryClientProvider>
		</SessionProvider>
	);
};

export default MainProvider;
