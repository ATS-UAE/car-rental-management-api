import { LocationServerParamsPost, LocationServerParamsPatch } from "car-rental-management-shared";
import { Authenticated } from "./Authenticated";
import { Location } from "./Location";
export declare class LocationFactory extends Authenticated {
    getOne: (id: number) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>, Location>>;
    getAll: () => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>[], Location[]>>;
    create: (locationData: LocationServerParamsPost) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>, Location>>;
    update: (id: number, updatedBookingData: LocationServerParamsPatch) => Promise<import("./ServerResponse").ServerResponse<import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>, Location>>;
    fromObject: (data: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").LocationAttributes>) => Location;
}
