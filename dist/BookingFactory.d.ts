import { PartialKeys } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";
export declare class BookingFactory extends Authenticated {
    getOne: (id: number) => Promise<Booking>;
    getAll: () => Promise<Booking[]>;
    create: (bookingData: PartialKeys<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<Pick<import("car-rental-management-shared").BookingAttributes, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">, "userId" | "vehicleId" | "from" | "to" | "bookingType", "finished" | "paid" | "amount" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">>, "userId">) => Promise<Booking>;
    update: (id: number, updatedBookingData: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<import("car-rental-management-shared").BookingAttributes, never, "finished" | "userId" | "vehicleId" | "paid" | "amount" | "from" | "to" | "approved" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "bookingType" | "returnDate" | "pickupDate" | "replaceVin" | "replaceBrand" | "replaceModel" | "replacePlateNumber">>) => Promise<Booking>;
    destroy: (id: number) => Promise<import("car-rental-management-shared").BookingServerResponseGet>;
}
