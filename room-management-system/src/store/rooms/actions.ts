import { IAction, IReservation } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";
import axios from 'axios';

export const getRooms = () => {
    return (dispatch: any) => {
        return axios.get('http://localhost:3001/rooms').then(
            ({ data }) => dispatch({ type: ACTION_TYPES.GET_ROOMS, payload: data }),
            err => console.log(err)
        );
    };
};

export const addReservation = (reservation: IReservation): IAction => {
    return {
        type: ACTION_TYPES.ADD_RESERVATION_TO_ROOM,
        payload: reservation
    }
}