import { getOne as bookingGetResponse } from "../fixtures/response/bookings/getOne";
declare type CreateApiInstanceParams = Parameters<typeof bookingGetResponse>;
export declare const createBookingInstance: (data?: CreateApiInstanceParams[0], meta?: CreateApiInstanceParams[1]) => Promise<import("../..").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, import("../..").Booking>>;
export {};
