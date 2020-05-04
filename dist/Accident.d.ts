import { Authenticated } from "./Authenticated";
import { AccidentServerResponseGet, ExtractServerResponseData, ServerResponseMeta } from "./shared/typings";
export declare class Accident {
    private login;
    data: ExtractServerResponseData<AccidentServerResponseGet>;
    meta: ServerResponseMeta;
    constructor(login: Authenticated, data: ExtractServerResponseData<AccidentServerResponseGet>, meta: ServerResponseMeta);
    static getOne: (login: Authenticated, accidentId: number) => Promise<Accident>;
    static getAll: (login: Authenticated) => Promise<Accident[]>;
    static create: (login: Authenticated, accidentData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").AccidentAttributes, "message" | "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng" | "userId" | "vehicleId" | "bookingId">, "message" | "userId" | "vehicleId" | "bookingId", "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng">>) => Promise<Accident>;
    update: (updatedVehicleData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").AccidentAttributes, "message" | "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng" | "userId" | "vehicleId" | "bookingId">>>) => Promise<void>;
    destroy: () => Promise<void>;
}
