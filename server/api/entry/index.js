'use strict';

var express = require('express');
var controller = require('./entry.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/search/:query', controller.search);
router.get('/:id', controller.show);
//router.get('/:query', controller.search);
//router.get('/test', controller.test);
router.get('/:description', controller.search);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.delete('/', controller.destroyAll);

module.exports = router;
