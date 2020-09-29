import { BookingServerResponseGet, ExtractServerResponseData, ServerResponseMeta, BookingStatus } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Vehicle } from "./Vehicle";
import { User } from "./User";
export declare class Booking {
    private login;
    data: ExtractServerResponseData<BookingServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<BookingServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, bookingId: number) => Promise<Booking>;
    static getAll: (login: Authenticated) => Promise<Booking[]>;
    static create: (login: Authenticated, bookingData: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<Pick<import("car-rental-management-shared").BookingAttributes, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">, "userId" | "vehicleId" | "from" | "to" | "bookingType", "finished" | "paid" | "amount" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">>) => Promise<Booking>;
    static update: (login: Authenticated, bookingId: number, updatedVehicleData: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<import("car-rental-management-shared").BookingAttributes, never, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">>) => Promise<Booking>;
    update: (updatedVehicleData: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<import("car-rental-management-shared").BookingAttributes, never, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">>) => Promise<void>;
    approve: () => Promise<void>;
    deny: () => Promise<void>;
    destroy: () => Promise<void>;
    getBookingStatus: () => BookingStatus;
    getVehicle: () => Promise<Vehicle>;
    getUser: () => Promise<User>;
}
