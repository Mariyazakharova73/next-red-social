import { Users2, Phone, MessageSquare, Settings } from 'lucide-react';

export enum AppRoutes {
  FRIENDS = 'friends',
  CALL = 'call',
  CHATS = 'chats',
  SETTINGS = 'settings',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string>  = {
  [AppRoutes.FRIENDS]: '/friends',
  [AppRoutes.CALL]: '/call',
  [AppRoutes.CHATS]: '/chats',
  [AppRoutes.SETTINGS]: '/settings',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig = {
  [AppRoutes.FRIENDS]: {
    path: RoutePath.friends,
    element: <Users2 size={35}/>,
  },
  [AppRoutes.CALL]: {
    path: RoutePath.call,
    element: <Phone size={35}/>,
  },
  [AppRoutes.CHATS]: {
    path: RoutePath.chats,
    element: <MessageSquare size={35}/>,
  },
  [AppRoutes.SETTINGS]: {
    path: RoutePath.settings,
    element: <Settings size={35}/>,
  },
};
