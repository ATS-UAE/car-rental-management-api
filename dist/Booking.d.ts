import { Authenticated } from "./Authenticated";
import { BookingServerResponseGet, ExtractServerResponseData, ServerResponseMeta, BookingServerParamsPost } from "./shared/typings";
export declare class Booking {
    private login;
    data: ExtractServerResponseData<BookingServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<BookingServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, bookingId: number) => Promise<Booking>;
    static getAll: (login: Authenticated) => Promise<Booking[]>;
    static create: (login: Authenticated, bookingData: BookingServerParamsPost) => Promise<Booking>;
    update: (updatedVehicleData: import("./shared/typings").DatePropsToUnix<Pick<import("./shared/typings").BookingAttributes, never> & Pick<Partial<import("./shared/typings").BookingAttributes>, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate"> & {
        replaceVehicle?: import("./shared/typings").UseParameters<import("./shared/typings").ReplaceVehicleAttributes, "vin" | "brand" | "model" | "plateNumber", never> | undefined;
    }>) => Promise<void>;
    approve: () => Promise<void>;
    deny: () => Promise<void>;
    destroy: () => Promise<void>;
}
