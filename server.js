const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Models
const db = require("./app/models");

const app = express();

let whiteList = [
    //url client yg akan menggunakan api kita
    'http://localhost:8081',
];
let corsOption = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOption));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencode
app.use(bodyParser.urlencoded({
    extended: true
}));

// Sync database
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to REST API"
    })
})

// Routes
require("./app/routes/kategori.routes")(app);
require("./app/routes/produk.routes")(app);
require("./app/routes/slider.routes")(app);
require("./app/routes/address.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/signin.routes")(app);
require("./app/routes/signout.routes")(app);

// set PORT, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`)
})