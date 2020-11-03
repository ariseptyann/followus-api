module.exports = app => {
    const address = require("../controllers/address.controller.js");
    const JsonWebToken = require("../lib/json_web_token.js");

    let router = require("express").Router();

    // Create a new address
    router.post("/", JsonWebToken.authenticateJWT, address.create);

    // Retrieve all address
    router.get("/", JsonWebToken.authenticateJWT, address.findAll);

    // Update address
    router.put("/:id", JsonWebToken.authenticateJWT, address.update);

    // Delete address
    router.post("/:id", JsonWebToken.authenticateJWT, address.delete);

    app.use("/api/address", JsonWebToken.authenticateJWT, router);
}