<template>
  <div class="index">
    <div>
      <Card v-show="load" v-for="port in ports" :key="port.id" v-bind:pp="port" ></Card>
    </div>
    <div>
      <NavigationCard></NavigationCard>
      <LeiFengRank></LeiFengRank>
    </div>
  </div>

</template>

<script setup>

import NavigationCard from "@/components/NavigationCard.vue";
import LeiFengRank from "@/components/LeiFengRank.vue";
import Card from "@/components/Card/Card.vue";




</script>

<style scoped>
.index {
  display: flex;
  flex-direction: row;
}
</style>