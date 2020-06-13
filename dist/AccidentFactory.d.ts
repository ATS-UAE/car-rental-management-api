import { Authenticated } from "./Authenticated";
import { Accident } from "./Accident";
import { PartialKeys } from "./shared/typings";
export declare class AccidentFactory extends Authenticated {
    getOne: (id: number) => Promise<Accident>;
    getAll: () => Promise<Accident[]>;
    create: (accidentData: PartialKeys<import("./shared/typings").ReplaceAttributes<import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").AccidentAttributes, "message" | "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng" | "userId" | "vehicleId" | "bookingId">, "message" | "userId" | "vehicleId" | "bookingId", "accidentImageSrc" | "accidentVideoSrc" | "lat" | "lng">>, {
        accidentImageSrc?: string | File | null | undefined;
    }>, "userId">) => Promise<Accident>;
    destroy: (accidentId: number) => Promise<Accident>;
}
