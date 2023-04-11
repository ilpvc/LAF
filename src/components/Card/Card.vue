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
    <div class="article-info">
      <n-tag :type="color.get(post?.type)" size="small">
        {{ type.get(post?.type) }}
      </n-tag>
      {{ post?.content }}
    </div>
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
              <a href="javascript:;" style="display: inline-block;height: 25px" @click="doThumb">
                <img :src="thumb? 'src/components/Card/img/thumb_check.svg' :'src/components/Card/img/thumb.svg'"
                     alt="点赞">
              </a>
            </template>
            <span>点赞</span>
          </n-popover>
          <n-popover trigger="hover" :show-arrow="false">
            <template #trigger>
              <a href="javascript:;" style="display: inline-block;height: 25px" @click="doCollect">
                <img
                    :src="collection ? 'src/components/Card/img/collection_check.svg':'src/components/Card/img/collection.svg'"
                    alt="收藏">
              </a>
            </template>
            <span>收藏</span>
          </n-popover>
          <n-popover trigger="hover" :show-arrow="false">
            <template #trigger>
              <a href="javascript:;" style="display: inline-block;height: 25px" @click="activate('right')">
                <img src="./img/response.svg" alt="回复">
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
import {usePostStore} from "@/store/PostStore";
import {useMessage} from "naive-ui";
import {addCollections, deleteCollections, getCollectionByCondition} from "@/api/Collection";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {addLikes, deleteLikes, getLikesByCondition} from "@/api/Likes";
import {debounce} from "lodash";
import {updatePost} from "@/api/posts";

const webInfoStore = useWebInfoStore()
const message = useMessage()
const currentInstance = getCurrentInstance()
const postStore = usePostStore()
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

let images = post.image?.split(" ")
let user: User = {}

//帖子类型和标签颜色
const type = postStore.getPostType
const color = postStore.getPostColor

//初始化
function init() {
  if (post.userId !== undefined) {
    getCacheUserById(post.userId).then(res => {
      user = {...res.data.item}
      currentInstance?.proxy?.$forceUpdate()
    })
  }
  //如果没有登录就不显示是否点赞
  if (webInfoStore.getUser.id!==undefined){
    getCollectionByCondition({userId: webInfoStore.getUser.id, postId: post.id}).then(res => {
      if (res.data.num !== 0) {
        collection.value = true
      }
    })
    getLikesByCondition({userId: webInfoStore.getUser.id, postId: post.id}).then(res => {
          if (res.data.num !== 0) {
            thumb.value = true
          }
        }
    )
  }

  post.count = post.count+1
  updatePost(post).then(res=>{
  })

}

//是否点赞
const thumb = ref(false)
const collection = ref(false)

//点赞和取消点赞
function doThumb() {
  if (webInfoStore.getUser.id===undefined){
    message.error("你还没有登录，无法点赞")
    return
  }
  thumb.value = !thumb.value
  handleThumb()
}

//收藏和取消收藏
function doCollect() {
  if (webInfoStore.getUser.id===undefined){
    message.error("你还没有登录，无法点赞")
    return
  }
  collection.value = !collection.value
  handleCollection()
}
//对点赞操作进行防抖
const handleThumb = debounce(()=>{
  if (thumb.value) {
    addLikes({userId: webInfoStore.getUser.id, postId: post.id}).then(res => {
      if (res.code === 200) message.success('点赞成功')
      else message.error('点赞失败')
    })
  } else {
    deleteLikes({userId: webInfoStore.getUser.id, postId: post.id}).then(res => {
      if (res.code === 200) message.warning('取消点赞')
      else message.error('取消失败')
    })
  }
}, 500)
//对收藏操作进行防抖
const handleCollection = debounce(()=>{
  if (collection.value) {
    addCollections({userId: webInfoStore.getUser.id, postId: post.id}).then(res => {
      if (res.code === 200) message.success('收藏成功')
      else message.error('收藏失败')
    })
  } else {
    deleteCollections({userId: webInfoStore.getUser.id, postId: post.id}).then(res => {
      if (res.code === 200) message.warning('取消收藏')
      else message.error('取消失败')
    })
  }
}, 500)


onMounted(() => {
  init()

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