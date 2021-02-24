import {
	AccidentServerResponseGet,
	ExtractServerResponseData,
	AccidentServerResponseGetAll,
	AccidentServerResponsePost,
	AccidentServerParamsPost,
	AccidentServerParamsPatch,
	AccidentServerResponsePatch,
	AccidentServerResponseDelete,
	ReplaceAttributes
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";
import { constructFormDataPayload } from "./utils";

export type AccidentServerParamsPostFormData = ReplaceAttributes<
	AccidentServerParamsPost,
	{ accidentImageSrc?: File | string | null }
>;

export type AccidentServerParamsPatchFormData = ReplaceAttributes<
	AccidentServerParamsPatch,
	{ accidentImageSrc?: File | string | null }
>;

export class Accident {
	constructor(
		private login: Authenticated,
		public data: ExtractServerResponseData<AccidentServerResponseGet>
	) {}

	public static getOne = async (login: Authenticated, accidentId: number) => {
		const { data: responseData } = await login.api.get<
			AccidentServerResponseGet
		>(`/accidents/${accidentId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Accident(login, data), meta);
	};

	public static getAll = async (login: Authenticated) => {
		const { data: responseData } = await login.api.get<
			AccidentServerResponseGetAll
		>(`/accidents`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => data.map((v) => new Accident(login, v)),
			meta
		);
	};

	public static create = async (
		login: Authenticated,
		accidentData: AccidentServerParamsPostFormData
	) => {
		const { data: responseData } = await login.api.post<
			AccidentServerResponsePost
		>(`/accidents`, ...constructFormDataPayload(accidentData));
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Accident(login, data), meta);
	};

	public static destroy = async (
		login: Authenticated,
		accidentId: number
	) => {
		const { data: responseData } = await login.api.delete<
			AccidentServerResponseDelete
		>(`/accidents/${accidentId}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Accident(login, data), meta);
	};

	public update = async (
		updatedVehicleData: AccidentServerParamsPatchFormData
	) => {
		const { data: responseData } = await this.login.api.patch<
			AccidentServerResponsePatch
		>(
			`/accidents/${this.data.id}`,
			...constructFormDataPayload(updatedVehicleData)
		);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Accident(this.login, data),
			meta
		);
	};

	public destroy = async () => {
		const { data: responseData } = await this.login.api.delete<
			AccidentServerResponseDelete
		>(`/accidents/${this.data.id}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(
			data,
			() => new Accident(this.login, data),
			meta
		);
	};

	public toObject = () => {
		return this.data;
	};
}
