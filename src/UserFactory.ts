import { Authenticated } from "./Authenticated";
import {
	User,
	UserServerParamsPatchFormData,
	UserServerParamsPostFormData
} from "./User";

export class UserFactory extends Authenticated {
	public getOne = (id: number) => {
		return User.getOne(this, id);
	};

	public getAll = () => {
		return User.getAll(this);
	};

	public create = (userData: UserServerParamsPostFormData) => {
		return User.create(this, userData);
	};

	public update = (
		userId: number,
		userData: UserServerParamsPatchFormData
	) => {
		return User.update(this, userId, userData);
	};
}
