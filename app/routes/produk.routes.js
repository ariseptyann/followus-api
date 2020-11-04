module.exports = app => {
    const produk = require("../controllers/produk.controller.js");
    const JsonWebToken = require("../lib/json_web_token.js");
    const upload    = require('../lib/storage');

    let router = require("express").Router();

    // Create a new produk
    router.post("/", upload.single(), JsonWebToken.authenticateJWT, produk.create);

    // Retrieve all produk
    router.get("/", produk.findAll);

    // Retrieve single produk
    router.get("/:id", produk.findOne);

    // Update produk
    router.put("/:id", JsonWebToken.authenticateJWT, produk.update);

    // Delete kategori
    router.post("/:id", JsonWebToken.authenticateJWT, produk.delete);

    app.use("/api/produk", router);
}
