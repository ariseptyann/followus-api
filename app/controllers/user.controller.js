const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = db.user;

// Untuk menentukan kondisi seperti where, like dll
const Op = db.Sequelize.Op;

// Create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.user_id) {
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }
    // Create user
    const user = {
        user_id: req.body.user_id,
        username: req.body.username,
        pwd: bcrypt.hashSync(req.body.pwd, saltRounds),
        email: req.body.email,
        no_tlp: req.body.no_tlp,
        address: req.body.address,
        status: req.body.status ? req.body.status : true
    }

    User.create(user)
        .then((result) => {
            res.json({message: "User was successfully created.", data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occureed while creating the user"
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
    User.findAll({
            where: condition
        })
        .then((result) => {
            res.json({data: result});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while find user"
            });
        });
};

// Update with ID
exports.update = (req, res) => {
    const id = req.params.id;

    const user = {
        user_id: req.body.user_id,
        username: req.body.username,
        pwd: bcrypt.hashSync(req.body.pwd, saltRounds),
        email: req.body.email,
        no_tlp: req.body.no_tlp,
        address: req.body.address
    }

    User.update(user, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "User was updated successfully"
            });
        } else {
            res.send({
                message: "Cannot updated User with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating User with id=" + id
        })
    });
};

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: {
            id: id
        }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "User was delete successfully"
            });
        } else {
            res.send({
                message: "Cannot delete User with id=${id}"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error delete User with id=" + id
        })
    });
};
