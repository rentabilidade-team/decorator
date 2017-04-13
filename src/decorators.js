'use strict';

/**
 * @fileOverview Contract with the responses structure according to LuizaLabs standards
 * @author Aldo Oliveira
 * @module decorators
 * @requires models
 */

const models = require('./models');

module.exports = {
  success,
  error,
  notFound
};

/**
 * Method to create successful response
 * @param {object} data - Return API data
 * @param {integer} limit - Quantity of records on page
 * @param {integer} offset - Number of records skipped
 * @returns {ResponseModel} - Returns an instance of the ResponseModel object
 */
function success (data, limit, offset) {
  let responseBody = new models.ResponseModel(data, limit, offset);

  return this.response(responseBody);
}

/**
 * Method to create successful response
 * @param {object} err - Error information
 * @returns {ErrorResponseModel} - Returns an instance of the ErrorResponseModel object
 */
function error (err) {
  err.statusCode = err.statusCode || 500;
  this.response(err);
}

/**
 * Method to create not found response
 * @param {string} message - Description message
 */
function notFound (message) {
  let err = new Error(message);
  err.statusCode = 404;
  throw err;
}
