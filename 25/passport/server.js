const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt');
const routes = require('./routes');
const handlebars = require('express-handlebars')
const app = express();
app.use(session({
    secret: 'keyboard cat',
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 300
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
}));

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

const isValidPassword = (user, password) => {
    return bCrypt.compareSync(password, user.password);
};

const createHash = (password) => {
    return bCrypt.hashSync(
        password,
        bCrypt.genSaltSync(10),
        null);
}

const checkAuthenticacion = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    res.redirect('/login');
}


passport.use('login', new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                console.log('User Not Found with username ' + username);
                return done(null, false);
            }
            if (!isValidPassword(user, password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
));

passport.use('signup', new LocalStrategy({
    passReqToCallback: true
},
    (req, username, password, done) => {
        User.findOne({ 'username': username }, function (err, user) {

            if (err) {
                console.log('Error in SignUp: ' + err);
                return done(err);
            }

            if (user) {
                console.log('User already exists');
                return done(null, false)
            }

            const newUser = {
                username: username,
                password: createHash(password),
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            }
            User.create(newUser, (err, userWithId) => {
                if (err) {
                    console.log('Error in Saving user: ' + err);
                    return done(err);
                }
                console.log(user)
                console.log('User Registration succesful');
                return done(null, userWithId);
            });
        });
    })
)

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, done);
});

app.use(passport.initialize());
app.use(passport.session());


// INDEX
app.get('/', routes.getRoot);

// LOGIN
app.get('/login', routes.getLogin);

// SIGNUP
app.get('/signup', routes.getSignup);

// PROCESS LOGIN
app.post('/login', passport.authenticate('login', {
    successRedirect: '/profile',
    failureRedirect: '/failLogin'
}));

// PROCESS SIGNUP
app.post('/signup', passport.authenticate('signup', {
    successRedirect: '/profile',
    failureRedirect: '/failSignup'
}));

// GET FAIL LOGIN
app.get('/failLogin', routes.getFailLogin);

// GET FAIL SIGNUP
app.get('/failSignup', routes.getFailSignup);

app.get('/ruta-protegida', checkAuthenticacion, (req, res) => {
    const user = req.user;
    console.log('user logueado: ', user);
    res.send('<h1>Ruta OK!</h1>');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});