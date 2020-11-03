const db        = require("../models");
const Produk    = db.produk;

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

    let pictures = '';
    if (req.files[0]) {
        pictures = req.files[0].path;
    }

    // Create post
    const produk = {
        judul: req.body.judul,
        deskripsi: req.body.deskripsi,
        berat: req.body.berat,
        kat_id: req.body.kat_id,
        harga_normal: req.body.harga_normal,
        diskon: req.body.diskon,
        harga_diskon: req.body.harga_diskon,
        stok: req.body.stok,
        foto: pictures,
        status: req.body.status ? req.body.status : true
    }

    Produk.create(produk)
        .then((result) => {
            res.json({message: "Produk was successfully created.", data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occureed while creating the Produk"
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

    Produk.findAll({
            where: condition
        })
        .then((result) => {
            res.json({data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while find Produk"
            });
        });
};

// Find a single
exports.findOne = (req, res) => {
    const id = req.params.id;

    // finByPk adalah metode yg ada di sequelize
    Produk.findByPk(id)
        .then((result) => {
            res.json({data: result});
        }).catch((err) => {
            res.status(500).send({
                message: "Error retrieving produk with id=" + id
            })
        });
};

// Update with ID
exports.update = (req, res) => {
    const id = req.params.id;

    Produk.update(req.body, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Produk was updated successfully"
            });
        } else {
            res.send({
                message: "Cannot updated Produk with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Produk with id=" + id
        })
    });
};

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Produk.update(req.body, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Produk was delete successfully"
            });
        } else {
            res.send({
                message: "Cannot delete Produk with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error delete Produk with id=" + id
        })
    });
};