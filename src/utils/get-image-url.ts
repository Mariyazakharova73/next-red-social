export const getImageUrl = (url?: string) => {
	return url ? process.env.BACK_URL + url : null;
};
