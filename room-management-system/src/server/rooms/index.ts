import express, { Request, Response } from 'express';
import { Rooms } from './data';

export const RoomsRouter = express.Router();

RoomsRouter.get('/', (req: Request, res: Response) => {
    res.json(Rooms);
    res.status(200);
})