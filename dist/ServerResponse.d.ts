import { ServerResponseMeta } from "car-rental-management-shared";
declare type DataGetter<R> = () => R;
export declare class ServerResponse<T, R> {
    rawData: T;
    getData: DataGetter<R>;
    meta: ServerResponseMeta;
    constructor(rawData: T, getData: DataGetter<R>, meta: ServerResponseMeta);
}
export {};
