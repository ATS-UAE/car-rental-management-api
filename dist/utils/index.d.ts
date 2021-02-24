import type { RequesterConfig } from "../Requester";
export declare const constructFormDataPayload: (payload: {
    [key: string]: unknown;
}) => [FormData, RequesterConfig];
