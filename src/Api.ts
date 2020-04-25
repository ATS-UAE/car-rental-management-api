import axios, { AxiosInstance } from "axios";
import { AuthServerResponseGet } from "./shared/typings";
import { Authenticated, ApiOptions } from "./Authenticated";
import { VehicleFactory } from "./VehicleFactory";

interface LoginOptions extends ApiOptions {
	username: string;
	password: string;
}

export class Api extends Authenticated {
	private constructor(
		api: AxiosInstance,
		options: ApiOptions,
		public data: AuthServerResponseGet
	) {
		super(api, options);
	}

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
		return new Api(api, { baseUrl }, response.data);
	};

	public execute = async () => {};

	public logout = async () => {
		await this.api.get(`${this.options.baseUrl}/auth/logout`);
	};

	public vehicle = new VehicleFactory(this.api, this.options);
}
