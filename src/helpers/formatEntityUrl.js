import formatUrl from './formatUrl'

// Format url function wrapper for predefined entity
export default function (entity) {
  return function formatEntityUrl (apiKey, accountKey, method, params) {
    return formatUrl(entity, method, apiKey, accountKey, params)
  }
}
