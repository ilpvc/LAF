<template>
  <n-loading-bar-provider>
    <div>
      <HeaderBar></HeaderBar>
      <div class="body">
        <div class="context">
          <router-view/>
        </div>
      </div>
    </div>
  </n-loading-bar-provider>
</template>

<script setup lang="ts">

import HeaderBar from "@/components/Header/HeaderBar.vue";
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import {getAllUser} from "@/api/user";

function init() {
  getAllUser()
}

onMounted(() => {
  init()
})
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