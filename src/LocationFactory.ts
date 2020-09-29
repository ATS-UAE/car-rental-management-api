import {
	LocationServerParamsPost,
	LocationServerParamsPatch
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Location } from "./Location";

export class LocationFactory extends Authenticated {
	public getOne = (id: number) => {
		return Location.getOne(this, id);
	};

	public getAll = () => {
		return Location.getAll(this);
	};

	public create = (locationData: LocationServerParamsPost) => {
		return Location.create(this, locationData);
	};

	public update = (
		id: number,
		updatedBookingData: LocationServerParamsPatch
	) => {
		return Location.update(this, id, updatedBookingData);
	};
}
