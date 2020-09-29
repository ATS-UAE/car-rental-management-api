import { AccidentServerResponseGet, ExtractServerResponseData, ServerResponseMeta, AccidentServerParamsPost, AccidentServerParamsPatch, ReplaceAttributes } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
export declare type AccidentServerParamsPostFormData = ReplaceAttributes<AccidentServerParamsPost, {
    accidentImageSrc?: File | string | null;
}>;
export declare type AccidentServerParamsPatchFormData = ReplaceAttributes<AccidentServerParamsPatch, {
    accidentImageSrc?: File | string | null;
}>;
export declare class Accident {
    private login;
    data: ExtractServerResponseData<AccidentServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<AccidentServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, accidentId: number) => Promise<Accident>;
    static getAll: (login: Authenticated) => Promise<Accident[]>;
    static create: (login: Authenticated, accidentData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<Pick<import("car-rental-management-shared").AccidentAttributes, "message" | "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng" | "userId" | "vehicleId" | "bookingId">, "message" | "userId" | "vehicleId" | "bookingId", "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng">>, {
        accidentImageSrc?: string | File | null | undefined;
    }>) => Promise<Accident>;
    static destroy: (login: Authenticated, accidentId: number) => Promise<Accident>;
    update: (updatedVehicleData: ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").AccidentAttributes, "message" | "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng" | "userId" | "vehicleId" | "bookingId">>>, {
        accidentImageSrc?: string | File | null | undefined;
    }>) => Promise<void>;
    destroy: () => Promise<void>;
}
