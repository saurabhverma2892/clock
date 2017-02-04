"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var TimeZone = sequelize.define("TimeZone", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        time_zone: Sequelize.STRING,
        name: Sequelize.STRING
        },
        {
            tableName: "time_zones",
            timestamps: false
        }
    );


    function getAllTimeZones(){
        return TimeZone.findAll({
            raw: true
        })
    }

    function addTimeZone(object){        
        return new Promise((resolve,reject)=>{
            TimeZone.findOne({ where: {time_zone: object.time_zone} }).then((zone) => {
              if(zone){
                return reject("Time zone already exists as " + zone.name );
              }
              else{
                var newTimeZone = TimeZone.build(object);
                newTimeZone.save().then(data=>{
                    return resolve(data);
                });
              }
            }).catch(err=>{
                console.log("error cominginginignging");
                return reject(err) 
            })
        })   
    }


    return {
        getAllTimeZones,
        addTimeZone
    };
};
