import { Authenticated } from "./Authenticated";
import { BookingServerResponseGet, ExtractServerResponseData, ServerResponseMeta, BookingStatus } from "./shared/typings";
import { Vehicle } from "./Vehicle";
import { User } from "./User";
export declare class Booking {
    private login;
    data: ExtractServerResponseData<BookingServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<BookingServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, bookingId: number) => Promise<Booking>;
    static getAll: (login: Authenticated) => Promise<Booking[]>;
    static create: (login: Authenticated, bookingData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").BookingAttributes, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber" | "replaceVehicleId">, "userId" | "vehicleId" | "from" | "to" | "bookingType", "finished" | "paid" | "amount" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber" | "replaceVehicleId">>) => Promise<Booking>;
    static update: (login: Authenticated, bookingId: number, updatedVehicleData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<import("./shared/typings").BookingAttributes, never, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">>) => Promise<Booking>;
    update: (updatedVehicleData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<import("./shared/typings").BookingAttributes, never, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">>) => Promise<void>;
    approve: () => Promise<void>;
    deny: () => Promise<void>;
    destroy: () => Promise<void>;
    getBookingStatus: () => BookingStatus;
    getVehicle: () => Promise<Vehicle>;
    getUser: () => Promise<User>;
}
