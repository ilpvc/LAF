<template>

  <div id="body">
    <!--        举报模态框-->
    <n-modal v-model:show="showReportModal" preset="dialog" title="Dialog" :auto-focus="false">
      <template #header>
        <div>举报</div>
      </template>
      <n-form ref="formRef" :model="report" :rules="reportRule">
        <n-form-item path="user" label="举报人">
          <n-input v-model:value="webInfoStore.getUser.nickname" @keydown.enter.prevent disabled/>
        </n-form-item>
        <n-form-item path="post" label="贴子">
          <n-input v-model:value="post.content" type="textarea" disabled/>
        </n-form-item>
        <n-form-item path="content" label="举报原因">
          <n-input v-model:value="report.content" type="textarea"
                   placeholder="举报原因(不得少于10字,最大100字)"/>
        </n-form-item>
      </n-form>
      <template #action>
        <n-button type="info" @click="submitReport">提交</n-button>
      </template>
    </n-modal>

    <div class="card-header">
      <div class="header-detail">
        <n-avatar
          round
          size="large"
          :src="user?.header"
        />
        <div class="header-detail-dd">
          <div>
            <i class="nickname" @click="doGetUser(user?.nickname)">{{ user?.nickname }}</i>&nbsp;
            <n-tag class="item_attention" v-if="!attentionsSet.has(user.id)" type="info" size="small"
                   @click="doAddAttention(user?.id)"> 关注
            </n-tag>
            <n-tag class="item_attention" v-if="attentionsSet.has(user.id)" type="success" size="small"
                   @click="doDeleteAttention(user?.id)"> 已关注
            </n-tag>
          </div>
          <i>{{ moment(post?.createdTime).format("yyyy-MM-DD") }}</i>
        </div>
      </div>
      <div class="status_icon">
        <n-popover trigger="hover" :show-arrow="false" v-if="post.status===5">
          <template #trigger>
            <img src="./img/finish.svg" alt="物品已找回">
          </template>
          <span>物品已找回</span>
        </n-popover>

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
              <n-button :disabled="post.userId!==webInfoStore.getUser.id||post.status===5" text :focusable="false"
                 @click="doAccomplish">
                <img v-if="post.status===1" src="./img/response.svg" alt="回复">
                <img v-if="post.status===5" src="./img/accomplish.svg" alt="回复">
              </n-button>
            </template>
            <span>已寻回</span>
          </n-popover>


        </n-space>
      </div>


    </div>
    <!--    评论区-->

    <div class="comment">
      <n-space align="center" justify="space-between">
        <div class="comment-ss" @click="activate('right')">
          <strong class="comment-strong">评论</strong>&nbsp; 查看/>>
        </div>
        <div class="report">
          <i @click="doDeletePost">
            删除
          </i>
          <i @click="doReport">
            举报
          </i>
        </div>
      </n-space>
    </div>
    <n-drawer v-model:show="show" :width="400" :placement="placement" :auto-focus="false">
      <n-drawer-content title="评论">
        <div class="comment-detail">
          <div class="all-item">
            <n-button class="responsePost" @click="showEditor(1,'原帖',1,0)">
              回复原帖
            </n-button>
            <n-scrollbar>
              <div class="item" v-for="comment in comments" :key="comment">
                <div class="header-detail">
                  <n-avatar
                    round
                    size="medium"
                    :src="comment.userHeader"
                  />
                  <div class="header-detail-dd">

                    <div class="detail-and-response">
                      <div>
                        <a href="javascript:;"
                           style="size: 12px;color: #646cff" @click="doGetUser(comment.userName)">{{
                            comment.userName
                          }}</a>&nbsp;:
                        <n-ellipsis style="max-width: 100px">{{ comment.content }}</n-ellipsis>
                      </div>
                      <i class="showResponse"
                         @click="showEditor(comment.commenterId,comment.userName,2,comment.id)">回复</i>
                    </div>
                    <i style="size: 12px">{{ moment(comment.createdTime).format("yyyy-MM-DD") }}</i>
                  </div>
                </div>
                <ul>
                  <li v-for="cc in comment.childComment" :key="cc.id">
                    <div class="header-detail" style="margin-left: 40px">
                      <n-avatar
                        round
                        size="medium"
                        :src="cc.userHeader"
                      />
                      <div class="header-detail-dd">
                        <div class="detail-and-response">
                          <div>
                            <a href="javascript:;"
                               style="size: 12px;color: #646cff" @click="doGetUser(cc.userName)">{{ cc.userName }}</a>&nbsp;回复&nbsp;
                            <a href="javascript:;"
                               style="size: 12px;color: #646cff" @click="doGetUser(cc.userName2)">{{ cc.userName2 }}</a>&nbsp;:
                            <n-ellipsis style="max-width: 100px">{{
                                cc.content
                              }}
                            </n-ellipsis>
                          </div>
                          <i class="showResponse res2"
                             @click="showEditor(cc.commenterId,cc.userName,2,comment.id)">回复</i>
                        </div>
                        <i style="size: 12px">{{
                            moment(cc.createdTime).format("yyyy-MM-DD")
                          }}</i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </n-scrollbar>

          </div>
          <transition name="slide-fade">
            <Editor v-if="response" @refresh="doRefresh"></Editor>
          </transition>
        </div>
      </n-drawer-content>
    </n-drawer>

  </div>

