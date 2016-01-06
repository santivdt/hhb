/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/categories              ->  index
 * POST    /api/categories              ->  create
 * GET     /api/categories/:id          ->  show
 * PUT     /api/categories/:id          ->  update
 * DELETE  /api/categories/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Category = require('./category.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Categorys
export function index(req, res) {
  Category.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Category from the DB
export function show(req, res) {
  Category.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Category in the DB
export function create(req, res) {
  Category.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Category in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Category.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Category from the DB
export function destroy(req, res) {
  Category.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Deletes all categories from the DB
export function destroyAll(req, res) {
  Category.remove({})
      .then(responseWithResult(res))
      .catch(handleError(res));
}
