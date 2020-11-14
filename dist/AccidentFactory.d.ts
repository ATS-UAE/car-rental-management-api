import { PartialKeys } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Accident } from "./Accident";
export declare class AccidentFactory extends Authenticated {
    getOne: (id: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>[], Accident[]>>;
    create: (accidentData: PartialKeys<import("car-rental-management-shared").ReplaceAttributes<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<Pick<import("car-rental-management-shared").AccidentAttributes, "message" | "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng" | "userId" | "vehicleId" | "bookingId">, "message" | "userId" | "vehicleId" | "bookingId", "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng">>, {
        accidentImageSrc?: string | File | null | undefined;
    }>, "userId">) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
    destroy: (accidentId: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").AccidentAttributes>, Accident>>;
}
