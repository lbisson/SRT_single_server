var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    solNum: {type: String},
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true,
      trim: true
    },
    predictions: {
      RED: Number,
      GREEN: Number
    },
    reviewRec: { type: Boolean },
    date: {type: Date},
    isReadable: { type: Boolean },
    eitLikelihood: { type: Boolean },
    agency: { type: String },
    office: { type: String },
    contact: { type: String },
    position: { type: String },
    reviewStatus: { type: Boolean },
});

module.exports = mongoose.model('Prediction', schema);
