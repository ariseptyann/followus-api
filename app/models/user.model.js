module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        //nama field databasenya
        user_id: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        pwd: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        no_tlp: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
    // dengan sequelize juga dia otomatis bikin id, timestamp seperti create_at & update_at
    return User;
}