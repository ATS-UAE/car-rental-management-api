import axios, { AxiosInstance } from "axios";
import { AuthServerResponseGet, ServerResponseMeta } from "./shared/typings";
import { Authenticated, ApiOptions } from "./Authenticated";
import { VehicleFactory } from "./VehicleFactory";
import { BookingFactory } from "./BookingFactory";

interface LoginOptions extends ApiOptions {
	username: string;
	password: string;
}

interface CookieAuthOptions extends ApiOptions {
	cookie?: string;
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

	/**
	 * You can optionally provide a cookie if you want the api to use the cookie stored in the browser.
	 */
	public static useCookie = async ({
		cookie,
		baseUrl
	}: CookieAuthOptions) => {
		const api = axios.create({
			withCredentials: true,
			headers: {
				Cookie: cookie
			}
		});

		const response = await api.get<AuthServerResponseGet>(
			`${baseUrl}/auth/me`
		);
		const { data, ...meta } = response.data;
		return new Api(api, { baseUrl }, data, meta);
	};

	public logout = async () => {
		await this.api.get(`${this.options.baseUrl}/auth/logout`);
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
