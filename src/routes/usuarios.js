module.exports = function(app){
    // let getuser = app.config.sqli();
    let sqli = app.config.database();
    // console.log(app.config.database);
   
    // console.log(app);
    app.get('/', (req, res) => {
            //   res.send('Hello Wo./myapp/routes/index
            sqli.query('SELECT * FROM usuarios', (err, results) => {
                res.send(results);
        
            });
          });
   
   
};


// const sqli = require('../config/database.js');
// module.exports = function(app){

// app.get('/', (req, res) => {
//     //   res.send('Hello Wo./myapp/routes/index
//     sqli.query('SELECT * FROM usuarios', (err, results) => {
//         res.send(results)

//     });
//   });

// }

