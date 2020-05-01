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
		data: AuthServerResponseGet["data"],
		meta: ServerResponseMeta
	) {
		super(api, options, data, meta);
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

	public logout = async () => {
		await this.api.get(`${this.options.baseUrl}/auth/logout`);
	};

	public validate = async () => {
		const response = await this.api.get<AuthServerResponseGet>(
			`${this.options.baseUrl}/auth/me`
		);

		const { data, ...meta } = response.data;
		this.data = data;
		this.meta = meta;
	};

	public vehicle = new VehicleFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);

	public booking = new BookingFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);
}
