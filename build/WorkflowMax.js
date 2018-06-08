'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.frompairs');

var _lodash2 = _interopRequireDefault(_lodash);

var _api = require('./api');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint import/namespace: [0]*/

!global._babelPolyfill && require('babel-polyfill');

var WorkflowMax = function WorkflowMax(_ref) {
  var apiKey = _ref.apiKey,
      accountKey = _ref.accountKey;

  _classCallCheck(this, WorkflowMax);

  this.api = (0, _lodash2.default)(Object.keys(api).map(function (apiEntry) {
    return [apiEntry, (0, _lodash2.default)(Object.keys(api[apiEntry]).map(function (method) {
      return [method, function () {
        var _api$apiEntry;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_api$apiEntry = api[apiEntry])[method].apply(_api$apiEntry, [apiKey, accountKey].concat(args));
      }];
    }))];
  }));
};

exports.default = WorkflowMax;