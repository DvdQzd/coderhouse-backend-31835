//Librerias
const express = require('express');
const session = require('express-session');

//Constantes
const app = express();

//Definicion de puerto
app.set('PORT', process.env.PORT || 8080);

//Session Setup
app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));

app.listen(app.get('PORT'), () => {
    console.log(`Server running on port ${app.get('PORT')}`);
});

// Rutas
app.get('/con-session', (req, res) => {
    if (req.session.contador) {
        req.session.contador++;
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`);
    }
    else {
        req.session.contador = 1;
        res.send('Bienvenido!');
    }
});

// Viejo
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!');
        else res.send({ status: 'Logout Error', body: err });
    });
});

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    if (username !== 'pepe' || password !== 'pepepass') {
        return res.send('login failed');
    }
    req.session.user = username;
    req.session.admin = true;
    res.send('login success!');
});

function auth(req, res, next) {
    if (req.session?.user === 'pepe' && req.session?.admin) {
        return next()
    }
    return res.status(401).send('error de autorización!')
}

app.get('/logoutNew', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.json({ status: 'Logout ERROR', body: err })
        }
        res.send('Logout ok!')
    })
})

app.get('/privado', auth, (req, res) => {
    res.send('si estas viendo esto es porque ya te logueaste!')
})

