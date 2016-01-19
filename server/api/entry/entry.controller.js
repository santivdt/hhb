/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/entries              ->  index
 * POST    /api/entries              ->  create
 * GET     /api/entries/:id          ->  show
 * PUT     /api/entries/:id          ->  update
 * DELETE  /api/entries/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Entry = require('./entry.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    console.log('entity',entity);
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

// Gets a list of Entrys
export function index(req, res) {
  Entry.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Search entries from the DB on description
export function search(req, res) {
  console.log(req.params);
  Entry.findAsync({description: new RegExp(req.params.query, "i")})
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Search entries from the DB exact match on category
export function findEntryByCategory(req, res) {
  console.log(req.params);
  Entry.findAsync({category: req.params.category})
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Entry from the DB
export function show(req, res) {
  Entry.findByIdAsync(req.params.id)
      .then(handleEntityNotFound(res))
      .then(responseWithResult(res))
      .catch(handleError(res));
}

// Creates a new Entry in the DB
export function create(req, res) {
  Entry.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Entry in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Entry.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Entry from the DB
export function destroy(req, res) {
  Entry.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Deletes all Entries from the DB
export function destroyAll(req, res) {
  Entry.remove({})
    .then(responseWithResult(res))
    .catch(handleError(res));
}




