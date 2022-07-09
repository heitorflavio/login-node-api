let express = require('express');
let consign = require('consign');
let app = express();

consign()
    .then('config/database.js')
    .include('routes')
    .into(app);

module.exports = app;