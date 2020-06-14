import { Authenticated } from "./Authenticated";
import {
	Vehicle,
	VehicleGetAllOptions,
	VehicleServerParamsPatchFormData,
	VehicleServerParamsPostFormData
} from "./Vehicle";
import { VehicleServerResponseDelete } from "./shared/typings";

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
		>(`${this.options.baseUrl}/vehicle/${id}`);
		const { data, ...meta } = responseData;
		return new Vehicle(this, data, meta);
	};
}
