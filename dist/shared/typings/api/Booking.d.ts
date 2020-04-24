import { BookingAttributes, DatePropsToUnix, ServerResponse, RemoveImmutableSequelizeProperties, ExtractServerResponseData, UseParameters } from "../";
import { ReplaceVehicleAttributes } from "../models";
export declare type BookingServerResponseGet = ServerResponse<DatePropsToUnix<BookingAttributes> & {
    vehicle: {
        id: number;
        vin: string;
        plateNumber: string;
        brand: string;
        model: string;
    };
}>;
export declare type BookingServerResponseGetAll = ServerResponse<DatePropsToUnix<ExtractServerResponseData<BookingServerResponseGet>>[]>;
export declare type BookingServerParamsPatch = Partial<DatePropsToUnix<UseParameters<BookingAttributes, "id", "userId" | "paid" | "amount" | "from" | "to" | "approved" | "finished" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "vehicleId" | "bookingType" | "returnDate" | "pickupDate"> & {
    replaceVehicle?: UseParameters<ReplaceVehicleAttributes, "vin" | "brand" | "model" | "plateNumber">;
}>>;
export declare type BookingServerParamsPost = DatePropsToUnix<UseParameters<RemoveImmutableSequelizeProperties<BookingAttributes>, "vehicleId" | "from" | "to" | "userId" | "bookingType", "replaceVehicleId" | "amount" | "approved" | "finished" | "startMileage" | "endMileage" | "startFuel" | "endFuel" | "pickupDate" | "paid" | "returnDate">> & {
    replaceVehicle?: UseParameters<ReplaceVehicleAttributes, "vin" | "brand" | "model" | "plateNumber">;
};
export declare type BookingServerResponsePatch = BookingServerResponseGet;
export declare type BookingServerResponseDelete = BookingServerResponseGet;
