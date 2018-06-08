'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categories = exports.add = exports.get = exports.current = exports.list = exports.rawDelete = exports.rawPut = exports.rawPost = exports.rawGet = undefined;

// List leads
var list = exports.list = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(apiKey, accountKey, params) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', request.get(apiKey, accountKey, _methods.LIST, params));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function list(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// List current leads


var current = exports.current = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(apiKey, accountKey, params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', request.get(apiKey, accountKey, _methods.CURRENT, params));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function current(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// Get lead by id


var get = exports.get = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(apiKey, accountKey, id, params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', request.get(apiKey, accountKey, (0, _methods.GET)(id), params));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function get(_x7, _x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}();

// Add lead


var add = exports.add = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(apiKey, accountKey, data, params) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', request.post(apiKey, accountKey, _methods.ADD, data, params));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function add(_x11, _x12, _x13, _x14) {
    return _ref4.apply(this, arguments);
  };
}();

// List categories


var categories = exports.categories = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(apiKey, accountKey, params) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', request.get(apiKey, accountKey, _methods.CATEGORIES, params));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function categories(_x15, _x16, _x17) {
    return _ref5.apply(this, arguments);
  };
}();

var _helpers = require('../../helpers');

var _methods = require('../../constants/methods');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*eslint new-cap: 0*/

var ENTITY = 'lead';

var request = {
  get: _helpers.entityRaw.get(ENTITY),
  post: _helpers.entityRaw.post(ENTITY),
  put: _helpers.entityRaw.put(ENTITY),
  delete: _helpers.entityRaw.delete(ENTITY)

  // Raw requests
};var rawGet = exports.rawGet = request.get;
var rawPost = exports.rawPost = request.post;
var rawPut = exports.rawPut = request.put;
var rawDelete = exports.rawDelete = request.delete;