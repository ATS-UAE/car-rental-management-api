import { AccidentServerResponseGet, ExtractServerResponseData, AccidentServerParamsPost, AccidentServerParamsPatch, ReplaceAttributes } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { ServerResponse } from "./ServerResponse";
export declare type AccidentServerParamsPostFormData = ReplaceAttributes<AccidentServerParamsPost, {
    accidentImageSrc?: File | string | null;
}>;
export declare type AccidentServerParamsPatchFormData = ReplaceAttributes<AccidentServerParamsPatch, {
    accidentImageSrc?: File | string | null;
}>;
export declare class Accident {
    private login;
    data: ExtractServerResponseData<AccidentServerResponseGet>;
    constructor(login: Authenticated, data: ExtractServerResponseData<AccidentServerResponseGet>);
    static getOne: (login: Authenticated, accidentId: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    static getAll: (login: Authenticated) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>[], Accident[]>>;
    static create: (login: Authenticated, accidentData: AccidentServerParamsPostFormData) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    static destroy: (login: Authenticated, accidentId: number) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    update: (updatedVehicleData: AccidentServerParamsPatchFormData) => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    destroy: () => Promise<ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    toObject: () => import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>;
}
