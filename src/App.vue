<template>
  <div class="common-layout">
    <el-container>
      <Aside/>
      <el-container>
        <el-header height="50px">
          <Header/>
        </el-header>
        <el-main>
          <Tabs/>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Tabs from './components/Tabs.vue'
</script>

<style lang="less" scoped>
  .common-layout {
    height: 100%;

    & >.el-container {
      height: 100%;
    }

    .el-header {
      display: flex;
      align-items: center;
      background-color: #333;
    }
  }
</style>
