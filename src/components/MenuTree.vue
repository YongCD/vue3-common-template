<template>
  <template v-for="item in menuList" :key="item.name">
    <el-menu-item v-if="!item.children" :index="item.name" :route="{name: `${item.name}`}">
      <el-icon>
        <component :is="item.meta!.icon"></component>
      </el-icon>
      <template #title>{{ item.meta!.title }}</template>
    </el-menu-item>

    <el-sub-menu v-if="item.children" :index="item.name">
      <template #title>
        <el-icon>
          <component :is="item.meta!.icon"></component>
        </el-icon>
        <span>{{ item.meta!.title }}</span>
      </template>
      <MenuTree :menuList="item.children"/>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
defineProps(['menuList'])
</script>
