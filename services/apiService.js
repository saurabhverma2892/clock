"use strict";

module.exports = app => {
    let TimeZone = app.models.timeZone

    function addTimeZone(params){
        if(!params.name){
            params.name = params.timezone;
        }

        return new Promise((resolve,reject)=>{
            TimeZone.addTimeZone({'time_zone':params.timezone, 'name':params.name})
            .then((data)=>{
                return resolve(data);
            })
            .catch(err=>{
                return reject(err);
            })
        })
    }

    function getAllTimeZones(){
        return new Promise((resolve,reject)=>{
            TimeZone.getAllTimeZones().then(data=>{
                return resolve(data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    return {
        addTimeZone,
        getAllTimeZones
    }
}