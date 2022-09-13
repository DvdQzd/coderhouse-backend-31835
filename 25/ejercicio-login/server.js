// Basado en un proyecto express que almacene sesiones de usuario, realizar un sistema que:
// 1) Tenga una vista de registro de usuario (nombre, password y dirección) que almacene dicha información en un array en memoria.
// 2) Posea un formulario de login (nombre y password) para permitir a los usuarios registrados a acceder a su información.
// 3) Si accede un usuario no registrado o las credenciales son incorrectas, el servidor enviará un error (puede ser a través de un objeto plano o de una plantilla).
// 4) Si se quiere registrar un usuario que ya está registrado, el servidor enviará un error (puede ser a través de un objeto plano o de una plantilla).

const express = require('express');
const app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const usuarios = [];

// vista estatica
app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    store: new FileStore({ path: './sessions', ttl: 300, retries: 1 }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    console.log({usuarios});
    if (usuarios.find(u => u.name === name && u.password === password)) {
        req.session.name = name;
        res.send('Bienvenido ' + name);
    } else {
        res.send({ error: 'Usuario o contraseña incorrectos' });
    }
});

app.post('/signup', (req, res) => {
   // 1) Tenga una vista de registro de usuario (nombre, password y dirección) que almacene dicha información en un array en memoria.
    if (req.body.name && req.body.password && req.body.address) {
        if (usuarios.find(u => u.name === req.body.name)) {
            res.send({ error: 'El usuario ya existe' });
        } else {
            usuarios.push({ name: req.body.name, password: req.body.password, direccion: req.body.address });
            console.log({usuarios});
            res.send({ message: 'Usuario registrado' });
        }
    } else {
        res.send({ error: 'No se ha ingresado nombre o password' });
    }
});

// 6) Implementar el cierre de sesión en una ruta '/logout' que puede llamar desde la barra de dirección del browser, o desde un botón en la misma plantilla de datos.
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Sesión cerrada');
});

// 7) Esa ruta '/datos' sólo estará disponible en caso de estar en una sesión de usuario activa. caso contrario, se redireccionará a la vista de login.
app.get('/datos', (req, res) => {
    if (req.session.name) {
        // redireccionar a vista de datos
        res.redirect('static/datos.html');
    } else {
        res.redirect('/login');
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
