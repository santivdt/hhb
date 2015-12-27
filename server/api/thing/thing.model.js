'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  title: String,
  name: String
});

export default mongoose.model('Thing', ThingSchema);
