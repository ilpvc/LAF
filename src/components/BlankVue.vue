<template>

</template>

<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {onBeforeMount} from "vue";

const route = useRoute();
console.log(route)
useRouter()
onBeforeMount(() => {
  useRouter().push({
    name: 'user',
    params: {
      name: route.query.name
    }
  })
})
</script>

<style scoped>

</style>