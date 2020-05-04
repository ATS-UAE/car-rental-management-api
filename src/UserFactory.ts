import { Authenticated } from "./Authenticated";
import { User } from "./User";
import { UserServerParamsPost, PartialKeys } from "./shared/typings";

export class UserFactory extends Authenticated {
	public getOne = (id: number) => {
		return User.getOne(this, id);
	};

	public getAll = () => {
		return User.getAll(this);
	};

	public create = (
		bookingData: PartialKeys<UserServerParamsPost, "userId">
	) => {
		return User.create(this, {
			...bookingData,
			userId: bookingData.userId || this.data.id
		});
	};
}
