'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EntrySchema = new mongoose.Schema({
  //flow: String,
  //date: {type:Date, default: Date.now},
  description: String
  //category: String,
  //amount: Number,
  //period: String
});

export default mongoose.model('Entry', EntrySchema);
