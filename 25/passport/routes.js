
// INDEX
function getRoot(req, res) {
    res.send('Hello World');
}

// LOGIN
function getLogin(req, res) {
    if (req.isAuthenticated()) {
        let user = req.user;
        console.log('user logueado: ', user);
        res.send('profileUser', { user });
    } else {
        res.render('login');
    }
}

// SIGNUP
function getSignup(req, res) {
    res.render('signup');
}

// PROCESS LOGIN
function postLogin(req, res) {
    res.render('profileUser');
}

// PROCESS SIGNUP
function postSignup(req, res) {
    res.render('profileUser');
}

// GET FAIL LOGIN
function getFailLogin(req, res) {
    console.log('fail login');
    res.render('login-error', {});
}

// GET FAIL SIGNUP
function getFailSignup(req, res) {
    console.log('fail signup');
    res.render('signup-error', {});
}

// LOGOUT
function getLogout(req, res) {
    req.logout();
    res.render('index');
}

// FAIL ROUTE
function getFailRoute(req, res) {
    res.send('404').render('routing-error', {});
}

module.exports = {
    getRoot,
    getLogin,
    getSignup,
    postLogin,
    postSignup,
    getFailLogin,
    getFailSignup,
    getLogout,
    getFailRoute
}
