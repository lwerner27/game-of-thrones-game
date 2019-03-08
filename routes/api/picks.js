const router = require('express').Router();
const db = require('../../controllers');
const passport = require('passport');
require('../../config/passport')(passport);

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

// Function for getting token from the authorization header
function getToken(headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
module.exports = router;