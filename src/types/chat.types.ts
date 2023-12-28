import { IUser } from './user.types';

export interface IMessage {
	messageId: string;
	text: string;
	createdAt: string;
	owner: IUser;
}

export interface IChat {
	chatId: string;
	messages: IMessage[];
	users: IUser[]
}
