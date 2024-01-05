import { IUser } from './user.types';

export interface IMessage {
	id: number;
	text: string;
	createdAt: string;
	owner: IUser;
}

export interface IChat {
	id: number;
	messages: IMessage[];
	users: IUser[];
}
