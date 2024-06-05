import request from './request'

export default {
  getTableData () {
    return request({url: '/home/getTableData'})
  },
  getCountData () {
    return request({url: '/home/getCountData'})
  },
  getChartData () {
    return request({url: '/home/getChartData'})
  },
}