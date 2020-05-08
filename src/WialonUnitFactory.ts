import { Authenticated } from "./Authenticated";
import { WialonUnit } from "./WialonUnit";

export class WialonUnitFactory extends Authenticated {
	public getOne = (id: number) => {
		return WialonUnit.getOne(this, id);
	};

	public getAll = () => {
		return WialonUnit.getAll(this);
	};
}
