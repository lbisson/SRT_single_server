var express = require('express');
var router = express.Router();

var Prediction = require('../models/prediction');

router.get('/', function (req, res, next) {
    Prediction.find()
        .exec(function (err, predictions) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                predictions: predictions
            });
        });
});

router.post('/', function (req, res, next) {
    var prediction = new Prediction({
        solNum: req.body.solNum,
        title: req.body.title,
        url: req.body.url,
        predictions: req.body.predictions,
        reviewRec: true,
        date: Date.now(),
        isReadable: req.body.isReadable,
        eitLikelihood: req.body.eitLikelihood,
        agency: req.body.agency,
        office: req.body.office,
        contact: req.body.contact,
        position: req.body.position,
        reviewStatus: false
      });
    prediction.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            prediction: 'Saved prediction',
            obj: result
        });
    });
});


module.exports = router;
