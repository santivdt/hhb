'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  flow: String,
  date: {type:Date, default: Date.now},
  description: String,
  category: String,
  amount: Number,
  period: String
});

export default mongoose.model('Thing', ThingSchema);
