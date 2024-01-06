export interface IUser {
  id: any;
	username: string;
	email: string;
	confirmed: boolean;
	role: string;
	avatar: { url: string } | null;
}
