import { ACTION_TYPES } from "../store/rooms/actionTypes";

export interface IReservation {
    _id?: string;
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

export interface IActionAdd {
    type: ACTION_TYPES.ADD_RESERVATION_TO_ROOM;
    payload: IReservation;
}

export interface IActionGet {
    type: ACTION_TYPES.GET_ROOMS;
    payload: Array<IRoom>;
}

export type IAction = IActionAdd | IActionGet;