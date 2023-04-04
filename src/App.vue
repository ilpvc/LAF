<script setup lang="ts">
import {NDialogProvider, NMessageProvider} from "naive-ui"
import {useRouter} from "vue-router";

useRouter().push({name: 'index'})

</script>

<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-dialog-provider>
        <router-view/>
      </n-dialog-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<style scoped>


</style>
