import { Authenticated } from "./Authenticated";
import { Accident } from "./Accident";
import { AccidentServerParamsPost, PartialKeys } from "./shared/typings";

export class AccidentFactory extends Authenticated {
	public getOne = (id: number) => {
		return Accident.getOne(this, id);
	};

	public getAll = () => {
		return Accident.getAll(this);
	};

	public create = (
		accidentData: PartialKeys<AccidentServerParamsPost, "userId">
	) => {
		return Accident.create(this, {
			...accidentData,
			userId: accidentData.userId || this.data.id
		});
	};
}
