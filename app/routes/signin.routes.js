module.exports = app => {
    const signin = require("../controllers/signin.controller.js");

    let router = require("express").Router();

    // Create a new kategori
    router.post("/", signin.findAll);

    app.use("/api/signin", router);
}