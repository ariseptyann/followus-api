module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "followus",
    dialect: "mysql",
    pool: {
        max: 5, // maximum number of connection in pool
        min: 0, // minimum number of connection in pool
        acquire: 30000, // maximum time, in miliseconds, that pool will try to get connection
        idle: 10000 // maximum time, in miliseconds, that a connection can be idle before
    }
}