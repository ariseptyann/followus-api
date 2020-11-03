module.exports = (sequelize, Sequelize) => {
    const Slider = sequelize.define("slider", {
        //nama field databasenya
        foto: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
    // dengan sequelize juga dia otomatis bikin id, timestamp seperti create_at & update_at
    return Slider;
}