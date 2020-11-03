const db = require("../models");
const bcrypt = require("bcrypt");
const User = db.user;

const JsonWebToken = require("../lib/json_web_token.js");

// Untuk menentukan kondisi seperti where, like dll
const Op = db.Sequelize.Op;


// Data signin all
exports.findAll = (req, res) => {
    const user_id = req.body.user_id;
    const pwd = req.body.pwd;

    const condition = {
        user_id: user_id
    };
    User.findAll({
            where: condition
        })
        .then((result) => {
            if (bcrypt.compareSync(pwd, result[0].pwd)) {
                var token = JsonWebToken.encode({ id: result[0].id });

                res.json({  message: "Successfully signed in.",
                            data: result, token: token});
            }else{
                return res.json({ message: "User ID dan Password yang Anda masukkan tidak cocok dengan catatan kami. Silakan periksa dan coba lagi."});
            }
        }).catch((err) => {
            return res.json({ message: "User ID dan Password yang Anda masukkan tidak cocok dengan catatan kami. Silakan periksa dan coba lagi."});
        });
};
