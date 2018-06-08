'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.archive = exports.update = exports.add = exports.get = exports.search = exports.list = exports.rawDelete = exports.rawPut = exports.rawPost = exports.rawGet = undefined;

// List clients
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

// Search clients


var search = exports.search = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(apiKey, accountKey, params) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', request.get(apiKey, accountKey, _methods.SEARCH, params));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function search(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// Get client by id


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

// Add new client


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

// Update client


var update = exports.update = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(apiKey, accountKey, data, params) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', request.put(apiKey, accountKey, _methods.UPDATE, data, params));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function update(_x15, _x16, _x17, _x18) {
    return _ref5.apply(this, arguments);
  };
}();

// Archive client


var archive = exports.archive = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(apiKey, accountKey, data, params) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', request.put(apiKey, accountKey, _methods.ARCHIVE, data, params));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function archive(_x19, _x20, _x21, _x22) {
    return _ref6.apply(this, arguments);
  };
}();

// Delete client


var _helpers = require('../../helpers');

var _methods = require('../../constants/methods');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*eslint new-cap: 0*/
// https://www.workflowmax.com/api/client-methods

var ENTITY = 'client';

var request = {
  get: _helpers.entityRaw.get(ENTITY),
  post: _helpers.entityRaw.post(ENTITY),
  put: _helpers.entityRaw.put(ENTITY),
  delete: _helpers.entityRaw.delete(ENTITY)

  // Raw requests
};var rawGet = exports.rawGet = request.get;
var rawPost = exports.rawPost = request.post;
var rawPut = exports.rawPut = request.put;
var rawDelete = exports.rawDelete = request.delete;module.exports.delete = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(apiKey, accountKey, data, params) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', request.post(apiKey, accountKey, _methods.DELETE, data, params));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function (_x23, _x24, _x25, _x26) {
    return _ref7.apply(this, arguments);
  };
}();

/*

Ready:

+ GET list	Return a list of all clients
+ GET search	Return a list of all clients matching search query
+ GET get/[id]	Detailed information for a specific client
+ POST add	Add a client and contacts
+ PUT update	Update a clients details
+ PUT archive	Archive a client
+ POST delete	Delete a client

@TODO:

GET contact/[id]	Detailed information for a specific contact
PUT contact/[id]	Update a contacts details
POST contact	add a contact to a client
DELETE contact/[id]	delete a contact
GET documents/[id]	Return a list of documents for a client
POST document	Add a document to a client
POST addrelationship	Add a relationship between clients (Practice Manager only)
POST updaterelationship	Update the relationship details between clients (Practice Manager only)
POST deleterelationship	Delete the relationship between clients (Practice Manager only)

*/