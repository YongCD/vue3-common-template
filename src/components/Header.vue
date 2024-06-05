<template>
  <div class="header">
    <div class="l-content">
      <el-button size="default" @click="changeCollapse">
        <el-icon size="large">
          <component :is="isExpand"></component>
        </el-icon>
      </el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="item in routeInfo" :key="item.path" :to="{name: item.name}">
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../assets/images/user.png" alt="">
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item style="color:red;">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watchEffect} from 'vue'
import {storeToRefs} from 'pinia'
import useIsCollapseStore from '@/store/isCollapse'
import {useRoute} from 'vue-router'

  const routeInfo = ref()
  const route = useRoute()
  const {isCollapse} = storeToRefs(useIsCollapseStore())
  const isExpand = ref(isCollapse.value ? 'expand' : 'fold')

  function changeCollapse () {
    isCollapse.value = !isCollapse.value
    isExpand.value = isCollapse.value === true ? 'expand' : 'fold' 
  }

  watchEffect(() => {
    routeInfo.value = route.matched.filter(item => item.meta.title && !item.meta.hidden)
  })
</script>

<style lang="less" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .l-content,.r-content {
      display: flex;
      align-items: center;
    }
    img {
      height: 28px;
      width: 28px;
      border-radius: 50%;
    }
  }
  .el-breadcrumb {
    margin-left: 20px;
    /deep/.el-breadcrumb__inner {
      color: #ffffff;
    }
    /deep/.el-breadcrumb__inner:hover {
      color: #ffffff;
    }

    .el-breadcrumb__item:not(:last-child) {
      /deep/.el-breadcrumb__inner {
        color: #ffffff;
      }
      /deep/.el-breadcrumb__inner:hover {
        color: #79bbff;
      }
    }
  }
  .el-dropdown, .el-dropdown * {outline: none;}


  /* 面包屑过渡动画 */
  .breadcrumb-enter-active {
    transition: all 0.4s;
  }

  .breadcrumb-leave-active {
    transition: all 0.3s;
  }

  .breadcrumb-enter-from,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
</style>