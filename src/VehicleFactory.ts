import { Authenticated } from "./Authenticated";
import {
	Vehicle,
	VehicleGetAllOptions,
	VehicleServerParamsPatchFormData
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
}
