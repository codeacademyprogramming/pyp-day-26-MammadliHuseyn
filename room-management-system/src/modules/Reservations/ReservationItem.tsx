import React from 'react';
import { IReservation } from '../../types/types';

interface IReservationItemProps {
    idx: number;
    reservation: IReservation;
}

const ReservationItem: React.FC<IReservationItemProps> = ({ idx, reservation }) => {
    return (
        <tr>
            <td>{idx}</td>
            <td>{reservation.reservedBy}</td>
            <td>{reservation.notes}</td>
            <td>{reservation.from}</td>
            <td>{reservation.to}</td>
        </tr>
    )
}

export default ReservationItem