</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {computed, getCurrentInstance, onBeforeMount, onMounted, reactive, ref, unref} from 'vue'
import {Attention, AttentionQuery, Attribute, Comments, Post, Report, User} from "@/Interface/ApiInterface";
import moment from "moment";
import {getCacheUserById, getUserByCondition} from "@/api/user";
import type {DrawerPlacement} from 'naive-ui'
import Editor from "@/components/Editor.vue";
import {usePostStore} from "@/store/PostStore";
import {useMessage, useLoadingBar, useDialog, FormRules, FormInst} from "naive-ui";
import {addCollections, deleteCollections, getCollectionByCondition} from "@/api/Collection";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {addLikes, deleteLikes, getLikesByCondition} from "@/api/Likes";
import {debounce} from "lodash";
import {deletePost, updatePost} from "@/api/posts";
import {useUserDetailsStore} from "@/store/UserDetailsStore";
import {useRouter} from "vue-router";
import {addAttention, deleteAttention, getAttentionCondition} from "@/api/attention";
import {useAttentionStore} from "@/store/AttentonStore";
import {getLoginUser} from "@/utils/auth";
import {addReport, getReportByCondition} from "@/api/Report";
import {getCommentCondition} from "@/api/comment";
import {useCommentStore} from "@/store/CommentStore";
import {getByKey, updateAttrByKey} from "@/api/attribute";

const router = useRouter()
const userDetailsStore = useUserDetailsStore()
const loadingBar = useLoadingBar()
const dialog = useDialog();
const webInfoStore = useWebInfoStore()
const message = useMessage()
const currentInstance = getCurrentInstance()
const postStore = usePostStore()
const placement = ref<DrawerPlacement>('right')

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
let user = reactive<User>({})

//帖子类型和标签颜色
const type = postStore.getPostType
const color = postStore.getPostColor


