<template>
  <el-card shadow="hover">
    <div class="chart" ref="chart">
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import * as echarts from 'echarts'
import useChartDataStore from '@/store/chartData'

const {lineOption, state, barOption} = useChartDataStore()
const chart = ref(null)

state.then(() => {
  echarts.init(chart.value).setOption(lineOption)
})

</script>

<style lang="less" scoped>
  .el-card {
    margin-bottom: 20px;
    .chart {
      height: 280px;  
    }
  }
</style>
