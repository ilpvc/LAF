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
        <div>
          {{ user.nickname }}
        </div>
        <div class="motor">
          {{user.otherContacts}}
        </div>
      </div>
    </div>


    <div class="footer">
      <n-button v-if="isAttention" class="button-width button" @click="doAttention">
        已关注
      </n-button>
      <n-button v-if="!isAttention" class="button-width" @click="doAttention">
        关注
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

const loadingBar = useLoadingBar();
const webInfoStore = useWebInfoStore();
const message = useMessage();

//关注功能
const isAttention = ref(true)

async function doAttention() {
  loadingBar.start()
  if (unref(isAttention)) {
    await deleteAttention({attentionUserId: webInfoStore.getUser.id, attentionedUserId: user.id})
  } else {
    await addAttention({attentionUserId: webInfoStore.getUser.id, attentionedUserId: user.id})
  }
  isAttention.value = !unref(isAttention)
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
      .motor {
        font-size: 16px;
        color: #8590a6;
      }
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