// let isMyPost = computed(()=>{
//   return user.id===webInfoStore.getUser.id
// })
//初始化
function init() {
  if (post.userId !== undefined) {
    getCacheUserById(post.userId).then(res => {
      user = {...res.data.item}
      currentInstance?.proxy?.$forceUpdate()
    })
  }
  //如果没有登录就不显示是否点赞
  if (webInfoStore.getUser.id !== undefined) {
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

  post.count = post.count + 1
  updatePost(post).then(res => {
  })

}

//是否点赞
const thumb = ref(false)
const collection = ref(false)

//点赞和取消点赞
function doThumb() {
  if (webInfoStore.getUser.id === undefined) {
    message.error("你还没有登录，无法点赞")
    return
  }
  thumb.value = !thumb.value
  handleThumb()
}

//收藏和取消收藏
function doCollect() {
  if (webInfoStore.getUser.id === undefined) {
    message.error("你还没有登录，无法点赞")
    return
  }
  collection.value = !collection.value
  handleCollection()
}

//对点赞操作进行防抖
const handleThumb = debounce(() => {
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
const handleCollection = debounce(() => {
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

//根据昵称跳转个人详情
async function doGetUser(nickname: string) {
  loadingBar.start()
  const userConditionRes = await getUserByCondition({nickname: nickname})
  if (userConditionRes.data.list !== null)
    userDetailsStore.setUser(userConditionRes.data.list[0])
  loadingBar.finish()
  await router.push({
    name: 'blank',
    params: {
      name: nickname
    },
    query:{
      name:nickname
    }
  })
}

let attentions: Attention[] = useAttentionStore().getAttentions();
let attentionsSet = new Set()
for (let attention of attentions) {
  attentionsSet.add(attention.attentionedUserId)
}

//新增关注
async function doAddAttention(id: number) {
  loadingBar.start()
  const attention: Attention = {}
  await debounce(async () => {
    attention.attentionUserId = useWebInfoStore().getUser.id
    attention.attentionedUserId = id
    const res = await addAttention(attention);
    if (res.code === 200)
      message.success(res.message)
    else {
      message.error(res.message)
      loadingBar.error()
    }

    const axiosResponse = await getAttentionCondition({attentionUserId: useWebInfoStore().getUser.id});
    useAttentionStore().setAttentions(axiosResponse.data.list)
    attentions = useAttentionStore().getAttentions()
    attentionsSet.clear()
    for (let attention of attentions) {
      attentionsSet.add(attention.attentionedUserId)
    }
    loadingBar.finish()
    currentInstance?.proxy?.$forceUpdate()
  }, 500)()

}

//删除关注
async function doDeleteAttention(id: number) {
  loadingBar.start()
  const attentionQuery: AttentionQuery = {}
  await debounce(async () => {
    attentionQuery.attentionUserId = useWebInfoStore().getUser.id
    attentionQuery.attentionedUserId = id
    const res = await deleteAttention(attentionQuery);
    if (res.code === 200) {
      message.success(res.message)
    } else {
      message.error(res.message)
    }
    const axiosResponse = await getAttentionCondition({attentionUserId: useWebInfoStore().getUser.id});
    useAttentionStore().setAttentions(axiosResponse.data.list)
    attentions = useAttentionStore().getAttentions()
    attentionsSet.clear()
    for (let attention of attentions) {
      attentionsSet.add(attention.attentionedUserId)
    }
    loadingBar.finish()
    currentInstance?.proxy?.$forceUpdate()
  }, 500)()
}

const showReportModal = ref(false)

//举报功能
async function doReport() {
  if (getLoginUser() === undefined) {
    message.error('你还没有登录,不能举报')
  } else if (JSON.parse(getLoginUser()).id === post.userId) {
    message.warning('不能举报自己的贴子')
  } else {
    const res = await getReportByCondition({userId: webInfoStore.getUser.id, postId: post.id})
    if (res.data.num !== 0) {
      message.warning('你已经举报过该贴,请等待管理员处理')
    } else {
      showReportModal.value = true
    }

  }
}

const formRef = ref<FormInst | null>(null)
const report = ref<Report>({
  userId: webInfoStore.getUser.id,
  postId: post.id,
  content: '',
  status: 1
})
const reportRule: FormRules = {
  content: [{
    required: true,
    trigger: 'blur',
    message: '格式错误,请输入10到100字的举报原因',
    validator(rule, value: string) {
      return !(value.length < 10 || value.length > 100)
    }
  }]
}

//向后端发起举报请求
function submitReport() {
  loadingBar.start()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      await addReport(unref(report))
      message.success('举报成功')
      showReportModal.value = false
      loadingBar.finish()
    } else {
      message.error('举报失败')
    }
  })
}

const commentStore = useCommentStore();
let comments: Comments[] = []
//弹出评论框
const activate = async (place: DrawerPlacement) => {
  loadingBar.start()
  const resComment = await getCommentCondition({postId: post.id});
  await commentStore.setComment(resComment.data.list)
  comments = commentStore.getComments()
  show.value = true
  placement.value = place
  loadingBar.finish()
}


const response = ref(false)

//展示输入框
async function showEditor(id: number, name: string, type: number, parentId: number) {
  response.value = false
  commentStore.setCurrentCommentType(type)
  commentStore.setCurrentPost(post)
  commentStore.setCurrentCommenter(id, name)
  commentStore.setCurrentParentId(parentId)
  setTimeout(() => response.value = true, 500)
}
//刷新评论区
function doRefresh() {
  response.value = false
  show.value = false
  setTimeout(() => activate('right'), 200)
}


//删除自己的帖子
function doDeletePost(){
  if (user.id!==webInfoStore.getUser.id){
    message.error('不能删除别人的帖子')
    return
  }
  dialog.warning({
    title:'警告',
    content:'确认删除？',
    positiveText:'确认',
    negativeText:'取消',
    onPositiveClick:async ()=>{
      loadingBar.start()
      if (post.id != null) {
        await deletePost(post.id)
        message.success('删除成功')
        location.reload()
        loadingBar.finish()
      }else{
        message.error('删除失败')
        loadingBar.error()
      }
    }
  })
}


//帖子完成点击事件
function doAccomplish(){
  dialog.success({
    title:'确认',
    content:'确认物品已找回,完成后帖子将不在大厅展示',
    negativeText:'确认',
    positiveText:'取消',
    autoFocus:false,
    onNegativeClick:async ()=>{
      loadingBar.start()

      //完成帖子,完成数加一
      const allCompleteRes  = await getByKey('complete_overall')
      const nowDayCompleteRes = await getByKey('complete_nowaday')
      let nowDayAttr:Attribute = nowDayCompleteRes.data.list[0]
      let allAttr:Attribute = allCompleteRes.data.list[0]
      nowDayAttr.numberValue=1+ (nowDayAttr.numberValue || 0)
      allAttr.numberValue = 1+ (allAttr.numberValue||0)
      await updateAttrByKey(nowDayAttr)
      await updateAttrByKey(allAttr)


      post.status=5
      await updatePost(post)
      loadingBar.finish()
      location.reload()
    },

  })
}

onBeforeMount(() => {
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
    user-select: none;
    &:hover {
      cursor: pointer;
      color: #646cff;
    }

    .comment-strong {
      font-size: 1.2rem;
      color: #121212;
      user-select: none;
    }

  }

  .report {
    margin-right: 10px;

    i {
      color: #8590a6;
      margin: 0 8px;
      user-select: none;
      &:hover {
        color: red;
        cursor: pointer;
      }
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


    .item {
      margin-bottom: 15px;
    }

    .responsePost {
      outline: none;
      font-size: 16px;
      margin-bottom: 20px;

      &:hover {
        outline: none;
        cursor: pointer;
      }
    }
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
  //width: 300px;


  .detail-and-response {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .showResponse {
      opacity: 0;
    }

    &:hover .showResponse {
      opacity: 1;
    }

    i {
      &:hover {
        color: #646cff;
        cursor: pointer;
      }
    }
  }

  .item_attention {
    &:hover {
      cursor: pointer;
    }
  }

  .nickname {
    color: #121212;
    user-select: none;
    &:hover {
      cursor: pointer;
    }
  }
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

  .status_icon {
    position: relative;
    top: -12px;
    right: -12px;

  }
}


a {
  color: #121212;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>