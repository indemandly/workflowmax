import * as request from './request'
import formatEntityUrlHandler from './formatEntityUrl'

export function get (entity) {
  const formatEntityUrl = formatEntityUrlHandler(entity)

  return function (apiKey, accountKey, method, params) {
    const url = formatEntityUrl(apiKey, accountKey, method, params)
    return request.get(url)
  }
}

export function post (entity) {
  const formatEntityUrl = formatEntityUrlHandler(entity)

  return function (apiKey, accountKey, method, data, params) {
    const url = formatEntityUrl(apiKey, accountKey, method, params)
    return request.post(url, data)
  }
}

export function put (entity) {
  const formatEntityUrl = formatEntityUrlHandler(entity)

  return function (apiKey, accountKey, method, data, params) {
    const url = formatEntityUrl(apiKey, accountKey, method, params)
    return request.put(url, data)
  }
}

module.exports.delete = function (entity) {
  const formatEntityUrl = formatEntityUrlHandler(entity)

  return function (apiKey, accountKey, method, data, params) {
    const url = formatEntityUrl(apiKey, accountKey, method, params)
    return request.del(url, data)
  }
}
