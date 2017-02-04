module.exports = {
mysql: {
        username: process.env.CLOCK_DB_USERNAME,
        password: process.env.CLOCK_DB_PASSWORD,
        database: process.env.CLOCK_DB_NAME,
        options:{
            host: process.env.CLOCK_DB_HOST,
            timezone: '+05:30'
        } 
    }
}