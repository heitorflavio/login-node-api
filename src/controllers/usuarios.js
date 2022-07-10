module.exports.getusuarios = function(app,req ,res){
    let sqli = app.config.database();
    let modelusuarios = new app.models.usuarios(sqli);

    modelusuarios.getusuarios(function (err, results) {
      res.send(results);
    });
    
}

module.exports.createusuarios = function(app,req ,res){
    let novo_usuario = req.body;
    let sqli = app.config.database();
    let modelusuarios = new app.models.usuarios(sqli);

    req.assert("nome", "nome não pode ser vazio").notEmpty();
    req.assert("email", "email não pode ser vazio").notEmpty();
    req.assert("senha", "senha não pode ser vazio").notEmpty();
    let erros = req.validationErrors();
    
    if (erros) {
      res.send(erros);
      return;
    }

    modelusuarios.createusuarios(novo_usuario, function (err, results) {
      res.send(novo_usuario);
    });
}