import { BookingStatus } from "../typings";
export * from "./RoleUtils";
export declare const getBookingStatus: (booking: {
    from: number;
    to: number;
    approved: boolean | null;
}) => BookingStatus;
export declare const hasActiveBooking: (bookings: {
    from: number;
    to: number;
    approved: boolean | null;
    id: number;
}[], bookingId?: number | undefined) => boolean;
export declare const rangeOverlap: (x1: number, x2: number, y1: number, y2: number) => boolean;
export declare const toTitleWords: (word: string, delimiter?: string) => string;
