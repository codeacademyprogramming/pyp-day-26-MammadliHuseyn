import express, { Request, Response } from 'express';
import Room from './schema/rooms';

export const RoomsRouter = express.Router();

RoomsRouter.get('/', async (req: Request, res: Response) => {
    const rooms = await Room.find();
    res.json(rooms);
    res.status(200);
});


RoomsRouter.post('/reservation', async (req: Request, res: Response) => {
    const { roomId } = req.body;
    const room = await Room.findById(roomId);
    await Room.findByIdAndUpdate(roomId,{
        "reservations":[...room.reservations,req.body]
    });
    res.status(201).send();
})