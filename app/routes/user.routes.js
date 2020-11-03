module.exports = app => {
    const user = require("../controllers/user.controller.js");
    const JsonWebToken = require("../lib/json_web_token.js");

    let router = require("express").Router();

    // Create a new user
    router.post("/", JsonWebToken.authenticateJWT, user.create);

    // Retrieve all user
    router.get("/", JsonWebToken.authenticateJWT, user.findAll);

    // Update user
    router.put("/:id", JsonWebToken.authenticateJWT, user.update);

    // Delete user
    router.post("/:id", JsonWebToken.authenticateJWT, user.delete);

    app.use("/api/user", router);
}