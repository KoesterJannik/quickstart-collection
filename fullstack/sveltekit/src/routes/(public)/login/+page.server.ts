import { fail, redirect } from '@sveltejs/kit';
import { prisma } from '../../../lib/server/db';
import { comparePassword, signJwt } from '../../../lib/server/utils';

// Name has a default value just to display something in the form.

export const load = async () => {
	return {};
};

export const actions = {
	loginUser: async ({ request, cookies }) => {
		const formdata = await request.formData();
		const email = formdata.get('email') as string;
		const password = formdata.get('password') as string;
		const doesUserExist = await prisma.user.findUnique({
			where: { email }
		});
		if (!doesUserExist) return fail(400, { errorMessage: 'Email not found.' });
		const wasPasswordCorrect = await comparePassword(password, doesUserExist.password);
		if (!wasPasswordCorrect) return fail(400, { errorMessage: 'Password incorrect.' });
		const { jwtToken, expires_in_seconds } = await signJwt({
			id: doesUserExist.id,
			email: doesUserExist.email
		});
		cookies.set('token', jwtToken, {
			path: '/',
			httpOnly: true,
			maxAge: parseInt(expires_in_seconds) * 1000,
			sameSite: 'strict',
			secure: true
		});
		redirect(303, '/authenticated/dashboard');
	}
};
