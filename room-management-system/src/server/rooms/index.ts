import express, { Request, Response } from 'express';
import { rooms } from './data';
import Room from './schema/rooms';

export const RoomsRouter = express.Router();

RoomsRouter.get('/', async(req: Request, res: Response) => {
    const rooms = await Room.find();
    res.json(rooms);
    res.status(200);
})