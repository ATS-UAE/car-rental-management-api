import { AxiosRequestConfig } from "axios";
export declare const constructFormDataPayload: (payload: {
    [key: string]: unknown;
}) => [FormData, AxiosRequestConfig];
