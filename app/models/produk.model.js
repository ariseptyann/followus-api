module.exports = (sequelize, Sequelize) => {
    const Produk = sequelize.define("produk", {
        //nama field databasenya
        judul: {
            type: Sequelize.STRING
        },
        deskripsi: {
            type: Sequelize.STRING
        },
        berat: {
            type: Sequelize.DECIMAL
        },
        kat_id: {
            type: Sequelize.INTEGER
        },
        harga_normal: {
            type: Sequelize.DECIMAL
        },
        diskon: {
            type: Sequelize.DECIMAL
        },
        harga_diskon: {
            type: Sequelize.DECIMAL
        },
        stok: {
            type: Sequelize.INTEGER
        },
        foto: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
    // dengan sequelize juga dia otomatis bikin id, timestamp seperti create_at & update_at
    return Produk;
}