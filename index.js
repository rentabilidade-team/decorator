'use strict';

/**
 * @fileOverview Hapi's decorator for luizalabs' pattern
 * @author Aldo Oliveira
 * @module luiza-hapi-decorator
 * @requires decorators
 * @requires buildErrorResponse
 */

const buildResponseErrors = require('./src/builders/buildErrorResponse');
const decorators = require('./src/decorators');

/**
 * Method to register module in server
 */
module.exports.register = function (server, options, next) {
  server.ext('onPreResponse', (request, reply) => {
    var response = request.response;
    if (response.IsBoom || response.isBoom) {
      let newResponse = buildResponseErrors.build(response);
      return reply(newResponse).code(response.statusCode || response.output.statusCode);
    }
    return reply.continue();
  });

  server.decorate('reply', 'success', decorators.success);
  server.decorate('reply', 'error', decorators.error);

  next();
};

/**
 * Attributes of module
 */
module.exports.register.attributes = {
  pkg: require('./package.json')
};
