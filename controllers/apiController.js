"use strict";

module.exports = app => {
    let apiService = app.services.apiService

    function addTimeZone(req, res, next){
        apiService.addTimeZone(req.body).then((data)=>{
            console.log(data);
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function getAllTimeZones(req,res,next){
        apiService.getAllTimeZones().then((data)=>{
            console.log(data);
            res.render("clock", {timeZones:data});
        }).catch(err=>{
            next(err);
        })
    }

    return {
        addTimeZone,
        getAllTimeZones
    }
}