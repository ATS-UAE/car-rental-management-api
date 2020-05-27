import { Authenticated } from "./Authenticated";
import { Vehicle, VehicleGetAllOptions } from "./Vehicle";
import { VehicleServerParamsPatch } from "./shared/typings";

export class VehicleFactory extends Authenticated {
	public getOne = (id: number) => {
		return Vehicle.getOne(this, id);
	};

	public getAll = (options?: VehicleGetAllOptions) => {
		return Vehicle.getAll(this);
	};

	public update = (
		id: number,
		updateVehicleData: VehicleServerParamsPatch
	) => {
		return Vehicle.update(this, id, updateVehicleData);
	};
}
