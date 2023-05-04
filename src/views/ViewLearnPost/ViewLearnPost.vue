<template>
  <div id="ViewLearnPost">
    <n-button size="small" class="return" @click="goBack">&lang;&lang; 返回</n-button>
    <div class="header">

      <div class="title">
        {{ post.title }}
      </div>
      <div class="detail">
        <div class="detail-item">
          作者: {{ post.userNickname }}
        </div>
        <div class="detail-item">
          日期: {{moment(post.updatedTime).format("YYYY-MM-DD")}}
        </div>
        <div class="detail-item">
          标签: <n-tag style="margin-right: 3px" size="small" type="success" v-for="tag in post.tags?.split(',')">{{tag}}</n-tag>
        </div>
      </div>
    </div>
    <MdEditor class="body" v-model="post.content" :toolbars="[]" preview-only read-only/>
  </div>
</template>

<script setup lang="ts">
import 'md-editor-v3/lib/style.css';
import MdEditor from "md-editor-v3";
import {usePostStore} from "@/store/PostStore";
import {Post} from "@/Interface/ApiInterface";
import moment from "moment";
import {useRouter} from "vue-router";

const router = useRouter();
const postStore = usePostStore();
const post: Post = postStore.getCurrentPost()
function goBack(){
router.go(-1)

}
</script>

<style scoped lang="less">
#ViewLearnPost {
  background-color: white;
  .return {
    user-select: none;
    margin: 2px 10px;
    &:hover{
      cursor: pointer;
    }
  }
  .header {
    display: flex;
    align-items: center;
    flex-direction: column;



    .title {
      font-weight: 900;
      font-size: 30px;
    }

    .detail {
      color: #8590a6;
      display: flex;

      .detail-item {
        margin: 0 15px;
      }
    }
  }

  .body {
    height: 780px;
    max-width: 1000px;
  }
}
</style>