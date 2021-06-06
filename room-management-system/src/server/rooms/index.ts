import express, { Request, Response } from 'express';
import Room from './schema/rooms';

export const RoomsRouter = express.Router();

RoomsRouter.get('/', async (req: Request, res: Response) => {
    const rooms = await Room.find();
    res.json(rooms);
    res.status(200);
});

RoomsRouter.post('/reservation', async (req: Request, res: Response) => {
    Room.insertMany(req.body);
    res.status(201).send(req.body);
})