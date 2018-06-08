import * as request from './request'
import formatUrl from './formatUrl'

export async function get (apiKey, accountKey, entity, method, params) {
  const url = formatUrl(entity, method, apiKey, accountKey, params)
  return request.get(url)
}

export async function post (apiKey, accountKey, entity, method, data, params) {
  const url = formatUrl(entity, method, apiKey, accountKey, params)
  return request.post(url, data)
}

export async function put (apiKey, accountKey, entity, method, data, params) {
  const url = formatUrl(entity, method, apiKey, accountKey, params)
  return request.put(url, data)
}

module.exports.delete = async function (apiKey, accountKey, entity, method, data, params) {
  const url = formatUrl(entity, method, apiKey, accountKey, params)
  return request.del(url, data)
}
