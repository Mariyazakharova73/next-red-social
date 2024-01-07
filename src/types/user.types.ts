export interface IUser {
	id: number
	username: string
	email: string
	confirmed: boolean
	role: string
	friends: IUser[]
	avatar: {
		url: string
	} | null
}
