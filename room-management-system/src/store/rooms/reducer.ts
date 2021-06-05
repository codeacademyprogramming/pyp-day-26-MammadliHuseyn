import { IAction } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ROOMS:
            return action.payload;
        case ACTION_TYPES.ADD_RESERVATION_TO_ROOM:
            return state.map(room => {
                if (room.id === action.payload.roomId) {
                    room.reservations.push(action.payload)
                }
                return room;
            }
            )
        default:
            return state;
    }
}