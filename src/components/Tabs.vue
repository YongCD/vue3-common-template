<template>
  <el-tabs
    v-model="activeRoute"
    type="card"
    @tab-click="handleClick"
    @tab-remove="handleRemove"
  >
    <el-tab-pane label="首页" name="home" :closable="false"></el-tab-pane>
    <el-tab-pane v-for="item in routeList" :key="item.name" :name="item.name" :label="item.label" :closable="true"></el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import {useRoute, useRouter, type RouteRecordName } from 'vue-router'
import type { TabsPaneContext, TabPaneName} from 'element-plus'

const router = useRouter()
const route = useRoute()
const activeRoute = ref<any>('home')
const routeList = reactive<any[]>([])

function handleClick (tab: TabsPaneContext) {
  router.push({name:tab.paneName as RouteRecordName})
}
function handleRemove (name: TabPaneName) {
  const removeIndex = routeList.findIndex(item => item.name === name)
  const activeIndex = routeList.findIndex(item => item.name === activeRoute.value)
  if(removeIndex === activeIndex) {
    if (routeList.length === 1) {
      router.push({name: 'home'})
    } else {
      if (routeList.length-1 === activeIndex) {
        router.push({name: routeList[activeIndex - 1].name})
      } else {
        router.push({name: routeList[activeIndex + 1].name})
      }
    }
  }
  routeList.splice(removeIndex, 1)
}

watch (()=>route.name, () => {
  if (route.name !== 'home') {
    const hasTab = routeList.some(item => item.name === route.name)
    if (!hasTab) {
      routeList.push({
        label: route.meta.title,
        name: route.name
      })
    }
  }
  activeRoute.value = route.name
})
</script>

<style lang="less" scoped>
  .el-tabs {
    --el-tabs-header-height: 20px;
    /deep/.el-tabs__header {
      margin: 0 0 5px 0;
    }
  }
</style>
