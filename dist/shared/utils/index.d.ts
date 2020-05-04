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
