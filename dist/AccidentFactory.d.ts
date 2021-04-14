import { AccidentServerResponseGet, PartialKeys } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Accident, AccidentServerParamsPostFormData } from "./Accident";
export declare class AccidentFactory extends Authenticated {
    getOne: (id: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>[], Accident[]>>;
    create: (accidentData: PartialKeys<AccidentServerParamsPostFormData, "userId">) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    destroy: (accidentId: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    fromObject: (data: AccidentServerResponseGet["data"]) => Accident;
}
