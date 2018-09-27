// API Page: https://www.workflowmax.com/api/category-methods

/*eslint new-cap: 0*/

import { entityRaw as rawRequest } from '../../helpers'

import {
  LIST,
} from '../../constants/methods'

import {
  CATEGORY,
} from '../../constants/entities'

const ENTITY = CATEGORY

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

// List categories
export async function list (apiKey, accountKey, params) {
  return request.get(apiKey, accountKey, LIST, params)
}

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
