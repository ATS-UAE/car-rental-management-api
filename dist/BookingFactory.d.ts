import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";
import { BookingServerParamsPost, PartialKeys } from "./shared/typings";
export declare class BookingFactory extends Authenticated {
    getOne: (id: number) => Promise<Booking>;
    getAll: () => Promise<Booking[]>;
    create: (bookingData: PartialKeys<BookingServerParamsPost, "userId">) => Promise<Booking>;
    update: (id: number, updatedBookingData: import("./shared/typings").DatePropsToUnix<Pick<import("./shared/typings").BookingAttributes, never> & Pick<Partial<import("./shared/typings").BookingAttributes>, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate"> & {
        replaceVehicle?: import("./shared/typings").UseParameters<import("./shared/typings").ReplaceVehicleAttributes, "vin" | "brand" | "model" | "plateNumber", never> | undefined;
    }>) => Promise<Booking>;
}
