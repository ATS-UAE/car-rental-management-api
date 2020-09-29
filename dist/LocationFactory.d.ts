import { Authenticated } from "./Authenticated";
import { Location } from "./Location";
export declare class LocationFactory extends Authenticated {
    getOne: (id: number) => Promise<Location>;
    getAll: () => Promise<Location[]>;
    create: (locationData: import("car-rental-management-shared").DatePropsToUnix<import("car-rental-management-shared").UseParameters<Pick<import("car-rental-management-shared").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">, "address" | "lat" | "lng" | "name", "locationImageSrc">>) => Promise<Location>;
    update: (id: number, updatedBookingData: import("car-rental-management-shared").DatePropsToUnix<Partial<Pick<import("car-rental-management-shared").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">>>) => Promise<Location>;
}
