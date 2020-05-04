import { Authenticated, ApiOptions } from "./Authenticated";
import { VehicleFactory } from "./VehicleFactory";
import { BookingFactory } from "./BookingFactory";
import { AccidentFactory } from "./AccidentFactory";
import { UserFactory } from "./UserFactory";
export interface LoginOptions extends ApiOptions {
    username: string;
    password: string;
}
export declare class Api extends Authenticated {
    private constructor();
    static login: ({ username, password, baseUrl }: LoginOptions) => Promise<Api>;
    logout: () => Promise<void>;
    /** Check if the cookie stored by the browser is still valid. */
    static checkCookie: ({ baseUrl }: {
        baseUrl: string;
    }) => Promise<Api>;
    /** Check current axios instance has a valid cookie. */
    validate: () => Promise<void>;
    vehicle: VehicleFactory;
    booking: BookingFactory;
    accident: AccidentFactory;
    user: UserFactory;
}
