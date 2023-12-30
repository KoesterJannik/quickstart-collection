import bcrypt from 'bcrypt';
import { BCRYPT_SALT, JWT_SECRET, JWT_DURATION_IN_SECONDS } from '$env/static/private';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password: string) => {
	const salt = await bcrypt.genSalt(Number(BCRYPT_SALT));
	return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hashedPassword: string) => {
	return await bcrypt.compare(password, hashedPassword);
};

export const signJwt = (payload: { id: string; email: string }) => {
	const jwtToken = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_DURATION_IN_SECONDS + 's' });
	return {
		jwtToken,
		expires_in_seconds: JWT_DURATION_IN_SECONDS
	};
};
export const verifyToken = (token: string) => {
	return jwt.verify(token, JWT_SECRET);
};
