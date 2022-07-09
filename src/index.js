let app = require('./config/config.js');

let port = 9007;
// const usuarios = require('./routes/usuarios.js')(app);


app.listen(port, () => {
    console.log('Server running on port ');
  });
  