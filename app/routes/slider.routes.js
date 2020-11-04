module.exports = app => {
    const slider = require("../controllers/slider.controller.js");
    const JsonWebToken = require("../lib/json_web_token.js");

    let router = require("express").Router();

    // Create a new slider
    router.post("/", JsonWebToken.authenticateJWT, slider.create);

    // Retrieve all slider
    router.get("/", slider.findAll);

    // Update slider
    router.put("/:id", JsonWebToken.authenticateJWT, slider.update);

    // Delete slider
    router.post("/:id", JsonWebToken.authenticateJWT, slider.delete);

    app.use("/api/slider", router);
}