"use strict";
let Sequelize = require("sequelize");

module.exports = app => {
    
    let config = app.config.envVariables;

    var sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, config.mysql.options);

    return sequelize;
};