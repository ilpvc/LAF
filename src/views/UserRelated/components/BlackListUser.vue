<template>
  <div id="attention-user">
    <div class="header">
      <div class="header-image">
        <n-avatar
          round
          :size="45"
          :src="user.header"
        />
      </div>

      <div class="body">
        {{ user.nickname }}
      </div>
    </div>


    <div class="footer">
      <n-button v-if="isBlacklist" class="button-width button" @click="doBlacklist">
        已拉黑
      </n-button>
      <n-button v-if="!isBlacklist" class="button-width" @click="doBlacklist">
        拉黑
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMessage, useLoadingBar} from 'naive-ui'
import {onBeforeMount, reactive, ref, unref} from "vue";
import {User} from "@/Interface/ApiInterface";
import {addAttention, deleteAttention} from "@/api/attention";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {addBlacklist, deleteBlacklist} from "@/api/blacklist";

const loadingBar = useLoadingBar();
const webInfoStore = useWebInfoStore();
const message = useMessage();

//关注功能
const isBlacklist = ref(true)

async function doBlacklist() {
  loadingBar.start()
  if (unref(isBlacklist)) {
    await deleteBlacklist({userId: webInfoStore.getUser.id, otherUserId: user.id})
  } else {
    await addBlacklist({userId: webInfoStore.getUser.id, otherUserId: user.id})
  }
  isBlacklist.value = !unref(isBlacklist)

  loadingBar.finish()
}


const props = defineProps(['user']);
const user = reactive<User>({...props.user})
onBeforeMount(() => {


})

</script>

<style scoped lang="less">

#attention-user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  border-bottom: 1px solid #ececec;

  .header {
    display: flex;
    align-items: center;

    .header-image {

    }

    .body {
      font-size: 20px;
      font-family: "微软雅黑", serif;
      margin-left: 20px;
    }
  }

  .footer {
    .button {
      background-color: #8cc855;

    }

    .button-width {
      width: 80px;
      outline: none;
    }
  }
}
</style>