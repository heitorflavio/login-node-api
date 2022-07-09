
const express = require('express');
const mysql = require('mysql');
const port = 9009;
const app = express();

const sqli = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
});

app.get('/', (req, res) => {
    //   res.send('Hello Wo./myapp/routes/index

    sqli.query('SELECT * FROM usuarios', (err, results) => {
        res.send(results)

    });
  });

app.listen(7010, () => {
  console.log(`Example app listening on port ${port}`)
});
