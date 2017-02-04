"use strict";

let router = require("express").Router();

module.exports = app => {
    let apiController = app.controllers.apiController;

    router.route("/add-time-zone").post((req, res, next) => {
        return apiController.addTimeZone(req, res, next);
    });
    
    return router;
};