'use strict';

const _ = require('lodash');

module.exports = {
  clearJson
};

function clearJson (object) {
  if (object instanceof Array) {
    for (var i = object.length - 1; i >= 0; i--) {
      clearJson(object[i]);
      if (isEmpty(object[i])) {
        object.splice(i, 1);
      }
    }
  } else if (typeof object === 'object') {
    for (var property in object) {
      var value = object[property];
      if (isEmpty(value)) {
        delete object[property];
      } else if (value instanceof Array || typeof value === 'object') {
        clearJson(value);
        if (isEmpty(value)) {
          delete object[property];
        }
      }
    }
  }
}

function isEmpty (object) {
  if (object instanceof Array) {
    return object.length === 0;
  } else if (typeof object === 'object') {
    return _.isEmpty(object);
  } else if (_.trim(object) === '') {
    return true;
  }
  return false;
}
