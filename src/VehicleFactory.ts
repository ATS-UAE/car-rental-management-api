import {
	VehicleServerResponseDelete,
	VehicleServerResponseGet
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";
import {
	Vehicle,
	VehicleGetAllOptions,
	VehicleServerParamsPatchFormData,
	VehicleServerParamsPostFormData
} from "./Vehicle";

export class VehicleFactory extends Authenticated {
	public getOne = (id: number) => {
		return Vehicle.getOne(this, id);
	};

	public getAll = (options?: VehicleGetAllOptions) => {
		return Vehicle.getAll(this, options);
	};

	public update = (
		id: number,
		updateVehicleData: VehicleServerParamsPatchFormData
	) => {
		return Vehicle.update(this, id, updateVehicleData);
	};

	public create = (vehicleData: VehicleServerParamsPostFormData) => {
		return Vehicle.create(this, vehicleData);
	};

	public destroy = async (id: number) => {
		const { data: responseData } = await this.api.delete<
			VehicleServerResponseDelete
		>(`/vehicle/${id}`);
		const { data, ...meta } = responseData;
		return new ServerResponse(data, () => new Vehicle(this, data), meta);
	};

	public fromObject = (data: VehicleServerResponseGet["data"]) => {
		return new Vehicle(this, data);
	};
}
