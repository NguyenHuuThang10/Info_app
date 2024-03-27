const User = require('../models/User')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class SiteController {

    // [get] /
    index (req, res, next) {
        var msv = req.query.msv
        if(msv) {
            User.find({ msv: msv})
            .then(data => {
                res.render("home", {
                    data: mutipleMongooseToObject(data)
                })
            })
            .catch(next)
        }else{
            User.find({})
                .then((data) => {
                    // res.json(data)
                    res.render('home', {
                        data: mutipleMongooseToObject(data)
                    })
                })
                .catch(next)
        }
    }

    add (req, res, next) {
        const newUser = new User(req.body)
        newUser.save()
            .then(() => {
                // res.json("Add Success!")
                res.redirect('/')
            })
            .catch(next)
    }

    delete( req, res, next) {
        var userId = req.params.id
        User.deleteOne({ _id: userId })
            .then(data => {
                // res.json('Delete Success!')
                res.redirect('/')
            })
    }

    edit (req, res, next) {
        var userId = req.params.id
        User.findOne({ _id: userId})
            .then(data => {
                // res.json(data)
                res.render('edit', {
                    data: mongooseToObject(data)
                })
            })
            .catch(next)
    }

    update (req, res, next) {
        var userId = req.params.id

        User.updateOne({ _id: userId}, req.body)
            .then(data => {
                // res.json('Updat Success!')
                res.redirect('/')
            })
            .catch(next)
    }

}

module.exports = new SiteController()