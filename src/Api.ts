import axios, { AxiosInstance } from "axios";

interface LoginOptions {
	username: string;
	password: string;
	baseUrl: string;
}
export class Api {
	private constructor(private api: AxiosInstance) {}

	public static login = async ({
		username,
		password,
		baseUrl
	}: LoginOptions) => {
		const api = axios.create({
			withCredentials: true
		});
		await api.post(`${baseUrl}/auth/login`, {
			username,
			password
		});
		return new Api(api);
	};
}
