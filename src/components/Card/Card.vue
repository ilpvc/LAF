<template>

  <div id="body">
    <div class="card-header">
      <div class="header-detail">
        <n-avatar
            round
            size="large"
            :src="user?.header"
        />
        <div class="header-detail-dd">
          <a href="javascript:;">{{ user?.nickname }}</a>
          <i>{{ moment(post?.createdTime).format("yyyy-MM-DD") }}</i>
        </div>
      </div>
      <div>
        <n-popselect :options="options" trigger="click">
          <a href="javascript:;">
            <svg t="1678342889605" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="1097" id="mx_n_1678342889605" width="28" height="28">
              <path
                  d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                  p-id="1098" fill="#707070"></path>
            </svg>
          </a>
        </n-popselect>

      </div>
    </div>
    <div class="article-info">{{ post?.content }}</div>
    <div class="image">
      <n-image-group show-toolbar-tooltip>
        <n-space>
          <n-image
              v-for="image in images"
              width="150"
              :src="image"
          />
        </n-space>
      </n-image-group>
    </div>
    <div class="card-secondary-footer">
      <i style="color: #8590a6">浏览{{ post?.count }}次</i>
      <div style="width: 200px">
        <n-space justify="space-around">
          <n-popover trigger="hover" :show-arrow="false">
            <template #trigger>
              <a href="javascript:;" style="display: inline-block;height: 25px">
                <svg t="1678345978919" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="1188" width="28" height="28">
                  <path
                      d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                      p-id="1189"></path>
                </svg>
              </a>
            </template>
            <span>点赞</span>
          </n-popover>
          <n-popover trigger="hover" :show-arrow="false">
            <template #trigger>
              <a href="javascript:;" style="display: inline-block;height: 25px">
                <svg t="1678346064583" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="1368" width="30" height="30">
                  <path
                      d="M248.482281 938.000324c-4.306072 0-8.592702-1.336438-12.211113-3.967358-6.395664-4.646833-9.600659-12.521175-8.264221-20.314675l48.430012-282.363949L71.288626 431.382914c-5.66093-5.519714-7.698333-13.772678-5.255701-21.291932 2.444679-7.519254 8.943696-13.000082 16.768919-14.137998l283.508006-41.195238L493.099535 97.853655c3.498684-7.089465 10.720156-11.577686 18.627243-11.577686 7.907087 0 15.127536 4.489244 18.627243 11.577686l126.788661 256.904091 283.510052 41.195238c7.823176 1.137916 14.322194 6.618744 16.766872 14.137998 2.442632 7.519254 0.405229 15.773242-5.255701 21.291932L747.012502 631.354342l48.430012 282.363949c1.336438 7.7935-1.868557 15.667841-8.264221 20.314675-6.399757 4.646833-14.878872 5.257747-21.874193 1.582031L511.726777 802.298666 258.146385 935.614997C255.107165 937.211355 251.789607 938.000324 248.482281 938.000324zM130.422422 431.011454 313.25654 609.228415c4.894474 4.7727 7.128351 11.647271 5.974062 18.385742l-43.163055 251.64532 225.994104-118.811989c6.048763-3.180436 13.282514-3.180436 19.331277 0l225.992057 118.811989-43.163055-251.64532c-1.154289-6.738471 1.079588-13.613042 5.974062-18.385742l182.833095-178.216961-252.665557-36.71418c-6.767124-0.983397-12.614296-5.233188-15.641235-11.362792L511.726777 153.97893 398.729214 382.934482c-3.025916 6.129604-8.874111 10.379395-15.639189 11.362792L130.422422 431.011454z"
                      fill="#272636" p-id="1369"></path>
                </svg>
              </a>
            </template>
            <span>收藏</span>
          </n-popover>
          <n-popover trigger="hover" :show-arrow="false">
            <template #trigger>
              <a href="javascript:;" style="display: inline-block;height: 25px">
                <svg t="1678412647843" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="1136" width="36" height="35">
                  <path
                      d="M434.18 290.746c0.46 0 0.66 0.702 0.66 2.473l0.03 0.002s-0.03 66.913 0.018 67.888c1.119 32.365 25.545 59.232 56.9 62.544l0.197 0.021c80.164 7.61 150.936 39.973 210.353 96.186 42.732 40.429 79.164 92.45 108.372 154.731 0.942 2.009 0.643 5.035-1.454 5.035-0.823 0-1.923-0.466-3.333-1.642-62.421-52.004-182.216-91.49-307.218-94.098l-0.004 0.052c-34.071 0.246-62.603 28.337-63.816 62.884-0.051 0.967-0.025 63.097-0.018 84.13 0 1.536-0.134 2.303-0.646 2.303-0.483 0-1.306-0.683-2.67-2.05-52.271-52.291-212.932-205.238-212.932-205.238-3.746-4.842-5.803-10.958-5.803-17.335 0-7.47 2.763-14.421 7.79-19.63l0.032-0.017s160.344-145.506 211.36-196.534c1.019-1.017 1.728-1.705 2.181-1.705m-0.021-49.119c-13.809 0.006-26.223 5.423-36.9 16.098-47.924 47.937-197.52 183.89-208.95 194.27a48.492 48.492 0 0 0-3.048 2.9c-13.907 14.41-21.565 33.493-21.565 53.738 0 17.163 5.706 33.99 16.068 47.388a49.051 49.051 0 0 0 4.984 5.523c1.603 1.525 160.818 153.123 212.06 204.385 10.906 10.91 23.494 16.443 37.412 16.443 22.714 0 42.504-15.465 48.124-37.61 1.47-5.793 1.64-10.657 1.64-13.83v-1.656c-0.008-18.566-0.027-73.815 0.008-81.137 0.499-8.027 7.442-15.029 15.06-15.084 0.275-0.002 0.55-0.006 0.823-0.012C624.66 636.09 727.6 676.66 774.481 715.72c12.918 10.763 26.04 13.021 34.774 13.021 17.503 0 33.561-8.822 42.953-23.598 9.613-15.121 10.752-34.82 2.973-51.409-31.821-67.854-71.887-124.902-119.087-169.557-33.498-31.692-70.751-57.03-110.727-75.309-39.964-18.273-83.173-29.736-128.426-34.066-6.873-0.728-12.489-7.265-12.943-14.976-0.025-5.802-0.019-43.282-0.007-66.584a49.515 49.515 0 0 0-0.131-3.627c-0.22-3.905-0.802-7.575-1.767-11.137-5.874-21.698-25.578-36.853-47.913-36.853l-0.022 0.001z"
                      p-id="1137"></path>
                </svg>
              </a>
            </template>
            <span>回复</span>
          </n-popover>


        </n-space>
      </div>


    </div>
    <!--    评论区-->

    <div class="comment">
      <n-space vertical>
        <div class="comment-ss" @click="activate('right')"><strong
            style="font-size: 1.2rem;color: #121212">评论</strong>&nbsp; {{ 2 }}条/>>
        </div>
        <n-drawer v-model:show="show" :width="400" :placement="placement">
          <n-drawer-content title="评论">
            <div class="comment-detail">
              <div class="all-item">
                <n-scrollbar>
                  <div class="item" v-for="i in 10">
                    <div class="header-detail">
                      <n-avatar
                          round
                          size="medium"
                          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                      />
                      <div class="header-detail-dd">
                        <div>
                          <a href="javascript:;" style="size: 12px;color: #646cff">昵称</a>&nbsp;:
                          <n-text>你可真可爱</n-text>
                        </div>
                        <i style="size: 12px">8小时前发布</i>
                      </div>
                    </div>
                    <ul>
                      <li v-for="i in 2">
                        <div class="header-detail" style="margin-left: 40px">
                          <n-avatar
                              round
                              size="medium"
                              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                          />
                          <div class="header-detail-dd">
                            <div>
                              <a href="javascript:;" style="size: 12px;color: #646cff">昵称</a>&nbsp;回复&nbsp;
                              <a href="javascript:;" style="size: 12px;color: #646cff">另一个人</a>&nbsp;:
                              <n-text>你也很可爱</n-text>
                            </div>
                            <i style="size: 12px">8小时前发布</i>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </n-scrollbar>

              </div>

              <Editor></Editor>
            </div>
          </n-drawer-content>
        </n-drawer>
      </n-space>

    </div>
  </div>

