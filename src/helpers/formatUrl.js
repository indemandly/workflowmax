import { WORKFLOWMAX_API_URL } from '../constants/api'

// Format entry point (entity name + method)
const formatEntryPoint = (entity, method) =>
  `${WORKFLOWMAX_API_URL}/${entity}.api/${method}`

// Format mondatory query parameters
const formatApiParams = (apiKey, accountKey) =>
  `?apiKey=${apiKey}&accountKey=${accountKey}`

// Format user query parameters
const formatAdditionalParams = (params = []) =>
  params.map(param => `&${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`).join('')

// Format all query parameters
const formatParams = (apiKey, accountKey, params) =>
  `${formatApiParams(apiKey, accountKey)}${formatAdditionalParams(params)}`

// Format api request url
export default function (entity, method, apiKey, accountKey, params) {
  return `${formatEntryPoint(entity, method)}${formatParams(apiKey, accountKey, params)}`
}
