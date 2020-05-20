import { CategoryAttributes, DatePropsToUnix, ServerResponse, RemoveImmutableSequelizeProperties } from "../";
import { UseParameters } from "../utils";
export declare type CategoryServerResponseGet = ServerResponse<DatePropsToUnix<CategoryAttributes>>;
export declare type CategoryServerResponseGetAll = ServerResponse<DatePropsToUnix<CategoryAttributes>[]>;
export declare type CategoryServerParamsPatch = DatePropsToUnix<Partial<RemoveImmutableSequelizeProperties<CategoryAttributes>>>;
export declare type CategoryServerResponsePost = CategoryServerResponseGet;
export declare type CategoryServerParamsPost = UseParameters<CategoryAttributes, "name" | "clientId">;
export declare type CategoryServerResponsePatch = CategoryServerResponseGet;
export declare type CategoryServerResponseDelete = CategoryServerResponseGet;
