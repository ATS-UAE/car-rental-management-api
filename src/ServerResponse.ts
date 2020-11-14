import { ServerResponseMeta } from "car-rental-management-shared";

type DataGetter<R> = () => R;

export class ServerResponse<T, R> {
	constructor(
		public rawData: T,
		public getData: DataGetter<R>,
		public meta: ServerResponseMeta
	) {}
}
