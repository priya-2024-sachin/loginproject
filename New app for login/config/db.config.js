module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "test.db",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
};