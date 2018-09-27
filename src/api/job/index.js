/*eslint new-cap: 0*/
// https://www.workflowmax.com/api/client-methods

import { entityRaw as rawRequest } from '../../helpers'

import {
  LIST,
  GET,
  ADD,
  UPDATE,
  DELETE,
  CURRENT,
} from '../../constants/methods'

import {
  JOB,
} from '../../constants/entities'

const ENTITY = JOB

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

// List all jobs
export async function list (apiKey, accountKey, params) {
  return request.get(apiKey, accountKey, LIST, params)
}

// List current jobs
export async function current (apiKey, accountKey, params) {
  return request.get(apiKey, accountKey, CURRENT, params)
}

// Get job by id
export async function get (apiKey, accountKey, id, params) {
  return request.get(apiKey, accountKey, GET(id), params)
}

// Add new job
export async function add (apiKey, accountKey, data, params) {
  return request.post(apiKey, accountKey, ADD, data, params)
}

// Update job
export async function update (apiKey, accountKey, data, params) {
  return request.put(apiKey, accountKey, UPDATE, data, params)
}

// Delete job
module.exports.delete = async function (apiKey, accountKey, data, params) {
  return request.post(apiKey, accountKey, DELETE, data, params)
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
