const jwt   = require("jsonwebtoken");
const yaml  = require("js-yaml");
const fs    = require("fs");

try {
    var secret = yaml.safeLoad(fs.readFileSync('config/secrets.yml', 'utf8'));
    var HMAC_SECRET = secret.development.secret_key_base;
} catch (e) {
    console.log(e);
}

var JsonWebToken = {
    encode: function(id) {
        return jwt.sign({data: id}, HMAC_SECRET, { expiresIn: '24h' });
    },
    decode: function(token) {
        var result = {};
        // verify a token symmetric
        jwt.verify(token, HMAC_SECRET, function(err, body) {
            if (err) {
                result.err = err;
            } else {
                result.body = body;
            }
        });

        return result;
    },
    authenticateJWT: function(req, res, next){
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(' ')[1];
    
            jwt.verify(token, HMAC_SECRET, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
    
                req.user = user;
                next();
            });
        } else {
            res.sendStatus(401);
        }
    }
}

module.exports = JsonWebToken;