export interface IReservation {
    _id: string;
    roomId: string;
    reservedBy: string;
    from: string;
    to: string;
    notes: string;
}

export interface IRoom {
    id: number;
    reservations: Array<IReservation>;
}