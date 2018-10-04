'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Generic
var LIST = exports.LIST = 'list';
var SEARCH = exports.SEARCH = 'search';
var GET = exports.GET = function GET(id) {
  return `get/${id}`;
};
var ADD = exports.ADD = 'add';
var UPDATE = exports.UPDATE = 'update';
var DELETE = exports.DELETE = 'delete';

// User
var ARCHIVE = exports.ARCHIVE = 'archive';

// Lead / job
var CURRENT = exports.CURRENT = 'current';
var CATEGORIES = exports.CATEGORIES = 'categories';

// Client
var CONTACT = exports.CONTACT = 'contact';
var CONTACT_ID = exports.CONTACT_ID = function CONTACT_ID(id) {
  return `${CONTACT}/${id}`;
};