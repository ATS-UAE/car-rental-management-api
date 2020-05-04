import { LocationAttributes, DatePropsToUnix, ServerResponse, RemoveImmutableSequelizeProperties, ClientAttributes, ExtractServerResponseData } from "../";
export declare type LocationServerResponseGet = ServerResponse<DatePropsToUnix<LocationAttributes> & {
    clients: ClientAttributes[];
}>;
export declare type LocationServerResponseGetAll = ServerResponse<ExtractServerResponseData<LocationServerResponseGet>[]>;
export declare type LocationServerParamsPatch = DatePropsToUnix<Partial<RemoveImmutableSequelizeProperties<LocationAttributes>>>;
export declare type LocationServerResponsePatch = LocationServerResponseGet;
export declare type LocationServerResponseDelete = LocationServerResponseGet;
