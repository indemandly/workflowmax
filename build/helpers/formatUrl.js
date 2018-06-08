'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (entity, method, apiKey, accountKey, params) {
  return `${formatEntryPoint(entity, method)}${formatParams(apiKey, accountKey, params)}`;
};

var _api = require('../constants/api');

// Format entry point (entity name + method)
var formatEntryPoint = function formatEntryPoint(entity, method) {
  return `${_api.WORKFLOWMAX_API_URL}/${entity}.api/${method}`;
};

// Format mondatory query parameters
var formatApiParams = function formatApiParams(apiKey, accountKey) {
  return `?apiKey=${apiKey}&accountKey=${accountKey}`;
};

// Format user query parameters
var formatAdditionalParams = function formatAdditionalParams() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return params.map(function (param) {
    return `&${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`;
  }).join('');
};

// Format all query parameters
var formatParams = function formatParams(apiKey, accountKey, params) {
  return `${formatApiParams(apiKey, accountKey)}${formatAdditionalParams(params)}`;
};

// Format api request url