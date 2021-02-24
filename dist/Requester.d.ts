export interface RequesterConfig {
    headers: Record<string, string>;
}
export interface RequesterResponse<Data> {
    data: Data;
}
export declare class Requester {
    private baseUrl;
    private api;
    constructor(baseUrl: string);
    get: <ResponseData>(path: string, config?: RequesterConfig | undefined) => Promise<RequesterResponse<ResponseData>>;
    patch: <ResponseData>(path: string, body: unknown, config?: RequesterConfig | undefined) => Promise<RequesterResponse<ResponseData>>;
    post: <ResponseData>(path: string, body: unknown, config?: RequesterConfig | undefined) => Promise<RequesterResponse<ResponseData>>;
    put: <ResponseData>(path: string, body: unknown, config?: RequesterConfig | undefined) => Promise<RequesterResponse<ResponseData>>;
    delete: <ResponseData>(path: string, config?: RequesterConfig | undefined) => Promise<RequesterResponse<ResponseData>>;
    private buildUrl;
}
