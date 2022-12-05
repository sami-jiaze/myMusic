import axios from 'axios'

const baseURL = '/'

const ERR_OK = 0
axios.defaults.baseURL = baseURL

export function get (url, params) {
  return axios.get(url, {
    params
  }).then((res) => {
    if (res.data.code === ERR_OK) {
      return res
    }
  }).catch((e) => {
    console.log(e)
  })
}
