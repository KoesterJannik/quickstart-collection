import axios from "axios";

const preparedAxios = axios.create();
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;
if (localStorage.getItem("access_token")) {
  preparedAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
}
console.log(BACKEND_URL);

export default preparedAxios;
