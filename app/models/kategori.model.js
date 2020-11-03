module.exports = (sequelize, Sequelize) => {
    const Kategori = sequelize.define("kategori", {
        //nama field databasenya
        judul: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
    // dengan sequelize juga dia otomatis bikin id, timestamp seperti create_at & update_at
    return Kategori;
}