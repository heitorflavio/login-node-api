let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let expressvalidator = require('express-validator');
let app = express();

app.use(bodyParser.json());
app.use(expressvalidator());

consign()
.include('routes')
    .then('config/database.js')
    .then('models')
    .then('controllers')
    .into(app);

module.exports = app;