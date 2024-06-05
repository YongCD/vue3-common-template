<template>
  <el-aside width="collapse">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#545c64"
      :default-active="route.name" text-color="#fff" router>
      <MenuTree :menuList="menuList" />
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useIsCollapseStore from '@/store/isCollapse'
import MenuTree from './MenuTree.vue'
const route = useRoute()
const router = useRouter()
const menuList = router.options.routes[0].children
const { isCollapse } = storeToRefs(useIsCollapseStore())
</script>

<style lang="less" scoped>
.el-menu-vertical-demo {
  height: 100%;
  border-right: 0;

  span {
    color: #fff;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  border-right: 0;
}
</style>
