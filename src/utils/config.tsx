import { MessageSquare, Phone, Settings, Users2 } from 'lucide-react';


export const userPath = '/users/me?populate=*'

export enum AppRoutes {
	MAIN = 'main',
	FRIENDS = 'friends',
	CALL = 'call',
	CHATS = 'chats',
	SETTINGS = 'settings',
	NOT_FOUND = 'not_found',
	LOGIN = 'login',
	REGISTER = 'register',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.FRIENDS]: '/friends',
	[AppRoutes.CALL]: '/call',
	[AppRoutes.CHATS]: '/chats',
	[AppRoutes.SETTINGS]: '/settings',
	[AppRoutes.NOT_FOUND]: '*',
	[AppRoutes.LOGIN]: '/login',
	[AppRoutes.REGISTER]: '/register',
};

export const routeConfig = {
	[AppRoutes.FRIENDS]: {
		path: RoutePath.friends,
		element: <Users2 size={35} />,
	},
	[AppRoutes.CALL]: {
		path: RoutePath.call,
		element: <Phone size={35} />,
	},
	[AppRoutes.CHATS]: {
		path: RoutePath.chats,
		element: <MessageSquare size={35} />,
	},
	[AppRoutes.SETTINGS]: {
		path: RoutePath.settings,
		element: <Settings size={35} />,
	},
};
