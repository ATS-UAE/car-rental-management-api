import axios, { AxiosInstance } from "axios";
import { AuthServerResponseGet, ServerResponseMeta } from "./shared/typings";
import { Authenticated, ApiOptions } from "./Authenticated";
import { VehicleFactory } from "./VehicleFactory";
import { BookingFactory } from "./BookingFactory";

interface LoginOptions extends ApiOptions {
	username: string;
	password: string;
}

export class Api extends Authenticated {
	private constructor(
		api: AxiosInstance,
		options: ApiOptions,
		public data: AuthServerResponseGet["data"],
		public meta: ServerResponseMeta
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
		const { data, ...meta } = response.data;
		return new Api(api, { baseUrl }, data, meta);
	};

	public execute = async () => {};

	public logout = async () => {
		await this.api.get(`${this.options.baseUrl}/auth/logout`);
	};

	public vehicle = new VehicleFactory(this.api, this.options);
}
