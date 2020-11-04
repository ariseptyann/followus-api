module.exports = app => {
    const kategori = require("../controllers/kategori.controller.js");
    const JsonWebToken = require("../lib/json_web_token.js");

    let router = require("express").Router();

    // Create a new kategori
    router.post("/", JsonWebToken.authenticateJWT, kategori.create);

    // Retrieve all kategori
    router.get("/", kategori.findAll);

    // Update kategori
    router.put("/:id", JsonWebToken.authenticateJWT, kategori.update);

    // Delete kategori
    router.post("/:id", JsonWebToken.authenticateJWT, kategori.delete);

    app.use("/api/kategori", JsonWebToken.authenticateJWT, router);
}