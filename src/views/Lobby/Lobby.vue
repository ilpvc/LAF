<template>
  <div class="index">
    <div>
      <Card v-for="i in 10"></Card>
    </div>
    <div>
      <MyAttention></MyAttention>
    </div>

  </div>
</template>

<script setup>
import Card from "@/components/Card/Card.vue";
import MyAttention from "@/components/MyAttention.vue";


</script>

<style scoped>
.index {
  display: flex;
  flex-direction: row;
}


</style>