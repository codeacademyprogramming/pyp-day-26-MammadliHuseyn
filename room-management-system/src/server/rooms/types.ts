export interface IReservation {
    _id: string;
    roomId: string;
    reservedBy: string;
    from: string;
    to: string;
    notes: string;
}

export interface IRoom {
    _id: string;
    reservations: Array<IReservation>;
}