module.exports = {
    HOST: "b6mv3wmauqhlcyrxz726-mysql.services.clever-cloud.com",
    USER: "u5qwai0kfu6jz9vg",
    PASSWORD: "0JSs2wXqbPNe601PgpTO",
    DB: "b6mv3wmauqhlcyrxz726",
    dialect: "mysql",
    pool: {
        max: 5, // maximum number of connection in pool
        min: 0, // minimum number of connection in pool
        acquire: 30000, // maximum time, in miliseconds, that pool will try to get connection
        idle: 10000 // maximum time, in miliseconds, that a connection can be idle before
    }
}
