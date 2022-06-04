import moment from 'moment';
import React from 'react';
import { IRoom } from '../../types/types';

interface IRoomItem {
    coord: string;
    room: IRoom;
    onClick: Function;
}

const RoomItem: React.FC<IRoomItem> = ({ coord, room, onClick }) => {
    const getReservations = () => {
        return onClick(room);
    }
    const isRoomBusyNow = () => {
        const isBusy = room.reservations.some(res => moment(Date.now()).diff(moment(res.from), 'minutes') >= 0);
        return isBusy;
    }
    return (
        <path
            d={coord}
            className={`room ${isRoomBusyNow() ? "room__busy" : "room__available"}`}
            onClick={getReservations}
        ></path>
    )
}

export default RoomItem
