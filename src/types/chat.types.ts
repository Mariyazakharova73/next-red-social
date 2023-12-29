import { IUser } from './user.types';

export interface IMessage {
	id: string;
	text: string;
	createdAt: string;
	owner: IUser;
}

export interface IChat {
	id: string;
	messages: IMessage[];
	users: IUser[]
}
