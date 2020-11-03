const db = require("../models");
const Kategori = db.kategori;

// Untuk menentukan kondisi seperti where, like dll
const Op = db.Sequelize.Op;

// Create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.judul) {
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }
    // Create kategori
    const kategori = {
        judul: req.body.judul,
        status: req.body.status ? req.body.status : true
    }

    Kategori.create(kategori)
        .then((result) => {
            res.json({message: "Kategori was successfully created.", data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occureed while creating the kategori"
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
    Kategori.findAll({
            where: condition
        })
        .then((result) => {
            res.json({data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while find kategori"
            });
        });
};

// Update with ID
exports.update = (req, res) => {
    const id = req.params.id;

    Kategori.update(req.body, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Kategori was updated successfully"
            });
        } else {
            res.send({
                message: "Cannot updated Kategori with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Kategori with id=" + id
        })
    });
};

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Kategori.update(req.body, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Kategori was delete successfully"
            });
        } else {
            res.send({
                message: "Cannot delete Kategori with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error delete Kategori with id=" + id
        })
    });
};
