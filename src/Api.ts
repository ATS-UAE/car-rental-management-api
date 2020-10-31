import axios, { AxiosInstance } from "axios";
import {
	AuthServerResponseGet,
	ServerResponseMeta,
	UserSignUpOptions,
	ReplaceAttributes,
	PushUnsubscribeParamsPost,
	PushSubscriptionParamsPost
} from "car-rental-management-shared";
import { Authenticated, ApiOptions } from "./Authenticated";
import { VehicleFactory } from "./VehicleFactory";
import { BookingFactory } from "./BookingFactory";
import { AccidentFactory } from "./AccidentFactory";
import { UserFactory } from "./UserFactory";
import { LocationFactory } from "./LocationFactory";
import { ClientFactory } from "./ClientFactory";
import { CategoryFactory } from "./CategoryFactory";
import { WialonUnitFactory } from "./WialonUnitFactory";
import { VehicleCategoryFactory } from "./VehicleCategoryFactory";
import { InviteFactory } from "./InviteFactory";
import { PushSubscriptionFactory } from "./PushSubscriptionFactory";
import { constructFormDataPayload } from "./utils";

export interface LoginOptions extends ApiOptions {
	username: string;
	password: string;
	remember?: boolean;
}

export type UserSignUpOptionsFormData = ReplaceAttributes<
	UserSignUpOptions,
	{ userImageSrc?: File | null | string }
>;

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
		baseUrl,
		remember
	}: LoginOptions) => {
		const api = axios.create({
			withCredentials: true
		});
		const response = await api.post<AuthServerResponseGet>(
			`${baseUrl}/auth/login`,
			{
				username,
				password,
				remember
			}
		);
		const { data, ...meta } = response.data;
		return new Api(api, { baseUrl }, data, meta);
	};

	public static signUp = async (
		newUser: UserSignUpOptionsFormData,
		{ baseUrl }: ApiOptions
	) => {
		const api = axios.create({
			withCredentials: true
		});
		await api.post(
			`${baseUrl}/users`,
			...constructFormDataPayload(newUser)
		);
	};

	public logout = async () => {
		await this.api.get(`${this.options.baseUrl}/auth/logout`);
	};

	public unsubscribePush = async (data: PushUnsubscribeParamsPost) => {
		await this.api.post(
			`${this.options.baseUrl}/push_notifications/unsubscribe`,
			data
		);
	};

	public subscribePush = async (data: PushSubscriptionParamsPost) => {
		await this.api.post(
			`${this.options.baseUrl}/push_notifications/subscriptions`,
			data
		);
	};

	/** Check if the cookie stored by the browser is still valid. */
	public static checkCookie = async ({ baseUrl }: { baseUrl: string }) => {
		const api = axios.create({
			withCredentials: true
		});
		const response = await api.get(`${baseUrl}/auth/me`);
		const { data, ...meta } = response.data;
		return new Api(api, { baseUrl }, data, meta);
	};

	/** Check current axios instance has a valid cookie. */

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

	public accident = new AccidentFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);

	public user = new UserFactory(this.api, this.options, this.data, this.meta);

	public location = new LocationFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);

	public client = new ClientFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);

	public category = new CategoryFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);

	public wialonUnit = new WialonUnitFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);

	public vehicleCategory = new VehicleCategoryFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);

	public invite = new InviteFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);

	public pushSubscription = new PushSubscriptionFactory(
		this.api,
		this.options,
		this.data,
		this.meta
	);
}
