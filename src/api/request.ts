import axios from 'axios'
import config from '@/config'
import {ElMessage} from 'element-plus'
const ERROR_MSG = '网络连接出错'

const service = axios.create({
  baseURL: config.baseApi
})

service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const {code, data, msg} = response.data
  if(code === 200) {
    return data
  } else {
    ElMessage.error(msg || ERROR_MSG)
    return Promise.reject(ERROR_MSG)
  }
}, error => Promise.reject(error))

export default function (options:{ [key:string]:any }) {
  let isMock = config.mock
  if(typeof options.mock !== 'undefined') isMock = options.mock
  if(isMock) service.defaults.baseURL = config.mockApi
  if(config.env === 'production') service.defaults.baseURL = config.baseApi
  return service(options)
}
