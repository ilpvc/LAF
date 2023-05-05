<template>

  <div id="HeaderBody">
    <!--    logo-->
    <n-avatar
        size="48px"
        src="src/components/Header/img/logo.png"
    />
    <!--    导航选项-->
    <ul class="Tabs">
      <li class="Tab-items">
        <router-link to="/home" class="Tab-link" @click="changeNav(0)" :class="{'on-focus':isActive[0]}">首页</router-link>
      </li>
      <li class="Tab-items">
        <router-link to="/home" class="Tab-link" @click="changeNav(1)" :class="{'on-focus':isActive[1]}">寻物</router-link>
      </li>
      <li class="Tab-items">
        <router-link to="/home" class="Tab-link" @click="changeNav(2)" :class="{'on-focus':isActive[2]}">招领</router-link>
      </li>
      <li class="Tab-items">
        <router-link to="/home" class="Tab-link" @click="changeNav(3)" :class="{'on-focus':isActive[3]}">娱乐大厅</router-link>
      </li>
      <li class="Tab-items">
        <a class="Tab-link" @click="changeNav(4)" :class="{'on-focus':isActive[4]}">学习交流</a>
      </li>
      <li class="Tab-items">
        <router-link to="/mall" class="Tab-link" @click="changeNav(5)" :class="{'on-focus':isActive[5]}">积分商城</router-link>
      </li>
    </ul>
    <!--搜索框-->
    <div class="SearchBar">
      <form>
        <input class="SearchBox" v-model="searchInfo" @keyup.enter="doSearch"/>
        <n-button type="info" attr-type="submit"
                  style="outline: none" @click="doSearch">
          搜索
        </n-button>
      </form>
    </div>
    <!--通知图标等-->
    <n-space :size="30" align="center" justify="center">
      <a class="Tab-icon" @click="toMessage">
        <n-badge :value="value" :max="15">
          <img src="./img/notice.svg" alt="消息">
        </n-badge>
      </a>

      <!--    头像和下拉框  -->
      <n-popover placement="bottom" trigger="click">
        <template #trigger>
          <a href="javascript:;" class="Tab-avatar">
            <n-avatar
                round
                size="medium"
                :src="image.pop()"
            >
            </n-avatar>
          </a>
        </template>
        <!--        下拉选项-->
        <div>
          <ul class="Tab-select">
            <li class="Select-item">
              <a @click="beforeLeaveInUserDetails">
                <img src="./img/home.svg" alt="主页">
                我的主页
              </a>
            </li>
            <li class="Select-item">
              <a @click="toSetting">
                <img src="./img/settings.svg" alt="设置">
                用户设置
              </a>
            </li>
            <li class="Select-item">
              <a @click="toAttention">
                <img src="./img/settings.svg" alt="关注">
                我的关注
              </a>
            </li>
            <li class="Select-item">
              <a @click="logout">
                <img src="./img/login.svg" alt="登录">
                用户登录
              </a>
            </li>
            <li class="Select-item">
              <a @click="logout">
                <img src="./img/exit.svg" alt="退出">
                退出登录
              </a>
            </li>
          </ul>
        </div>
      </n-popover>

    </n-space>
  </div>

</template>

<script setup lang="ts">
import {ref, unref} from "vue";
import {useWebStore} from "@/store/WebStore";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {removeToken, removeUser} from "@/utils/auth";
import {useLoadingBar,useDialog} from "naive-ui";
import {getAllNormalPost, getPostByCondition, pagePostCondition} from "@/api/posts";
import {usePostStore} from "@/store/PostStore";
import {useRouter} from "vue-router";
import {useUserDetailsStore} from "@/store/UserDetailsStore";
import {useUserRelatedStore} from "@/store/UserRelatedStore";
import {Nav} from "../../views/UserRelated/enums/nav";
import {getAttentionCondition} from "@/api/attention";
import {getUserByCondition} from "@/api/user";
import {blacklistCondition} from "@/api/blacklist";
import {useLikesStore} from "@/store/LikesStore";
import {useCommentStore} from "@/store/CommentStore";

const webInfoStore = useWebInfoStore()
const value = ref(12)
const webStore = useWebStore()
const postStore = usePostStore()
const image = ['src/components/Header/img/default_header.svg']
const loadBar = useLoadingBar()
const router = useRouter()
const dialog = useDialog();
if (webInfoStore.getUser !== undefined && webInfoStore.getUser.header !== undefined) {
  image.push(<string>webInfoStore.getUser.header)
}

//进入用户详情页之前
async function beforeLeaveInUserDetails() {

  loadBar.start()
  await getAllNormalPost().then(res => {
    postStore.setPosts(res.data.list)
    if (res.code === 400) {
      loadBar.error()
    }
  })
  if (webInfoStore.getUser !== undefined) {
    useUserDetailsStore().setUser(webInfoStore.getUser)
    loadBar.finish()
    await router.push({name: 'blank', params: {name: webInfoStore?.getUser?.nickname},query:{name:webInfoStore?.getUser?.nickname}})
  }

}


