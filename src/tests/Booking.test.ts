import moxios from "moxios";
import {
	BookingServerParamsPost,
	BookingType,
	BookingServerResponseDelete,
	BookingServerParamsPatch,
	StatusCode
} from "car-rental-management-shared";
import { getOne as bookingGetResponse } from "./fixtures/response/bookings/getOne";
import { getAll as bookingGetAllResponse } from "./fixtures/response/bookings/getAll";
import { BASE_URL } from "./fixtures";
import { createApiInstance } from "./utils/createApiInstance";
import { Booking } from "../Booking";
import { createBookingInstance } from "./utils/createBookingInstance";
import { createServerResponse } from "./utils/createServerResponse";

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
			expect(booking.rawData).toEqual(GET_ONE_RESPONSE.data);
		});
		it("Gets all bookings.", async () => {
			const api = await createApiInstance();
			const GET_ALL_RESPONSE = bookingGetAllResponse();
			moxios.stubOnce("get", `${BASE_URL}/bookings`, {
				response: GET_ALL_RESPONSE
			});
			const bookings = await api.booking.getAll();
			expect(
				bookings.getData().every((v, index) => {
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
			expect(booking.rawData).toEqual(data);
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
			expect(booking.rawData).toEqual(data);
			expect(booking.meta).toEqual(meta);
		});
	});

	describe("Deleting a booking.", () => {
		it("Deletes a booking", async () => {
			const booking = await createBookingInstance();
			const DELETE_RESPONSE: BookingServerResponseDelete = createServerResponse(
				StatusCode.SUCCESS,
				[],
				true,
				`Booking with ID ${booking.rawData.id}`,
				bookingGetResponse(booking.rawData).data
			);
			moxios.stubOnce(
				"delete",
				`${BASE_URL}/bookings/${booking.rawData.id}`,
				{
					response: DELETE_RESPONSE
				}
			);
			// We only need this function to resolve to pass the test.
			await expect(booking.getData().destroy()).resolves.toBeUndefined();
		});
	});

	describe("Updating a booking", () => {
		it("Updates a booking.", async () => {
			const booking = await createBookingInstance({ approved: null });
			const PATCH_PARAMS: BookingServerParamsPatch = {
				vehicleId: 25,
				approved: false
			};
			const PATCH_RESPONSE: BookingServerResponseDelete = createServerResponse(
				StatusCode.SUCCESS,
				[],
				true,
				`Booking with ID ${booking.rawData.id}`,
				bookingGetResponse(PATCH_PARAMS).data
			);
			moxios.stubOnce(
				"patch",
				`${BASE_URL}/bookings/${booking.rawData.id}`,
				{
					response: PATCH_RESPONSE
				}
			);
			await booking.getData().update(PATCH_PARAMS);
			const { data, ...meta } = PATCH_RESPONSE;
			expect(booking.rawData).toEqual(data);
			expect(booking.meta).toEqual(meta);
		});
		it("Approves the booking", async () => {
			const booking = await createBookingInstance({ approved: null });
			const PATCH_RESPONSE: BookingServerResponseDelete = createServerResponse(
				StatusCode.SUCCESS,
				[],
				true,
				`Booking with ID ${booking.rawData.id}`,
				bookingGetResponse({
					...booking.rawData,
					approved: true
				}).data
			);
			moxios.stubOnce(
				"patch",
				`${BASE_URL}/bookings/${booking.rawData.id}`,
				{
					response: PATCH_RESPONSE
				}
			);
			await booking.getData().approve();
			expect(booking.rawData.approved).toBe(true);
		});
		it("Denies a booking.", async () => {
			const booking = await createBookingInstance({ approved: null });
			const PATCH_RESPONSE: BookingServerResponseDelete = createServerResponse(
				StatusCode.SUCCESS,
				[],
				true,
				`Booking with ID ${booking.rawData.id}`,
				bookingGetResponse({
					...booking.rawData,
					approved: false
				}).data
			);
			moxios.stubOnce(
				"patch",
				`${BASE_URL}/bookings/${booking.rawData.id}`,
				{
					response: PATCH_RESPONSE
				}
			);
			await booking.getData().deny();
			expect(booking.rawData.approved).toBe(false);
		});
	});
});
