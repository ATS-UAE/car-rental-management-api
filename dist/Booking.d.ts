import { BookingServerResponseGet, ExtractServerResponseData, BookingServerParamsPost, BookingServerParamsPatch, BookingStatus } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Vehicle } from "./Vehicle";
import { User } from "./User";
import { ServerResponse } from "./ServerResponse";
export declare class Booking {
    private login;
    data: ExtractServerResponseData<BookingServerResponseGet>;
    constructor(login: Authenticated, data: ExtractServerResponseData<BookingServerResponseGet>);
    static getOne: (login: Authenticated, bookingId: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    static getAll: (login: Authenticated) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>>[], Booking[]>>;
    static create: (login: Authenticated, bookingData: BookingServerParamsPost) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    static update: (login: Authenticated, bookingId: number, updatedVehicleData: BookingServerParamsPatch) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    isBookedToUser: () => Promise<boolean>;
    update: (updatedVehicleData: BookingServerParamsPatch) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    approve: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    deny: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    destroy: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>, Booking>>;
    getBookingStatus: () => BookingStatus;
    isCurrentlyActive: () => boolean;
    getVehicle: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").VehicleAttributes>, Vehicle>>;
    getUser: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<Pick<import("car-rental-management-shared").UserAttributes, "blocked" | "id" | "username" | "firstName" | "lastName" | "email" | "mobileNumber" | "lastLogin" | "userImageSrc" | "licenseImageSrc" | "emailConfirmed" | "clientId" | "role" | "timeZone" | "createdAt" | "updatedAt">>, User>>;
    toObject: () => import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>;
}
