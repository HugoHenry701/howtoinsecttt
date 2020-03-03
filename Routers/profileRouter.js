const router = require('express').Router();

const autoCheck = (req, res, next) => {
    if (!req.user) {
        //if user is not logged in
        res.redirect('/auth')
    } else {
        //if logged in
        next();
    }
}

router.get('/', autoCheck, (req, res) => {
    res.render('profile', { user: req.user.userName, imgLink: req.user.thumbnail, details: req.user.details })
})

module.exports = router