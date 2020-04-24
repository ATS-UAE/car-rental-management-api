interface LoginOptions {
    username: string;
    password: string;
    baseUrl: string;
}
export declare class Api {
    private api;
    private constructor();
    static login: ({ username, password, baseUrl }: LoginOptions) => Promise<Api>;
}
export {};
