class Routes {
    // INDEX
    getRoot(req, res) {
        res.send('Hello World');
    }

    // LOGIN
    getLogin(req, res) {
        if(req.isAuthenticated()){
            let user = req.user;
            console.log('user logueado: ', user);
            res.send('profileUser', {user});
        } else {
            res.render('login');
        }
    }

    // SIGNUP
    getSignup(req, res) {
        res.render('signup');
    }

    // PROCESS LOGIN
    postLogin(req, res) {
        res.render('profileUser');
    }

    // PROCESS SIGNUP
    postSignup(req, res) {
        res.render('profileUser');
    }

    // GET FAIL LOGIN
    getFailLogin(req, res) {
        console.log('fail login');
        res.render('login-error', {});
    }

    // GET FAIL SIGNUP
    getFailSignup(req, res) {
        console.log('fail signup');
        res.render('signup-error', {});
    }

    // LOGOUT
    getLogout(req, res) {
        req.logout();
        res.render('index');
    }

    // FAIL ROUTE
    getFailRoute(req, res) {
        res.send('404').render('routing-error', {});
    }


}