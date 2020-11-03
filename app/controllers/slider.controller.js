const db = require("../models");
const Slider = db.slider;

// Untuk menentukan kondisi seperti where, like dll
const Op = db.Sequelize.Op;

// Create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.foto) {
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }
    // Create slider
    const slider = {
        foto: req.body.foto,
        status: req.body.status ? req.body.status : true
    }

    Slider.create(slider)
        .then((result) => {
            res.json({message: "Slider was successfully created.", data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occureed while creating the Slider"
            })
        });
};

// Retrieve all
exports.findAll = (req, res) => {
    let condition = {
        status: {
            [Op.like]: 1
        }
    };
    Slider.findAll({
            where: condition
        })
        .then((result) => {
            res.json({data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while find slider"
            });
        });
};

// Update with ID
exports.update = (req, res) => {
    const id = req.params.id;

    Slider.update(req.body, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Slider was updated successfully"
            });
        } else {
            res.send({
                message: "Cannot updated Slider with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Slider with id=" + id
        })
    });
};

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Slider.update(req.body, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Slider was delete successfully"
            });
        } else {
            res.send({
                message: "Cannot delete Slider with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error delete Slider with id=" + id
        })
    });
};
