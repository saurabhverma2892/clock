"use strict";
let express = require("express");
let consign = require("consign");
let logger = require("winston");
let app = express();


let http = require('http').Server(app);
let io = require('socket.io')(http);

let appPort = process.env.CLOCK_APP_PORT || "8000";
consign()
    .include("./helpers")
    .then("./middlewares/basicSettings.js")
    .then("./config")
    .then("./db/connection.js")
    .then("./middlewares/staticResources.js")
    .then("./models/timeZone.js")
    .then("./services")
    .then("./controllers")
    .then("./routes")
    .then("./middlewares/mainRoutes.js")
    .then("./middlewares/errorHandler.js")
    .into(app);

if (process.env.NODE_ENV !== "test") {


    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('time_zone', function(timezone){
            socket.emit('recieved_time', calcTime(timezone));
        })
    });

    http.listen(appPort, () => {
        logger.info(`Server started on port ${appPort}`);
    });
}

function calcTime(offset) {
       var date = new Date();
       var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
       var newDate = new Date(utc + (3600000 * offset));
       return newDate.toLocaleString();
}

module.exports = app;