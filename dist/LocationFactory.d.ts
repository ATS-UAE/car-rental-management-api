import { Authenticated } from "./Authenticated";
import { Location } from "./Location";
export declare class LocationFactory extends Authenticated {
    getOne: (id: number) => Promise<Location>;
    getAll: () => Promise<Location[]>;
    create: (locationData: import("./shared/typings").DatePropsToUnix<import("./shared/typings").UseParameters<Pick<import("./shared/typings").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">, "address" | "lat" | "lng" | "name", "locationImageSrc">>) => Promise<Location>;
    update: (id: number, updatedBookingData: import("./shared/typings").DatePropsToUnix<Partial<Pick<import("./shared/typings").LocationAttributes, "address" | "lat" | "lng" | "name" | "locationImageSrc">>>) => Promise<Location>;
}
