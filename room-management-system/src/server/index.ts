import express from 'express';
import { ROUTES } from './routes';
import mongoose, { Mongoose } from 'mongoose';
import cors from 'cors';
const app = express();
app.use(cors());
const port = 8080;
const uri =
    "mongodb+srv://huseynmle:testdb@cluster0.bzi9q.mongodb.net/RoomManagamentDB?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (err) => { console.log(err) });
db.once('open', () => { console.log("conntected to db") });

ROUTES.forEach(({ path, router }) => {
    app.use(path, router);
});

app.listen(port, () => { console.log(`server started on :${port}`) });