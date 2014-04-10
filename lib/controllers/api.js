'use strict';

var mongoose = require('mongoose'),
Verb = mongoose.model('Verb'),
Tenses = mongoose.model('Tense');

/**
 * Get all verbs
 */
exports.verbs = function (req, res) {
    console.log("The request parameters:" + JSON.stringify(req.query));
    return Verb.find()
    .sort('verb')
    .exec(function (err, verbs) {
        if (!err) {
            return res.json(verbs);
        } else {
            return res.send(err);
        }
    });
};

/****
 * Find verbs by name
 ****/
exports.query = function (req, res) {
    var myQuery = Verb.find({})
        .where({
            verb : new RegExp('^' + req.params.verb)
        })
        .sort('verb')
        //.populate('tenses')
        .exec(function (err, verbs) {
            if (!err) {
                return res.json(verbs); // output array of users found
            } else {
                return res.send(err);
            }
        });
};

exports.save = function (req, res) {
    console.log("The body contained " + req.body.tenses.length + " tenses");
    Verb.create(req.body, function (err, obj) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log("Saved verb");
            res.json(obj);
        }
    });
};
