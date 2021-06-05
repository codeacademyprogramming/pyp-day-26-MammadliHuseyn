import { ACTION_TYPES } from "../store/rooms/actionTypes";

export interface IReservation {
    id: number;
    roomId: number;
    reservedBy: string;
    from: string;
    to: string;
    notes: string;
}

export interface IRoom {
    id: number;
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