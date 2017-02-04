"use strict";

module.exports = app => {

    let apiController = app.controllers.apiController;

    app.get("/", (req,res,next)=>{
        console.log("wokring in main routes");
        return apiController.getAllTimeZones(req,res,next);
    })

    app.use("/api", app.routes.api);

    app.post("/api/add-time-zone", (req,res,next)=>{
        res.send(new Date());
    })
    
};