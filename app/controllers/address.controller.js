const db = require("../models");
const Address = db.address;

// Untuk menentukan kondisi seperti where, like dll
const Op = db.Sequelize.Op;

// Create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id_user) {
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }
    // Create address
    const address = {
        id_user: req.body.id_user,
        provinsi: req.body.provinsi,
        kabupaten: req.body.kabupaten,
        kecamatan: req.body.kecamatan,
        kelurahan: req.body.kelurahan,
        address: req.body.address,
        status: req.body.status ? req.body.status : true
    }

    Address.create(address)
        .then((result) => {
            res.json({message: "Address was successfully created.", data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occureed while creating the Address"
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
    Address.findAll({
            where: condition
        })
        .then((result) => {
            res.json({data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while find Address"
            });
        });
};

// Update with ID
exports.update = (req, res) => {
    const id = req.params.id;

    Address.update(req.body, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Address was updated successfully"
            });
        } else {
            res.send({
                message: "Cannot updated Address with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Address with id=" + id
        })
    });
};

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Address.update(req.body, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Address was delete successfully"
            });
        } else {
            res.send({
                message: "Cannot delete Address with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error delete Address with id=" + id
        })
    });
};
