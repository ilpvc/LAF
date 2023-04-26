<template>
  <div id="essay-card">
    <n-skeleton v-if="!isLoad" text style="width: 60%;margin-bottom: 10px" />

    <n-skeleton v-if="!isLoad" text style="width: 60%;margin-bottom: 10px" />

    <n-skeleton v-if="!isLoad" text style="margin-bottom: 10px"/>

    <n-skeleton v-if="!isLoad" text style="width: 60%;margin-bottom: 10px" />
    <div v-if="isLoad" class="header">
      <div>
        {{ 'ilpvc' }}
      </div>
      <span>|</span>
      <div>
        {{moment(post.updatedTime).format('YYYY-MM-DD')}}
      </div>
      <span>|</span>
      <div>
        {{ post.tags }}
      </div>
    </div>


    <div v-if="isLoad" class="body">

      <div class="left">
        <div class="title">
          <h3>{{ post.title }}</h3>
        </div>

        <div class="content">
          {{post.content }}
        </div>

        <div class="footer">
          <ul class="footer">
            <li class="footer-item">
              <img class="image" src="./img/look.svg" alt="look">
              <span>{{ post.count }}</span>
            </li>
            <li class="footer-item">
              <img class="image" src="./img/dianzan.svg" alt="dianzan" style="position: relative;top: -2px"/>
              <span>
                {{ likes }}
              </span>
            </li>
            <li class="footer-item">
              <img class="image" src="./img/comment.svg" alt="comment">
              <span>
                {{ commentNums }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="right">
        <n-image
          class="right-image"
          src="https://picsum.photos/id/4/100/100">

        </n-image>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

import {onMounted, ref, unref} from "vue";
import {Post} from "@/Interface/ApiInterface";
import {getLikesByCondition} from "@/api/Likes";
import moment from "moment";
import {getCommentCondition} from "@/api/comment";



const props = defineProps(['post'])
const post =ref<Post>({...props.post})

const isLoad = ref(false)
let likes = ref<number>(0)
let commentNums = ref(0)
async function init(){
  const likesByCondition =await getLikesByCondition({postId:unref(post).id});
  likes = likesByCondition.data.list.length  //点赞数目
  const commentsRes = await getCommentCondition({postId: unref(post).id});
  commentNums.value = commentsRes.data.list.length
  isLoad.value = true
}

onMounted(()=>{
  init()
})

</script>

<style scoped lang="less">

#essay-card {
  display: flex;
  flex-direction: column;
  width: 580px;
  padding: 10px 10px 0;
  border-bottom: 1px solid #e5e6eb;

  .header {
    display: flex;
    flex-direction: row;
    color: #9599a7;

    span {
      padding: 0 15px;
    }
  }

  .body {
    display: flex;
    width: 580px;
    &:hover{
      cursor: pointer;
    }
    .left {
      width: 430px;

      .title {
        padding: 5px 0;
      }

      .content {
        padding: 6px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
        line-height: 1rem;
      }

      .footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        //padding: 5px 0;
        width: 400px;
        color: #8590a6;
        user-select: none;

        .footer-item {
          display: flex;
          align-items: center;
          width: 60px;

          .image {
            margin-right: 3px;
            opacity: 0.6;

          }
        }
      }
    }

    .right {
      display: flex;
      width: 150px;
      justify-content: center;
      align-items: center;

      .right-image {
        position: relative;
        top: -10px;
        border-radius: 10px;
      }
    }
  }

}
</style>