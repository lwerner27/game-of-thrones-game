const db = require("../models")

module.exports = {

    updatePicks: function(req, res) {
        db.User
        .findOneAndUpdate({ _id: req.body.userId }, { picks: req.body.picks })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    
}