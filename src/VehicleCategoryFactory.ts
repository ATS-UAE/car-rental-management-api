import { Authenticated } from "./Authenticated";
import { VehicleCategory } from "./VehicleCategory";

export class VehicleCategoryFactory extends Authenticated {
	public getAll = () => {
		return VehicleCategory.getAll(this);
	};
}
