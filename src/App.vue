<template>
  <MHeader></MHeader>
  <Tab></Tab>
  <router-view></router-view>
</template>

<script>
import Header from '@/components/header/index.vue'
import Tab from '@/components/tab/index.vue'

export default {
  components: {
    MHeader: Header,
    Tab
  }
}
</script>

<style>
</style>
