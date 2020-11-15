import {
	DatePropsToUnix,
	VehicleCategoryAttributes
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { VehicleCategory } from "./VehicleCategory";

export class VehicleCategoryFactory extends Authenticated {
	public getAll = () => {
		return VehicleCategory.getAll(this);
	};

	public fromObject = (data: DatePropsToUnix<VehicleCategoryAttributes>) => {
		return new VehicleCategory(this, data);
	};
}
