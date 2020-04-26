import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";
import { BookingServerParamsPost } from "./shared/typings";

export class BookingFactory extends Authenticated {
	public getOne = (id: number) => {
		return Booking.getOne(this, id);
	};

	public getAll = () => {
		return Booking.getAll(this);
	};

	public create = (
		bookingData: Omit<BookingServerParamsPost, "userId"> &
			Partial<Pick<BookingServerParamsPost, "userId">>
	) => {
		return Booking.create(this, {
			...bookingData,
			userId: bookingData.userId || this.data.id
		});
	};
}
