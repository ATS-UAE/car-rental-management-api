import moxios from "moxios";
import { getOne as bookingGetResponse } from "./fixtures/response/bookings/getOne";
import { getAll as bookingGetAllResponse } from "./fixtures/response/bookings/getAll";
import { BASE_URL } from "./fixtures";
import { createApiInstance } from "./utils/createApiInstance";
import { Booking } from "../Booking";
import { BookingServerParamsPost, BookingType } from "../shared/typings";

describe("Booking", () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});

	describe("Getting bookings", () => {
		it("Gets one booking.", async () => {
			const api = await createApiInstance();
			const VEHICLE_ID = 1;
			const GET_ONE_RESPONSE = bookingGetResponse();
			moxios.stubOnce("get", `${BASE_URL}/bookings/${VEHICLE_ID}`, {
				response: GET_ONE_RESPONSE
			});
			const booking = await api.booking.getOne(VEHICLE_ID);
			expect(booking instanceof Booking).toBe(true);
			expect(booking.data).toEqual(GET_ONE_RESPONSE.data);
		});
		it("Gets all bookings.", async () => {
			const api = await createApiInstance();
			const GET_ALL_RESPONSE = bookingGetAllResponse();
			moxios.stubOnce("get", `${BASE_URL}/bookings`, {
				response: GET_ALL_RESPONSE
			});
			const bookings = await api.booking.getAll();
			expect(
				bookings.every((v, index) => {
					const matchesData = v.data === GET_ALL_RESPONSE.data[index];
					return matchesData && v instanceof Booking;
				})
			).toBe(true);
		});
	});
	describe("Creating a booking", () => {
		const newBooking: Omit<BookingServerParamsPost, "userId"> &
			Partial<Pick<BookingServerParamsPost, "userId">> = {
			vehicleId: 1,
			bookingType: BookingType.BUSINESS,
			from: 0,
			to: 1
		};
		it("Creates a booking on behalf of someone.", async () => {
			const api = await createApiInstance();
			const BOOKING_TARGET_USER_ID = 25;
			const GET_ONE_RESPONSE = bookingGetResponse({
				...newBooking,
				userId: BOOKING_TARGET_USER_ID
			});
			moxios.stubOnce("post", `${BASE_URL}/bookings`, {
				response: GET_ONE_RESPONSE
			});
			const { data, ...meta } = GET_ONE_RESPONSE;
			const booking = await api.booking.create({
				userId: BOOKING_TARGET_USER_ID,
				...newBooking
			});
			expect(booking instanceof Booking).toBe(true);
			expect(booking.data).toEqual(data);
			expect(booking.meta).toEqual(meta);
		});
		it("Creates a booking for me.", async () => {
			const api = await createApiInstance();
			const BOOKING_TARGET_USER_ID = api.data.id;
			const GET_ONE_RESPONSE = bookingGetResponse({
				...newBooking,
				userId: BOOKING_TARGET_USER_ID
			});
			moxios.stubOnce("post", `${BASE_URL}/bookings`, {
				response: GET_ONE_RESPONSE
			});
			const { data, ...meta } = GET_ONE_RESPONSE;
			const booking = await api.booking.create(newBooking);
			expect(booking instanceof Booking).toBe(true);
			expect(booking.data).toEqual(data);
			expect(booking.meta).toEqual(meta);
		});
	});
});
