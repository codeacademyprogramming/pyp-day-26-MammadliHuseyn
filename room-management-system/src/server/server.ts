export { };
const express = require('express');
const DB = require('./rooms.json');
const cors = require('cors');

const server = express();
server.use(cors());

server.get('/rooms', (req: any, resp: any) => {
    resp.send(DB);
})

server.listen(3001, () => {

})