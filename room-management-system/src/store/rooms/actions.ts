import { IAction, IReservation } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";
import axios from 'axios';

export const getRooms = () => {
    return (dispatch: any) => {
        return axios.get('http://localhost:8080/rooms').then(
            ({ data }) => dispatch({ type: ACTION_TYPES.GET_ROOMS, payload: data }),
            err => console.log(err)
        );
    };
};

export const addReservation = (reservation: IReservation) => {
    axios.post("http://localhost:8080/rooms/reservation", reservation)
        .then(({data}) => console.log(data));
}