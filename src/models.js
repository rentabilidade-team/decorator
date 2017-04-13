'use strict';

/**
 * @fileOverview Contract with the responses structure according to LuizaLabs standards
 * @module models
 */

const jsonHelper = require('./helpers/json-helper');
const os = require('os');

module.exports = {
  ErrorResponseModel,
  ResponseModel
};

/** Class to error response according to LuizaLabs strandards */
function ErrorResponseModel () {
  var self = this;

  self.developerMessage = undefined;
  self.userMessage = undefined;
  self.errorCode = undefined;
  self.moreInfo = undefined;
  self.backendValidations = undefined;

  return self;
}

/**
 * Class to success response according to LuizaLabs strandards
 * @param {object} data - Return API data
 * @param {integer} limit - Quantity of records on page
 * @param {integer} offset - Number of records skipped
 */
function ResponseModel (data, limit, offset) {
  var self = this;

  self.meta = {};
  self.records = [];

  self.meta.server = os.hostname();
  self.meta.offset = limit || 0;
  self.meta.limit = offset || 50;
  self.meta.recordCount = 0;

  self.setRecords = (data) => {
    if (data) {
      data = data instanceof Array ? data : [data];
      data = data.map((each) => each.toJSON ? each.toJSON() : each);

      self.records = data;
    } else {
      self.records = [];
    }

    self.meta.recordCount = self.records.length;
  };

  if (data) {
    self.setRecords(data);
  }

  jsonHelper.clearJson(self);
  return self;
}
