'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;
exports.put = put;

var _request = require('./request');

var request = _interopRequireWildcard(_request);

var _formatEntityUrl = require('./formatEntityUrl');

var _formatEntityUrl2 = _interopRequireDefault(_formatEntityUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function get(entity) {
  var formatEntityUrl = (0, _formatEntityUrl2.default)(entity);

  return function (apiKey, accountKey, method, params) {
    var url = formatEntityUrl(apiKey, accountKey, method, params);
    return request.get(url);
  };
}

function post(entity) {
  var formatEntityUrl = (0, _formatEntityUrl2.default)(entity);

  return function (apiKey, accountKey, method, data, params) {
    var url = formatEntityUrl(apiKey, accountKey, method, params);
    return request.post(url, data);
  };
}

function put(entity) {
  var formatEntityUrl = (0, _formatEntityUrl2.default)(entity);

  return function (apiKey, accountKey, method, data, params) {
    var url = formatEntityUrl(apiKey, accountKey, method, params);
    return request.put(url, data);
  };
}

module.exports.delete = function (entity) {
  var formatEntityUrl = (0, _formatEntityUrl2.default)(entity);

  return function (apiKey, accountKey, method, data, params) {
    var url = formatEntityUrl(apiKey, accountKey, method, params);
    return request.del(url, data);
  };
};