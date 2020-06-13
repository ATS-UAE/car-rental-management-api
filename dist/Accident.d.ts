import { Authenticated } from "./Authenticated";
import { AccidentServerResponseGet, ExtractServerResponseData, ServerResponseMeta, AccidentServerParamsPost, AccidentServerParamsPatch, ReplaceAttributes } from "./shared/typings";
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
    static create: (login: Authenticated, accidentData: ReplaceAttributes<import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").AccidentAttributes, "message" | "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng" | "userId" | "vehicleId" | "bookingId">, "message" | "userId" | "vehicleId" | "bookingId", "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng">>, {
        accidentImageSrc?: string | File | null | undefined;
    }>) => Promise<Accident>;
    static destroy: (login: Authenticated, accidentId: number) => Promise<Accident>;
    update: (updatedVehicleData: ReplaceAttributes<import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").AccidentAttributes, "message" | "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng" | "userId" | "vehicleId" | "bookingId">>>, {
        accidentImageSrc?: string | File | null | undefined;
    }>) => Promise<void>;
    destroy: () => Promise<void>;
}
