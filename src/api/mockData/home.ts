import type { MockMethod } from 'vite-plugin-mock'
export default [
  // /mock/home/getTableData
  {
    url: '/mock/home/getTableData', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '成功',
        data: [
          {
            name: 'oppo',
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: 'vivo',
            todayBuy: 300,
            monthBuy: 2200,
            totalBuy: 24000
          },
          {
            name: '苹果',
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000
          },
          {
            name: '小米',
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45000
          },
          {
            name: '三星',
            todayBuy: 300,
            monthBuy: 2000,
            totalBuy: 34000
          },
          {
            name: '魅族',
            todayBuy: 350,
            monthBuy: 3000,
            totalBuy: 22000
          }
        ]
      }
    }
  },
  // /mock/home/getCountData
  {
    url: '/mock/home/getCountData', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '成功',
        data:  [
          {
          name: "今日支付订单",
          value: 1234,
          icon: "SuccessFilled",
          color: "#2ec7c9",
          },
          {
          name: "今日收藏订单",
          value: 210,
          icon: "StarFilled",
          color: "#ffb980",
          },
          {
          name: "今日未支付订单",
          value: 1234,
          icon: "GoodsFilled",
          color: "#5ab1ef",
          },
          {
          name: "本月支付订单",
          value: 1234,
          icon: "SuccessFilled",
          color: "#2ec7c9",
          },
          {
          name: "本月收藏订单",
          value: 210,
          icon: "StarFilled",
          color: "#ffb980",
          },
          {
          name: "本月未支付订单",
          value: 1234,
          icon: "GoodsFilled",
          color: "#5ab1ef",
          },
        ]
      }
    }
  },
  // /mock/home/getChartData
  {
    url: '/mock/home/getChartData',
    mothod: 'get',
    response: () => {
      return {
        code: 200,
        msg: '成功',
        data: {
          'orderData': {
            "date": ['20241001', '20241002', '20241003', '20241004', '20241005', '20241006', '20241007'],
            "data|7": [{
              "苹果": "@integer(1000, 5000)",
              "小米": "@integer(1000, 5000)",
              "华为": "@integer(1000, 5000)",
              "oppo": "@integer(1000, 5000)",
              "vivo": "@integer(1000, 5000)",
              "一加": "@integer(1000, 5000)",
            }]
          },
          'videoData': [{
              name: '小米',
              value: 2999
            },
            {
              name: '苹果',
              value: 5999
            },
            {
              name: 'vivo',
              value: 1500
            },
            {
              name: 'oppo',
              value: 1999
            },
            {
              name: '魅族',
              value: 2200
            },
            {
              name: '三星',
              value: 4500
            }
          ],
          'userData': [{
              date: '周一',
              new: 5,
              active: 200
            },
            {
              date: '周二',
              new: 10,
              active: 500
            },
            {
              date: '周三',
              new: 12,
              active: 550
            },
            {
              date: '周四',
              new: 60,
              active: 800
            },
            {
              date: '周五',
              new: 65,
              active: 550
          }]
        }
      }
    }
    
  }

] as MockMethod[]

