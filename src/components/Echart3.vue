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

const {pieOption, state} = useChartDataStore()
const chart = ref(null)

state.then(() => {
  echarts.init(chart.value).setOption(pieOption)
})

</script>

<style lang="less" scoped>
  .el-card {
    width: 49%;
    margin-bottom: 20px;
    .chart {
      height: 240px;
      width: 100%;
    }
  }
</style>
