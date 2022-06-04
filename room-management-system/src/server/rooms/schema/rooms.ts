import mongoose, { Schema } from 'mongoose';

const reservationSchema = new Schema({
    roomId: {
        type: String,
        required: true
    },
    reservedBy: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
})

const roomSchema = new Schema({
    reservations: [reservationSchema]

})

export default mongoose.model('Room', roomSchema)