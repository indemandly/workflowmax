'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = exports.rawDelete = exports.rawPut = exports.rawPost = exports.rawGet = undefined;

// List categories
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

/*

<Response api-method="List">
  <Status>OK</Status>
  <Categories>
    <Category>
      <ID>1</ID>
      <Name>aaa</Name>
    </Category>
    <Category>
      <ID>2</ID>
      <Name>bbb</Name>
    </Category>
  </Categories>
</Response>

*/


var _helpers = require('../../helpers');

var _methods = require('../../constants/methods');

var _entities = require('../../constants/entities');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // API Page: https://www.workflowmax.com/api/category-methods

/*eslint new-cap: 0*/

var ENTITY = _entities.CATEGORY;

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