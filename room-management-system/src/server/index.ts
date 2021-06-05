import express, { Request, Response } from 'express';
import { ROUTES } from './routes';
const app = express();
const port = 8080;

ROUTES.forEach(({ path, router }) => {
    app.use(path, router);
})

// start the Express server
app.listen(port, () => { console.log(`server started on :${port}`) });