import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";
import { PartialKeys } from "./shared/typings";
export declare class BookingFactory extends Authenticated {
    getOne: (id: number) => Promise<Booking>;
    getAll: () => Promise<Booking[]>;
    create: (bookingData: PartialKeys<import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").BookingAttributes, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber" | "replaceVehicleId">, "userId" | "vehicleId" | "from" | "to" | "bookingType", "finished" | "paid" | "amount" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber" | "replaceVehicleId">>, "userId">) => Promise<Booking>;
    update: (id: number, updatedBookingData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<import("./shared/typings").BookingAttributes, never, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">>) => Promise<Booking>;
}
