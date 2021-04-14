import { BookingServerParamsPost, PartialKeys, BookingServerParamsPatch, BookingServerResponseGet } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";
export declare class BookingFactory extends Authenticated {
    getOne: (id: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>>[], Booking[]>>;
    create: (bookingData: PartialKeys<BookingServerParamsPost, "userId">) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    update: (id: number, updatedBookingData: BookingServerParamsPatch) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    destroy: (id: number) => Promise<BookingServerResponseGet>;
    fromObject: (data: BookingServerResponseGet["data"]) => Booking;
}
