import { hashPassword } from '../../../../lib/server/utils';
import { prisma } from '../../../../lib/server/db';

export const actions = {
	changePassword: async ({ request, locals }) => {
		const formdata = await request.formData();
		const newPassword = formdata.get('newPassword') as string;
		const newHashedPassword = await hashPassword(newPassword);

		await prisma.user.update({
			where: { id: locals.user.id },
			data: { password: newHashedPassword }
		});
		console.log('Password changed');
		return {};
	}
};
