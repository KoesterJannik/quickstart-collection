import { fail, redirect } from '@sveltejs/kit';
import { prisma } from '../../../lib/server/db';
import { hashPassword, signJwt } from '../../../lib/server/utils';

// Name has a default value just to display something in the form.

export const load = async () => {
	return {};
};

export const actions = {
	registerUser: async ({ request, cookies }) => {
		const formdata = await request.formData();
		const email = formdata.get('email') as string;
		const password = formdata.get('password') as string;
		const doesUserExist = await prisma.user.findUnique({
			where: { email }
		});
		if (doesUserExist) return fail(400, { errorMessage: 'Email already in use' });
		const hashedPassword = await hashPassword(password);
		const newUser = await prisma.user.create({
			data: {
				email,
				password: hashedPassword
			}
		});
		const { jwtToken, expires_in_seconds } = await signJwt({
			id: newUser.id,
			email: newUser.email
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
