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
    <!--    评论区-->

    <div class="comment">
      <n-space align="center" justify="space-between">
        <div class="comment-ss" @click="activate('right')">
          <strong class="comment-strong">评论</strong>&nbsp; 查看/>>
        </div>
<!--        <div class="report">-->
<!--          <i @click="doDeletePost">-->
<!--            删除-->
<!--          </i>-->
<!--          <i @click="doReport">-->
<!--            举报-->
<!--          </i>-->
<!--        </div>-->
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
import 'md-editor-v3/lib/style.css';
import MdEditor from "md-editor-v3";
import {usePostStore} from "@/store/PostStore";
import {Comments, Post} from "@/Interface/ApiInterface";
import moment from "moment";
import {useRouter} from "vue-router";
import {onBeforeMount, ref} from "vue";
import {updatePost} from "@/api/posts";
import Editor from "@/components/Editor.vue";
import {useCommentStore} from "@/store/CommentStore";
import {DrawerPlacement,useLoadingBar} from "naive-ui";
import {getCommentCondition} from "@/api/comment";
import {getUserByCondition} from "@/api/user";
import {useUserDetailsStore} from "@/store/UserDetailsStore";


const userDetailsStore = useUserDetailsStore();
const loadingBar = useLoadingBar();
const router = useRouter();
const postStore = usePostStore();
const commentStore = useCommentStore();
const post: Post = postStore.getCurrentPost()
function goBack(){
router.go(-1)

}

const placement = ref<DrawerPlacement>('right')
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

//控制是否展开
let show = ref(false)
//刷新评论区
function doRefresh() {
  response.value = false
  show.value = false
  setTimeout(() => activate('right'), 200)
}


//跳转用户页面
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
    query: {
      name: nickname
    }
  })
}

onBeforeMount(()=>{
  let tempPost = post
  tempPost.count++
  updatePost(tempPost)
})
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
    padding-bottom: 10px;


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
    height: 740px;
    max-width: 1000px;
  }


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