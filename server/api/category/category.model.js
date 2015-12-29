'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CategorySchema = new mongoose.Schema({
  category: String
});

export default mongoose.model('Category', CategorySchema);
