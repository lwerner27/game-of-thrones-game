const router = require('express').Router();
const db = require('../../controllers');
const passport = require('passport');
require('../../config/passport')(passport);
const { getToken } = require("../../Shared")

// This route handles the updating of user's picks
router.put("/updatePicks", passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = getToken(req.headers);
    if (token) {
        console.log('User is loggd in and updating picks.');
        db.User.updatePicks(req, res);
    } else {
        return res.status(403).send({
            success: false,
            msg: 'Unauthorized.'
        });
    }
})

module.exports = router;