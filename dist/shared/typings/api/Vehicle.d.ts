import { VehicleAttributes, CategoryAttributes, DatePropsToUnix, ServerResponse, RemoveImmutableSequelizeProperties, ExtractServerResponseData } from "../";
export declare type VehicleServerResponseGet = ServerResponse<DatePropsToUnix<VehicleAttributes & {
    categories: Pick<CategoryAttributes, "name" | "id">[];
}>>;
export declare type VehicleServerResponseGetAll = ServerResponse<DatePropsToUnix<ExtractServerResponseData<VehicleServerResponseGet>>[]>;
export declare type VehicleServerParamsPatch = DatePropsToUnix<Partial<RemoveImmutableSequelizeProperties<VehicleAttributes>>>;
export declare type VehicleServerResponsePatch = VehicleServerResponseGet;
export declare type VehicleServerResponseDelete = VehicleServerResponseGet;
