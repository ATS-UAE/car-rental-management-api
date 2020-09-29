import { PartialKeys } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Accident, AccidentServerParamsPostFormData } from "./Accident";

export class AccidentFactory extends Authenticated {
	public getOne = (id: number) => {
		return Accident.getOne(this, id);
	};

	public getAll = () => {
		return Accident.getAll(this);
	};

	public create = (
		accidentData: PartialKeys<AccidentServerParamsPostFormData, "userId">
	) => {
		return Accident.create(this, {
			...accidentData,
			userId: accidentData.userId || this.data.id
		});
	};

	public destroy = (accidentId: number) => {
		return Accident.destroy(this, accidentId);
	};
}
