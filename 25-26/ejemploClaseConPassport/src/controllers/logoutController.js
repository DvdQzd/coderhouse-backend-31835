export function logoutController(req, res) {
    if (req.isAuthenticated()) {
        req.logout()
    }
    res.sendStatus(200)
} 