</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {getCurrentInstance, onMounted, ref} from 'vue'
import {Post, User} from "@/Interface/ApiInterface";
import moment from "moment";
import {getCacheUserById} from "@/api/user";
import type {DrawerPlacement} from 'naive-ui'
import Editor from "@/components/Editor.vue";

const currentInstance = getCurrentInstance()

const placement = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  show.value = true
  placement.value = place
}
//下拉选项
let options = [
  {
    label: "关注",
    value: "Attention"
  },
  {
    label: "举报",
    value: "report"
  },
]

//控制是否展开
let show = ref(false)
//获取传入的数据
const props = defineProps(["pp"])
let post: Post = {
  ...props.pp
}

let pastTime = post.updatedTime
let images = post.image?.split(" ")
let user: User = {}

function getUser() {
  if (post.userId !== undefined) {
    getCacheUserById(post.userId).then(res => {
      user = {...res.data.item}
      currentInstance?.proxy?.$forceUpdate()
    })
  }
}


onMounted(() => {
  getUser()

})


</script>

<style scoped lang="less">
/*评论区*/
.comment {
  overflow-y: hidden;
  scroll-behavior: unset;

  .comment-ss {
    font-size: 0.8rem;
    transition: color 0.75s;
    color: #8590a6;

    &:hover {
      cursor: pointer;
      color: #646cff;
    }
  }
}

.comment-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .all-item {
    height: 100%;
    overflow: hidden;
  }

  Editor {
    height: 300px;
  }
}


/*卡片次级页脚*/
.card-secondary-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/*头像部分的姓名和发布时间*/
.header-detail-dd {
  display: flex;
  flex-direction: column;
  padding-left: 10px;

}

.header-detail-dd i {
  color: #8590a6;
}

/*卡片头部头像部分*/
.header-detail {
  display: flex;
  flex-direction: row;
}

/*卡片样式*/
#body {
  width: 700px;
  display: flex;
  /*min-height: 300px;*/
  flex-direction: column;
  padding: 10px;
  background-color: #ffffff;
  margin-bottom: 10px;
}

/*卡片头部*/
.card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


a {
  color: #121212;
}


</style>