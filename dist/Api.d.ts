import { UserSignUpOptions, ReplaceAttributes, PushUnsubscribeParamsPost, PushSubscriptionParamsPost } from "car-rental-management-shared";
import { Authenticated, ApiOptions } from "./Authenticated";
import { VehicleFactory } from "./VehicleFactory";
import { BookingFactory } from "./BookingFactory";
import { AccidentFactory } from "./AccidentFactory";
import { UserFactory } from "./UserFactory";
import { LocationFactory } from "./LocationFactory";
import { ClientFactory } from "./ClientFactory";
import { CategoryFactory } from "./CategoryFactory";
import { WialonUnitFactory } from "./WialonUnitFactory";
import { VehicleCategoryFactory } from "./VehicleCategoryFactory";
import { InviteFactory } from "./InviteFactory";
import { PushSubscriptionFactory } from "./PushSubscriptionFactory";
export interface LoginOptions extends ApiOptions {
    username: string;
    password: string;
    remember?: boolean;
}
export declare type UserSignUpOptionsFormData = ReplaceAttributes<UserSignUpOptions, {
    userImageSrc?: File | null | string;
}>;
export declare class Api extends Authenticated {
    private constructor();
    static login: ({ username, password, baseUrl, remember }: LoginOptions) => Promise<Api>;
    static signUp: (newUser: UserSignUpOptionsFormData, { baseUrl }: ApiOptions) => Promise<void>;
    logout: () => Promise<void>;
    unsubscribePush: (data: PushUnsubscribeParamsPost) => Promise<void>;
    subscribePush: (data: PushSubscriptionParamsPost) => Promise<void>;
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
    location: LocationFactory;
    client: ClientFactory;
    category: CategoryFactory;
    wialonUnit: WialonUnitFactory;
    vehicleCategory: VehicleCategoryFactory;
    invite: InviteFactory;
    pushSubscription: PushSubscriptionFactory;
}
