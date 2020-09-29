import { ServerResponse } from "car-rental-management-shared";
export declare const createServerResponse: <T>(code: number, errors: (string | {
    key: string;
    value: string;
})[], success: boolean, message: string, data: T) => ServerResponse<T>;
