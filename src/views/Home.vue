<template>
  <div class="home">
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="card-header">
            <img src="../assets/images/user.png" alt="">
            <div class="user-info">
              <div class="user-name">Admin</div>
              <div class="user-role">超级管理员</div>
            </div>
          </div>
          <hr style="border: 1px solid #dedfe0; margin: 20px 0;">
          <div class="login-info">
            <div class="login-time">
              <span>上次登录时间:</span>
              <span>2024-7-19</span>
            </div>
            <div class="login-time">
              <span>上次登录地点:</span>
              <span>广东</span>
            </div>
            <div class="login-area"></div>
          </div>
        </el-card>
        
        <el-card shadow="hover" style="margin-top: 20px; min-height: 440px">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="课程" />
            <el-table-column prop="todayBuy" label="今日购买" />
            <el-table-column prop="monthBuy" label="本月购买" />
            <el-table-column prop="totalBuy" label="总购买" />
          </el-table>
        </el-card>
      </el-col>

      <!-- 右侧 -->
      <el-col :span="16">
          <div class="right-topCards">
            <el-card 
              shadow="hover"
              :body-style="{display:'flex', padding:0, alignItems:'center'}"
              v-for="item in countData" :key="item.name"
            >
              <el-icon :size="20" color="white" :style="{backgroundColor:item.color}">
                <component :is="item.icon" ></component>
              </el-icon>
              <div class=details>
                <p class="count">￥{{ item.value }}</p>
                <p class="title">{{ item.name }}</p>
              </div>
            </el-card>
          </div>
          <Echart1/>
          <div class="echarts">
            <Echart2/>
            <Echart3/>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, getCurrentInstance } from 'vue'
import {type CountDataType} from '@/types'
import Echart1 from '../components/Echart1.vue'
import Echart2 from '../components/Echart2.vue'
import Echart3 from '../components/Echart3.vue'

  const {proxy}:any = getCurrentInstance()
  const tableData = ref([])
  const countData = ref<CountDataType[]>([])
  const chartData = ref<any>({})
  onBeforeMount(() => {
    getTableData()
    getCountData()
    getChartData()
  })

  async function getTableData () {
    tableData.value = await proxy.$api.getTableData()
  }
  async function getCountData () {
    countData.value = await proxy.$api.getCountData()
  }
  async function getChartData () {
    chartData.value = await proxy.$api.getChartData()
  }

</script>

<style lang="less" scoped>
.home {
  .card-header {
    display: flex;
    align-items: center;

    img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      margin-right: 30px;
    }

    .user-info {
      .user-name {
        font-size: 22px;
        font-weight: bold;
      }

      .user-role {
        font-size: 12px;
        color: #73767a;
      }
    }
  }

  .login-info {
    div {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #73767a;
      & :first-child {
        flex: 2;
        margin-bottom: 10px;
      }
      & :last-child {
        flex: 5;
        color: #2e2e2e;
      }
    }
  }

  .right-topCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .el-card {
      width: 32%;
      margin-bottom: 15px;
      .el-icon {
        width: 60px;
        height: 60px;
      }
      .details {
        margin-left: 10px;
        .count {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 2px;
        }
        .title {
          font-size: 11px;
          color:#73767a;
        }
      }
    }
  }

  .echarts {
    display: flex;
    justify-content: space-between;
  }
}
</style>
