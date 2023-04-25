<template>
  <div id="blacklist">
    <!--头部-->
    <div class="header">
      <span>拉黑用户</span> {{ attentionUsers.length }}
    </div>
    <div class="body">
      <n-scrollbar style="max-height: 700px">
        <n-empty v-if="attentionUsers.length===0" description="什么都没有"></n-empty>
        <BlackListUser v-if="attentionUsers.lengtn!==0" v-for="user of attentionUsers" :key="user.id" :user="user"></BlackListUser>
      </n-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">

import {User} from "@/Interface/ApiInterface";
import {onBeforeMount, ref} from "vue";
import {useUserRelatedStore} from "@/store/UserRelatedStore";
import BlackListUser from "../components/BlackListUser.vue";

const relatedStore = useUserRelatedStore();

//加载关注用户信息
const attentionUsers = ref<User[]>()


onBeforeMount(()=>{
  attentionUsers.value = relatedStore.getUsers()
})
</script>

<style scoped lang="less">

#blacklist {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 730px;
  height: 800px;
  background-color: white;
  padding: 15px;

  .header {
    padding: 4px 0;
    border-bottom: 1px solid #ececec;
    width: 700px;
    background-color: white;

    span {
      font-size: 20px;
      font-family: "JetBrains Mono Light", ui-sans-serif;
      padding-right: 10px;
    }

  }

  .body {
  }
}

</style>