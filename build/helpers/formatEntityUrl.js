'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (entity) {
  return function formatEntityUrl(apiKey, accountKey, method, params) {
    return (0, _formatUrl2.default)(entity, method, apiKey, accountKey, params);
  };
};

var _formatUrl = require('./formatUrl');

var _formatUrl2 = _interopRequireDefault(_formatUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }