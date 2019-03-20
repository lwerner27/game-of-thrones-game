const db = require("../models")

module.exports = {

    updatePicks: function(req, res) {
        db.User
        .findOneAndUpdate({ _id: req.body.userId }, { picks: req.body.picks })
        .then(() => {
            this.getUserPicks(req, res)
        })
        .catch(err => res.status(422).json(err));
    },

    getUserPicks: function(req, res) {
        db.User
        .findById(req.body.userId, "picks")
        .then(dbModel => {
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err))
    },

    getBasicUserData: function(req, res) {
        db.User.findById(req.params.userId, "username picks totalScore")
        .then(dbModel => {
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err))
    } 
    
}