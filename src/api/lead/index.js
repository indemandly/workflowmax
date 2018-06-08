/*eslint new-cap: 0*/

import { entityRaw as rawRequest } from '../../helpers'

import {
  LIST,
  GET,
  ADD,
  CURRENT,
  CATEGORIES,
} from '../../constants/methods'

const ENTITY = 'lead'

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

// List leads
export async function list (apiKey, accountKey, params) {
  return request.get(apiKey, accountKey, LIST, params)
}

// List current leads
export async function current (apiKey, accountKey, params) {
  return request.get(apiKey, accountKey, CURRENT, params)
}

// Get lead by id
export async function get (apiKey, accountKey, id, params) {
  return request.get(apiKey, accountKey, GET(id), params)
}

// Add lead
export async function add (apiKey, accountKey, data, params) {
  return request.post(apiKey, accountKey, ADD, data, params)
}

// List categories
export async function categories (apiKey, accountKey, params) {
  return request.get(apiKey, accountKey, CATEGORIES, params)
}
