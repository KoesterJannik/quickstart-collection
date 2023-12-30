export const load = async (event) => {
	const user = event.locals.user;
	console.log(user);

	return {
		user
	};
};
