"use strict";
exports.__esModule = true;
var express = require('express');
var DB = require('./rooms.json');
var cors = require('cors');
var server = express();
server.use(cors());
server.get('/rooms', function (req, resp) {
    resp.send(DB);
});
server.listen(3001, function () {
});
