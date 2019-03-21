const router = require('express').Router();
const db = require('../../controllers');
const passport = require('passport');
require('../../config/passport')(passport);
const { getToken } = require("../../Shared")

router.get("/user/:userId", passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = getToken(req.headers);
    if (token) {
        db.User.getBasicUserData(req, res)
    } else {
        return res.status(403).send({
            success: false,
            msg: 'Unauthorized.'
        });
    }
})

module.exports = router