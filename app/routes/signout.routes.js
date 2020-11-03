module.exports = app => {
    const signout = require("../controllers/signout.controller.js");

    let router = require("express").Router();

    // Create a new kategori
    router.delete("/", signout.delete);

    app.use("/api/signout", router);
}