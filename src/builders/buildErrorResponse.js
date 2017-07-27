'use strict';

/**
 * @namespace builders
 * @module buildErrorResponse
 * @author Aldo Oliveira
 * @requires lodash
 * @requires joi-helper
 * @requires models
 */

const _ = require('lodash');
const joiHelper = require('../helpers/joi-helper');
const models = require('../models');

const multiErrors = false;

/**
 * Creates the error response body following the standards
 * @param {object} response - Response of the controllers of the Api methods
 * @return {ErrorResponseModel}
 */
module.exports.build = (response) => {
  let newResponse = {};

  if (response.data && response.data.details) {
    newResponse = buildJoiErrors(response);
  } else {
    newResponse = buildGenericErrors(response);
  }

  newResponse = newResponse instanceof Array ? newResponse : [newResponse];

  if (multiErrors) {
    return newResponse;
  } else {
    return newResponse[0];
  }
};

/**
 * Creates the body response of the validations errors 'joi' following the standards
 * @param {object} response - Response of the controllers of the Api methods
 * @return {ErrorResponseModel}
 */
function buildJoiErrors (response) {
  let errors = [];

  if (response.data && response.data.details) {
    _.forEach(response.data.details, (detail) => {
      let errorResponse = new models.ErrorResponseModel();

      errorResponse.developerMessage = response.output.payload.error;
      _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
      let compiled = _.template(_.get(joiHelper.errorMessages, detail.type));
      errorResponse.userMessage = detail.path + ' ' + compiled(detail.context);

      errorResponse.errorCode = response.output.statusCode;
      errorResponse.moreInfo = 'http://dev-magazineluiza.devportal.apigee.com/codigos-de-erro';

      errors.push(errorResponse);
    });

    return errors;
  }

  return response;
}

/**
 * Creates the response body for errors returned by the controllers of the Api
 * @param {object} response - Response of the controllers of the Api methods
 * @return {ErrorResponseModel}
 */
function buildGenericErrors (response) {
  let errors = [];

  if (response) {
    let errorResponse = new models.ErrorResponseModel();

    errorResponse.developerMessage = response.developerMessage || response.userMessage || response.message || response.output.payload.error;
    errorResponse.userMessage = response.userMessage || response.message || response.output.payload.message;
    errorResponse.errorCode = response.errorCode || response.statusCode || response.output.statusCode;
    errorResponse.moreInfo = response.moreInfo || 'http://dev-magazineluiza.devportal.apigee.com/codigos-de-erro';

    if (response.backendValidations) {
      errorResponse.backendValidations = response.backendValidations;
    }

    errors.push(errorResponse);

    return errors;
  }

  return response;
}
