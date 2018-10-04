/*eslint new-cap: 0*/
// https://www.workflowmax.com/api/client-methods

import { entityRaw as rawRequest } from '../../helpers'

import {
  LIST,
  SEARCH,
  GET,
  ADD,
  UPDATE,
  DELETE,
  ARCHIVE,
  CONTACT_ID,
  CONTACT,
} from '../../constants/methods'

import {
  CLIENT,
} from '../../constants/entities'

const ENTITY = CLIENT

const request = {
  get: rawRequest.get(ENTITY),
  post: rawRequest.post(ENTITY),
  put: rawRequest.put(ENTITY),
  delete: rawRequest.delete(ENTITY),
}

// Raw requests
export const rawGet = request.get
export const rawPost = request.post
export const rawPut = request.put
export const rawDelete = request.delete

// List clients
export async function list (apiKey, accountKey, params) {
  return request.get(apiKey, accountKey, LIST, params)
}

// Search clients
export async function search (apiKey, accountKey, params) {
  return request.get(apiKey, accountKey, SEARCH, params)
}

// Get client by id
export async function get (apiKey, accountKey, id, params) {
  return request.get(apiKey, accountKey, GET(id), params)
}

// Add new client
export async function add (apiKey, accountKey, data, params) {
  return request.post(apiKey, accountKey, ADD, data, params)
}

// Update client
export async function update (apiKey, accountKey, data, params) {
  return request.put(apiKey, accountKey, UPDATE, data, params)
}

// Archive client
export async function archive (apiKey, accountKey, data, params) {
  return request.put(apiKey, accountKey, ARCHIVE, data, params)
}

// Delete client
module.exports.delete = async function (apiKey, accountKey, data, params) {
  return request.post(apiKey, accountKey, DELETE, data, params)
}

// Get client contact
export async function getContact (apiKey, accountKey, id, params) {
  return request.get(apiKey, accountKey, CONTACT_ID(id), params)
}

// Add client contact
export async function addContact (apiKey, accountKey, params) {
  return request.post(apiKey, accountKey, CONTACT, params)
}

// Update client contact
export async function updateContact (apiKey, accountKey, id, params) {
  return request.put(apiKey, accountKey, CONTACT_ID(id), params)
}

// Delete client contact
export async function deleteContact (apiKey, accountKey, id, params) {
  return request.delete(apiKey, accountKey, CONTACT_ID(id), params)
}

/*

Ready:

+ GET list	Return a list of all clients
+ GET search	Return a list of all clients matching search query
+ GET get/[id]	Detailed information for a specific client
+ POST add	Add a client and contacts
+ PUT update	Update a clients details
+ PUT archive	Archive a client
+ POST delete	Delete a client
+ GET contact/[id]	Detailed information for a specific contact
+ PUT contact/[id]	Update a contacts details
+ POST contact	add a contact to a client
+ DELETE contact/[id]	delete a contact

@TODO:

GET documents/[id]	Return a list of documents for a client
POST document	Add a document to a client
POST addrelationship	Add a relationship between clients (Practice Manager only)
POST updaterelationship	Update the relationship details between clients (Practice Manager only)
POST deleterelationship	Delete the relationship between clients (Practice Manager only)

*/
