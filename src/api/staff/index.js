/*eslint new-cap: 0*/

import { entityRaw as rawRequest } from '../../helpers'

import {
  STAFF,
  LIST,
} from '../../constants/entities'

const ENTITY = STAFF

const request = {
  get: rawRequest.get(ENTITY),
}

// Raw requests
export const rawGet = request.get
export const rawPost = request.post

// List clients
export async function list (apiKey, accountKey, params) {
  return request.get(apiKey, accountKey, LIST, params)
}
