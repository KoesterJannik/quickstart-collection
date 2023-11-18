import preparedAxios, { BACKEND_URL } from "../setup";
export async function register(data: { email: string; password: string }) {
  return await preparedAxios.post(`${BACKEND_URL}/auth/register`, {
    email: data.email,
    password: data.password,
  });
}

export async function login(data: { email: string; password: string }) {
  return await preparedAxios.post(`${BACKEND_URL}/auth/login`, {
    email: data.email,
    password: data.password,
  });
}

export async function getUserDetails() {
  const token = localStorage.getItem("access_token");
  return await preparedAxios.get(`${BACKEND_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
