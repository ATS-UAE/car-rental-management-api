import axios, { AxiosInstance } from "axios";
import { AuthServerResponseGet } from "./shared/typings";

interface ApiOptions {
	baseUrl: string;
}
interface LoginOptions extends ApiOptions {
	username: string;
	password: string;
}

export class Api {
	private constructor(
		private api: AxiosInstance,
		public data: AuthServerResponseGet,
		private options: ApiOptions
	) {}

	public static login = async ({
		username,
		password,
		baseUrl
	}: LoginOptions) => {
		const api = axios.create({
			withCredentials: true
		});
		const response = await api.post<AuthServerResponseGet>(
			`${baseUrl}/auth/login`,
			{
				username,
				password
			}
		);
		return new Api(api, response.data, { baseUrl });
	};

	public logout = async () => {
		await this.api.get(`${this.options.baseUrl}/auth/logout`);
	};
}
