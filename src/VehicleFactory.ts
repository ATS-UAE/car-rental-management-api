import { Authenticated } from "./Authenticated";
import { Vehicle } from "./Vehicle";

export class VehicleFactory extends Authenticated {
	public getOne = (id: number) => {
		return Vehicle.getOne(this, id);
	};

	public getAll = () => {
		return Vehicle.getAll(this);
	};
}
