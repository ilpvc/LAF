<template>
  <div id="ViewLearnPost">
    <div class="header">
      <div class="title">
        {{ post.title }}
      </div>
      <div class="detail">
        <div>
          作者: {{ post.userNickname }}
        </div>
        <div>
          日期: {{moment(post.updatedTime).format("YYYY-MM-DD")}}
        </div>
        <div>
          标签: {{post.tags}}
        </div>
      </div>
    </div>
    <MdEditor class="body" v-model="post.content" :toolbars="[]" preview-only/>
  </div>
</template>

<script setup lang="ts">
import 'md-editor-v3/lib/style.css';
import MdEditor from "md-editor-v3";
import {usePostStore} from "@/store/PostStore";
import {Post} from "@/Interface/ApiInterface";
import moment from "moment";


const postStore = usePostStore();
const post: Post = postStore.getCurrentPost()


</script>

<style scoped lang="less">
#ViewLearnPost {
  background-color: white;

  .header {
    display: flex;
    align-items: center;
    flex-direction: column;

    .title {
      font-weight: 900;
      font-size: 30px;
    }

    .detail {
      width: 300px;
      color: #8590a6;
      display: flex;
      justify-content: space-between;
    }
  }

  .body {
    height: 800px;
    max-width: 1000px;
  }
}
</style>