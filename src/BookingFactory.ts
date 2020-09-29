import {
	BookingServerParamsPost,
	PartialKeys,
	BookingServerParamsPatch,
	BookingServerResponseDelete
} from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";

export class BookingFactory extends Authenticated {
	public getOne = (id: number) => {
		return Booking.getOne(this, id);
	};

	public getAll = () => {
		return Booking.getAll(this);
	};

	public create = (
		bookingData: PartialKeys<BookingServerParamsPost, "userId">
	) => {
		return Booking.create(this, {
			...bookingData,
			userId: bookingData.userId || this.data.id
		});
	};

	public update = (
		id: number,
		updatedBookingData: BookingServerParamsPatch
	) => {
		return Booking.update(this, id, updatedBookingData);
	};

	public destroy = async (id: number) => {
		const { data: responseData } = await this.api.delete<
			BookingServerResponseDelete
		>(`${this.options.baseUrl}/bookings/${id}`);
		return responseData;
	};
}
