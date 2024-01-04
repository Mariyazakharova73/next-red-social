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
	users: IUser[];
}

export interface IStrapiChat {
	messages: { data: IStrapiResponse<IMessage>[] };
	users: { data: IStrapiResponse<IUser>[] };
}

export interface IStrapiResponse<T> {
	id: number;
	attributes: T;
}
