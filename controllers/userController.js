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
        db.User.findById(req.params.userId, "username picks totalScore avatar")
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
    },

    removeFriend: function(req, res) {
        db.User.findById(req.body.userId)
        .then(dbModel => {
            dbModel.friends.splice(dbModel.friends.indexOf(req.body.friendId, 1))
            dbModel.save()
            res.status(200).json({msg: "Removed from friends."})
        })
        .catch(err => res.status(422).json(err))
    },

    updateAvatar: function(req, res) {
        db.User.findById(req.body.userId)
        .then(dbModel => {
            dbModel.avatar = req.body.avatar
            dbModel.save()
            res.status(200).json({ msg: "Your avatar has been updated." })
        })
        .catch(err => res.status(422).json(err))
    }
    
}