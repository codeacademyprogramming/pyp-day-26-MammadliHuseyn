import mongoose, { Schema } from 'mongoose';

const reservationSchema = new Schema({
    _id:{
        type:String,
        required:true
    },
    roomId: {
        type: Number,
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
    id: {
        type: String,
        required: true
    },
    reservations: [reservationSchema]

})

export default mongoose.model('Room', roomSchema)