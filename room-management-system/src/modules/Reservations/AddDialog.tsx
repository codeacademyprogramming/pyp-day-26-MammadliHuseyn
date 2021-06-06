import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';
import { IReservation } from '../../types/types';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../store/rooms/actions';



interface IDialogProps {
    update: boolean;
    setUpdate: Function;
    id: string;
    reservations: Array<IReservation>
}
function AddDialog({ id, reservations, update, setUpdate }: IDialogProps) {
    const [open, setOpen] = React.useState(false);
    const [toDate, setToDate] = React.useState('');
    const [fromDate, setFromDate] = React.useState('');
    const [note, setNote] = React.useState('');
    const [reservedBy, setReservedBy] = React.useState('');
    const [isError, setIsError] = React.useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const reserveHandler = (e: any) => {
        e.preventDefault();
        if (isValidDate(fromDate, toDate)) {
            const newReservation: IReservation = {
                _id:"",
                roomId: id,
                reservedBy: reservedBy,
                from: dateTimeConverter(fromDate),
                to: dateTimeConverter(toDate),
                notes: note,
            }
            addReservation(newReservation);
            setOpen(false);
            setUpdate(!update);
            setIsError(false);
        }
        else {
            setIsError(true);
        }
    }
    const noteChangeHandler = (e: any) => {
        setNote(e.target.value);
    }
    const toDateChangeHandler = (e: any) => {
        setToDate(e.target.value);
    }
    const fromDateChangeHandler = (e: any) => {
        setFromDate(e.target.value);
    }
    const reservedByChangeHandler = (e: any) => {
        setReservedBy(e.target.value);
    }
    const dateTimeConverter = (date: string) => {
        return moment(date).format("MM.DD.yyyy HH:mm");
    }
    const isValidDate = (from: string, to: string) => {
        const isValid = reservations.some(res => (moment(res.to).diff(dateTimeConverter(to), 'minutes') >= 0) ||
            moment(res.from).diff(dateTimeConverter(from), 'minutes') >= 0);
        return !isValid;
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                New Reservation
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New reservation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Reserve your room
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="reserverBy"
                        type="text"
                        fullWidth
                        label="Reserved by"
                        value={reservedBy}
                        onChange={reservedByChangeHandler}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="from"
                        type="datetime-local"
                        fullWidth
                        value={fromDate}
                        onChange={fromDateChangeHandler}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="to"
                        type="datetime-local"
                        fullWidth
                        value={toDate}
                        onChange={toDateChangeHandler}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="note"
                        label="Note"
                        type="string"
                        fullWidth
                        value={note}
                        onChange={noteChangeHandler}
                    />
                    {isError &&
                        <span className="text-danger font-weight-bold">
                            Oops... The date you entered are already reserved!
                    </span>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={reserveHandler} color="primary">
                        Reserve
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddDialog;