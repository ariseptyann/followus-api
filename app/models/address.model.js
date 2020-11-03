module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("address", {
        //nama field databasenya
        id_user: {
            type: Sequelize.INTEGER
        },
        provinsi: {
            type: Sequelize.STRING
        },
        kabupaten: {
            type: Sequelize.STRING
        },
        kecamatan: {
            type: Sequelize.STRING
        },
        kelurahan: {
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
    return Address;
}