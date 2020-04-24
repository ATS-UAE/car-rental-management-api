import { AccidentAttributes, DatePropsToUnix, ServerResponse, RemoveImmutableSequelizeProperties } from "..";
export declare type AccidentServerResponseGet = ServerResponse<DatePropsToUnix<AccidentAttributes>>;
export declare type AccidentServerResponseGetAll = ServerResponse<DatePropsToUnix<AccidentAttributes>[]>;
export declare type AccidentServerParamsPatch = DatePropsToUnix<Partial<RemoveImmutableSequelizeProperties<AccidentAttributes>>>;
export declare type AccidentServerResponsePatch = AccidentServerResponseGet;
export declare type AccidentServerResponseDelete = AccidentServerResponseGet;
