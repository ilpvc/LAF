<script setup lang="ts">
import HeaderBar from "./components/Header/HeaderBar.vue"
import createTheme from "naive-ui"
</script>

<template>
  <n-config-provider :theme="createTheme">
    <header-bar></header-bar>
  </n-config-provider>
</template>

<style scoped>


</style>
