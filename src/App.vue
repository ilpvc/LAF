<script setup lang="ts">
import {NDialogProvider,NMessageProvider} from "naive-ui"
import {useRouter} from "vue-router";

useRouter().push({name:'home'})

</script>

<template>

  <n-message-provider>
    <n-dialog-provider>
      <router-view/>
    </n-dialog-provider>
  </n-message-provider>
</template>

<style scoped>


</style>
