<template>
  <div class="index">
    <div>
      <Card v-for="i in 10"></Card>
    </div>
    <div>
      <NavigationCard></NavigationCard>
      <LeiFengRank></LeiFengRank>
    </div>

  </div>
</template>

<script setup>
import Card from "@/components/Card/Card.vue";
import NavigationCard from "@/components/NavigationCard.vue";
import LeiFengRank from "@/components/LeiFengRank.vue";


</script>

<style scoped>
.index {
  display: flex;
  flex-direction: row;
}


</style>