import { VehicleServerResponseGet, ServerResponseMeta } from "../../../../shared/typings";
export declare const getOne: (vehicleData?: Partial<import("../../../../shared/typings").DatePropsToUnix<import("../../../../shared/typings").VehicleAttributes & {
    categories: Pick<import("../../../../shared/typings").CategoryAttributes, "id" | "name">[];
}>>, meta?: Partial<ServerResponseMeta>) => VehicleServerResponseGet;
