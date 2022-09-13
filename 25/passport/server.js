const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
app.use(session({
    secret: 'keyboard cat',
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: config.TIEMPO_EXPIRACION
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// INDEX
app.get('/', routes.getRoot);