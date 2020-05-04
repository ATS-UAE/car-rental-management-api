import { Authenticated } from "./Authenticated";
import { Booking } from "./Booking";
import { BookingServerParamsPost, PartialKeys } from "./shared/typings";
export declare class BookingFactory extends Authenticated {
    getOne: (id: number) => Promise<Booking>;
    getAll: () => Promise<Booking[]>;
    create: (bookingData: PartialKeys<BookingServerParamsPost, "userId">) => Promise<Booking>;
}
