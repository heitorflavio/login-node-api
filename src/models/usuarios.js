// const app = require("../config/config");

function Usuarios(sqli) {
  this._sqli = sqli;
}

Usuarios.prototype.getusuarios = function (callback) {
  this._sqli.query("SELECT * FROM usuarios", callback);
};

Usuarios.prototype.createusuarios = function (novo_usuario, callback) {
  this._sqli.query("INSERT INTO usuarios SET ?", novo_usuario, callback);
};

module.exports = function () {
  // this.getusuarios = function (sqli, callback) {
  //   sqli.query("SELECT * FROM usuarios", callback);
  // };

  // this.createusuarios = function (novo_usuario,sqli, callback) {
  //   sqli.query("INSERT INTO usuarios SET ?", novo_usuario, callback);
  // };

  // return this;
  return Usuarios;
};
// let sqli = app.sqli
// console.log(app);
// sqli.query('SELECT * FROM usuarios', (err, results) => {
//     res.send(results);

// });
