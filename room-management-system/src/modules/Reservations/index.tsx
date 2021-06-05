import { Button } from '@material-ui/core';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { IRoom } from '../../types/types';
import AddDialog from './AddDialog';
import ReservationItem from './ReservationItem';

const Reservations = () => {
    interface IUrlParams {
        roomId: string
    }
    const { roomId }: IUrlParams = useParams();
    const room = useSelector((state: Array<IRoom>) => state.find(room => room.id === +roomId)!);
    const [update, setUpdate] = React.useState(false);
    const history = useHistory();
    const goToHome = () => {
        history.push('/');
    }
    return (
        <Container>
            <div className="d-flex justify-content-between">
                <Button variant="outlined" onClick={goToHome}>Go back to rooms</Button>
                <AddDialog
                    id={room.id}
                    reservations={room.reservations}
                    update={update}
                    setUpdate={setUpdate}
                />
            </div>
            <Table striped bordered hover className="mt-2">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Reserved by</th>
                        <th>Notes</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {room.reservations.map((res, idx) =>
                        <ReservationItem
                            idx={idx + 1}
                            reservation={res}
                            key={res.id} />
                    )}
                    {room.reservations.length < 1 &&
                        <tr><td colSpan={5} className="text-center">empty</td></tr>
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Reservations
