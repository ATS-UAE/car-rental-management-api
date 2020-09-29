import {
	ClientServerParamsPost,
	ClientServerParamsPatch,
	ClientServerResponseDelete
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Client } from "./Client";

export class ClientFactory extends Authenticated {
	public getOne = (id: number) => {
		return Client.getOne(this, id);
	};

	public getAll = () => {
		return Client.getAll(this);
	};

	public create = (clientData: ClientServerParamsPost) => {
		return Client.create(this, clientData);
	};

	public update = (
		id: number,
		updatedClientData: ClientServerParamsPatch
	) => {
		return Client.update(this, id, updatedClientData);
	};

	public destroy = async (id: number) => {
		const { data: responseData } = await this.api.delete<
			ClientServerResponseDelete
		>(`${this.options.baseUrl}/clients/${id}`);
		return responseData;
	};
}
