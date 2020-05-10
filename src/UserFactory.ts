import { Authenticated } from "./Authenticated";
import { User } from "./User";
import { UserServerParamsPost, UserServerParamsPatch } from "./shared/typings";

export class UserFactory extends Authenticated {
	public getOne = (id: number) => {
		return User.getOne(this, id);
	};

	public getAll = () => {
		return User.getAll(this);
	};

	public create = (userData: UserServerParamsPost) => {
		return User.create(this, userData);
	};

	public update = (userId: number, userData: UserServerParamsPatch) => {
		return User.update(this, userId, userData);
	};
}
