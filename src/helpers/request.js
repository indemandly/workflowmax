import axios from 'axios'

const extractData = ({data}) => data

export const get = async function (url) {
  return axios.get(url)
    .then(extractData)
}

export const post = async function (url, data) {
  return axios.post(url, data)
    .then(extractData)
}

export const put = async function (url, data) {
  return axios.put(url, data)
    .then(extractData)
}

export const del = async function (url, data) {
  return axios.delete(url, data)
    .then(extractData)
}
