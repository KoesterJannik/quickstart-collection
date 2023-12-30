import { verifyToken } from './lib/server/utils';
import { prisma } from './lib/server/db';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const desiredUrl = event.url.pathname;

	if (desiredUrl.startsWith('/authenticated')) {
		const token = event.cookies.get('token');
		console.log(`TOKEN:${token}`);
		if (!token) {
			console.log('No token found hooks');
			return new Response(null, {
				status: 303,
				headers: { Location: '/login' }
			});
		}
		const tokenPayload = (await verifyToken(token)) as { id: string; email: string };
		const user = await prisma.user.findUnique({
			where: { id: tokenPayload.id }
		});

		if (!user) {
			console.log('User not found');
			return new Response(null, {
				status: 303,
				headers: { Location: '/login' }
			});
		}

		event.locals.user = user;

		if (desiredUrl.startsWith('/authenticated/admin')) {
			if (user.role != 'ADMIN') {
				return new Response(null, {
					status: 303,
					headers: { Location: '/login' }
				});
			}
		}

		const response = await resolve(event);
		return response;
	}
	const response = await resolve(event);
	return response;
}
