import { reactive } from 'vue'
import { defineStore } from 'pinia'
import cloneDeep from 'lodash/cloneDeep'
import api from '@/api/api'

interface Item {
  [key: string]: any
}

export default defineStore('chartData',() => {
  const lineOrBarOption = {
    grid: {
      left: 'center',
      width: '70%',
    },
    legend: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: {
      type: 'value',
    },
    series: [] as any[], // Ensure series is an any array
  }

  const pieOptions = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '70%',
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  const lineOption = reactive(cloneDeep(lineOrBarOption))
  const barOption = reactive(cloneDeep(lineOrBarOption))
  const pieOption = reactive(pieOptions)

  async function fetchData() {
    // 先获取所有echart数据
    const { orderData, userData, videoData }:any = await api.getChartData()

    // 处理lineOption
    const lineChartKey = Object.keys(orderData.data[0])
    lineOption.xAxis.data = orderData.date
    lineChartKey.forEach((key) => {
      const obj = {
        type: 'line',
        name: key,
        data: [] as any[]
      }
      orderData.data.forEach((item: Item) => {
        obj.data.push(item[key]);
      })
      lineOption.series.push(obj) // Ensure obj is added to series
    })

    // 处理barOption
    const userChartDate = userData.map((item: Item) => item.date)  //['周一', '周二', '周三', '周四', '周五']
    barOption.xAxis.data = userChartDate
    const userChartKey = Object.keys(userData[0]).splice(1)  //['new', 'active']
    userChartKey.forEach(key => {
      const obj = {
        type: 'bar',
        name: key,
        data: [] as any[]
      }
      userData.forEach((item: Item) => {
        obj.data.push(item[key])
      })
      barOption.series.push(obj)
    })

    // 处理pieOption
    pieOption.series[0].data = videoData
  }


  const state = fetchData()
  return {
    state,
    lineOption,
    barOption,
    pieOption
  }
})
