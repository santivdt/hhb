'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CategorySchema = new mongoose.Schema({
  title: String,
  rank: Number
});

export default mongoose.model('Category', CategorySchema);
