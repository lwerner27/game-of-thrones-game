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
    },

    findUserByUsername: function(req, res) {
        db.User.findOne({username: req.params.username}, "__id")
        .then(dbModel => {
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err))
    },

    findAllUsers: function(req, res) {
        db.User.find({}, "__id username totalScore ")
        .then(dbModels => {
            res.json(dbModels)
        })
        .catch(err => res.status(422).json(err))
    },

    addFriend: function(req, res) {
        db.User.findById(req.body.userId)
        .then(dbModel => {
            if (dbModel.friends) {
                dbModel.friends.push(req.body.friendId)
                dbModel.save()
                res.status(200).json({msg: "Added to friends."})
            } else {
                dbModel.friends = []
                dbModel.friends.push(req.body.friendId)
                dbModel.save()
                res.status(200).json({msg: "Added to friends."})
            }
        })
        .catch(err => res.status(422).json(err))
    }
    
}