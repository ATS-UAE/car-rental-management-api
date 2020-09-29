import { BookingServerResponseGet, ServerResponseMeta } from "car-rental-management-shared";
export declare const getOne: (vehicleData?: Partial<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").BookingAttributes>>, meta?: Partial<ServerResponseMeta>) => BookingServerResponseGet;
