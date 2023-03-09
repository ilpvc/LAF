<template>
<Card v-for="i in 10"></Card>
</template>

<script setup>

import Card from "@/components/Card/Card.vue";
</script>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>