const isActive = ref([
  true,
  false,
  false,
  false,
  false,
  false,
  false,
])

const likesStore = useLikesStore();
const commentStore = useCommentStore();
//切换页面
async function changeNav(nav: number) {
  loadBar.start()
  if (nav<=3){
    webStore.changePage(nav)
  }
  isActive.value = [false, false, false, false, false, false,false]
  for (let i = 0; i < unref(isActive).length; i++) {
    if (i === nav) {
      unref(isActive).splice(i,1,true)
    }
  }
  if (nav===4){
    const postsRes = await getPostByCondition({types:[4]});
    const pagePost = await pagePostCondition({types:[4]},1,5);
    postStore.setCurrentPagePost(pagePost.data.items.records)
    postStore.setPages(pagePost.data.items.pages)
    await postStore.setLearnPost(postsRes.data.list)
    /**
     * 后端新增字段不需要单独查询
     */
    // const allLikesRes = await allLikes();
    // likesStore.setLikes(allLikesRes.data.list)
    // const allCommentsRes = await getAllComments();
    // commentStore.setAllComments(allCommentsRes.data.list)
    await router.push({
      name:'learn'
    })
  }
  loadBar.finish()

}


//退出登录
function logout() {
  dialog.warning({
    title:'退出登录',
    content: '确认退出登录,登录信息将被清除',
    negativeText: '取消',
    positiveText:'确认',
    onPositiveClick:()=>{
      removeToken()
      removeUser()
      //将user值设为空
      webInfoStore.setUser({})
      router.push({path:'/login'})
    }
  })

}

//搜索框内容
const searchInfo = ref()

async function doSearch() {
  loadBar.start()
  await getPostByCondition({searchInfo: searchInfo.value,status:[1],types:[1,2,3]}).then(res => {
    postStore.setSearchPost(res.data.list)
  })
  loadBar.finish()
  await router.push(
      {
        name: `search`,
        // params: {
        //   info: searchInfo.value
        // }
      })
  // searchInfo.value = ''

}

const relatedStore = useUserRelatedStore();
//跳转到关注页面
async function toAttention(){
  loadBar.start()
  const attentionRes = await getAttentionCondition({attentionUserId:webInfoStore.getUser.id});
  const useIds = attentionRes.data.list.map((v)=>v.attentionedUserId)
  const userRes = await getUserByCondition({userIds: useIds});
  const users = userRes.data.list
  relatedStore.setUsers(users)
  relatedStore.setNav(Nav.ATTENTION)
  await router.push({
    name:'attention'
  })
  loadBar.finish()
}

//跳转到设置页面
async function toSetting(){
  loadBar.start()
  const blacklistUserListRes = await blacklistCondition({userId: webInfoStore.getUser.id});
  const blacklists = blacklistUserListRes.data.list
  const userIds = blacklists.map((v)=>v.otherUserId)
  if (userIds.length!==0){
    const userRes = await getUserByCondition({userIds: userIds});
    const users = userRes.data.list
    relatedStore.setUsers(users)
  }else {
    relatedStore.setUsers([])
  }

  await router.push({
    name: 'setting'
  })
  loadBar.finish()
}

//跳转到消息页面
const userRelatedStore = useUserRelatedStore()
function toMessage(){
  userRelatedStore.setNav(1)
  router.push({
    name:'message'
  })
}

</script>

<style scoped lang="less">

/*头像下来选项*/
.Tab-select {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 90px;
}

.Select-item {
  height: 36px;

  img {
    margin-right: 10px;
  }

  a:hover {
    cursor: pointer;
  }
}

.Select-item a {
  display: flex;
  line-height: 36px;
  align-items: center;
  color: #8590a6;
  transition: color 1s;
  justify-items: left;
}

.Select-item a:hover {
  color: #646cff;
}


/*顶部头像*/
.Tab-avatar {
  display: inline-block;
  padding-top: 7px;
}

/*顶部通知样式*/
.Tab-icon {
  padding-left: 10px;

  &:hover {
    cursor: pointer;
  }
}

/*搜索框样式*/
.SearchBox {
  box-sizing: border-box;
  background-color: #f6f6f6;
  border-radius: 30px;
  border: 1px solid #ececec;
  height: 32px;
  transition: border 1s;
  padding: 0 5px 0 20px;
  color: #121212;
  width: 310px;
  margin-right: 10px;
}

.SearchBox:focus {
  border: 1px solid #646cff;
}

/*顶部导航栏*/
#HeaderBody {
  width: 100vw;
  min-width: 1000px;
  overflow: hidden;
  position: fixed;
  z-index: 100;
  background: #fff;
  top: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
}

/*导航选项*/
.Tabs {
  display: flex;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 20px;
}

.Tab-items {
  padding: 0 15px;
  font-size: 15px;
}

.Tab-link {
  color: #8590a6;
  transition: color 0.75s;
  user-select: none;
}

.Tab-link:hover {
  color: #121212;
  cursor: pointer;
}

.SearchBar {
  display: flex;
  align-content: center;
  padding: 10px;
}

.on-focus {
  color: black;
}

</style>