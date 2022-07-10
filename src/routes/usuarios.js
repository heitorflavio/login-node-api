module.exports = function (app) {
  app.get("/usuarios", (req, res) => {
    app.controllers.usuarios.getusuarios(app, req, res);
  }); 

  app.post("/usuarios/cadastro", (req, res) => {
    app.controllers.usuarios.createusuarios(app, req, res);
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
