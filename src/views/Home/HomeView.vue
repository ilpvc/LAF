<template>
  <div>
    <HeaderBar></HeaderBar>
    <div class="body">
      <div class="context">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>

import HeaderBar from "@/components/Header/HeaderBar.vue";
import {useRouter} from "vue-router";
let router = useRouter()

router.push({path:'/user'})
</script>

<style scoped>
.body {
  position: absolute;
  top: 54px;
  width: 99vw;
  display: flex;
  justify-content: center;
}
.context {
  display: flex;
  min-width: 1000px;
  margin: 10px auto;
  flex-direction: column;
}
</style>