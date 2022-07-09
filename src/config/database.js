let mysql = require('mysql');

let sqli = function(){
       return  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'node'
     });
    }

    module.exports = function(){
        return sqli;
    }
