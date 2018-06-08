'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.put = exports.post = exports.get = undefined;

var get = exports.get = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(apiKey, accountKey, entity, method, params) {
    var url;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = (0, _formatUrl2.default)(entity, method, apiKey, accountKey, params);
            return _context.abrupt('return', request.get(url));

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function get(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var post = exports.post = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(apiKey, accountKey, entity, method, data, params) {
    var url;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = (0, _formatUrl2.default)(entity, method, apiKey, accountKey, params);
            return _context2.abrupt('return', request.post(url, data));

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function post(_x6, _x7, _x8, _x9, _x10, _x11) {
    return _ref2.apply(this, arguments);
  };
}();

var put = exports.put = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(apiKey, accountKey, entity, method, data, params) {
    var url;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = (0, _formatUrl2.default)(entity, method, apiKey, accountKey, params);
            return _context3.abrupt('return', request.put(url, data));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function put(_x12, _x13, _x14, _x15, _x16, _x17) {
    return _ref3.apply(this, arguments);
  };
}();

var _request = require('./request');

var request = _interopRequireWildcard(_request);

var _formatUrl = require('./formatUrl');

var _formatUrl2 = _interopRequireDefault(_formatUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports.delete = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(apiKey, accountKey, entity, method, data, params) {
    var url;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = (0, _formatUrl2.default)(entity, method, apiKey, accountKey, params);
            return _context4.abrupt('return', request.del(url, data));

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x18, _x19, _x20, _x21, _x22, _x23) {
    return _ref4.apply(this, arguments);
  };
}();