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
        <router-link to="/home" class="Tab-link" @click="change(0)" :style="{color:fontColor0}">首页</router-link>
      </li>
      <li class="Tab-items">
        <router-link to="/home" class="Tab-link" @click="change(1)" :style="{color:fontColor1}">寻物</router-link>
      </li>
      <li class="Tab-items">
        <router-link to="/home" class="Tab-link" @click="change(2)" :style="{color:fontColor2}">招领</router-link>
      </li>
      <li class="Tab-items">
        <router-link to="/home" class="Tab-link" @click="change(3)" :style="{color:fontColor3}">娱乐大厅</router-link>
      </li>
      <li class="Tab-items">
        <router-link to="/learn" class="Tab-link" @click="change(4)" :style="{color:fontColor4}">学习交流</router-link>
      </li>
      <li class="Tab-items">
        <router-link to="/mall" class="Tab-link" @click="change(5)" :style="{color:fontColor5}">积分商城</router-link>
      </li>
    </ul>
    <!--搜索框-->
    <div class="SearchBar">
      <form>
        <input class="SearchBox" v-model="searchInfo"/>
        <n-button type="info" attr-type="submit"
                  style="outline: none" @click="doSearch">
          搜索
        </n-button>
      </form>
    </div>
    <!--通知图标等-->
    <n-space :size="30" align="center" justify="center">
      <router-link to="/notice" class="Tab-icon">
        <n-badge :value="value" :max="15">
          <img src="./img/notice.svg">
        </n-badge>
      </router-link>

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
              <router-link to="/login" @click="logout">
                <img src="./img/login.svg" alt="登录">
                用户登录
              </router-link>
            </li>
            <li class="Select-item">
              <router-link to="/login" @click="logout">
                <img src="./img/exit.svg" alt="退出">
                退出登录
              </router-link>
            </li>
          </ul>
        </div>
      </n-popover>

    </n-space>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {useWebStore} from "@/store/WebStore";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {removeToken, removeUser} from "@/utils/auth";
import {useLoadingBar} from "naive-ui";
import {getAllNormalPost, getPostByCondition} from "@/api/posts";
import {usePostStore} from "@/store/PostStore";
import {useRouter} from "vue-router";
import {useUserDetailsStore} from "@/store/UserDetailsStore";
import {useUserRelatedStore} from "@/store/UserRelatedStore";
import {Nav} from "../../views/UserRelated/enums/nav";
import {getAttentionCondition} from "@/api/attention";
import {getUserByCondition} from "@/api/user";
import {blacklistCondition} from "@/api/blacklist";

const webInfoStore = useWebInfoStore()
const value = ref(12)
const webStore = useWebStore()
const postStore = usePostStore()
const image = ['src/components/Header/img/default_header.svg']
const loadBar = useLoadingBar()
const router = useRouter()

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
    router.push({name: 'user', params: {name: webInfoStore?.getUser?.nickname}})
  }

}

const fontColor0 = ref("black")
const fontColor1 = ref("#8590a6")
const fontColor2 = ref("#8590a6")
const fontColor3 = ref("#8590a6")
const fontColor4 = ref("#8590a6")
const fontColor5 = ref("#8590a6")



//切换页面
function change(type: number) {
  webStore.changePage(type)
  if (type === 0) {
    fontColor0.value = "black"
    fontColor1.value = "#8590a6"
    fontColor2.value = "#8590a6"
    fontColor3.value = "#8590a6"
    fontColor4.value = "#8590a6"
    fontColor5.value = "#8590a6"
  }
  if (type === 1) {
    fontColor0.value = "#8590a6"
    fontColor1.value = "black"
    fontColor2.value = "#8590a6"
    fontColor3.value = "#8590a6"
    fontColor4.value = "#8590a6"
    fontColor5.value = "#8590a6"
  }
  if (type === 2) {
    fontColor0.value = "#8590a6"
    fontColor1.value = "#8590a6"
    fontColor2.value = "black"
    fontColor3.value = "#8590a6"
    fontColor4.value = "#8590a6"
    fontColor5.value = "#8590a6"
  }
  if (type === 3) {
    fontColor0.value = "#8590a6"
    fontColor1.value = "#8590a6"
    fontColor2.value = "#8590a6"
    fontColor3.value = "black"
    fontColor4.value = "#8590a6"
    fontColor5.value = "#8590a6"
  }
  if (type === 4) {
    fontColor0.value = "#8590a6"
    fontColor1.value = "#8590a6"
    fontColor2.value = "#8590a6"
    fontColor4.value = "black"
    fontColor3.value = "#8590a6"
    fontColor5.value = "#8590a6"
  }
  if (type === 5) {
    fontColor0.value = "#8590a6"
    fontColor1.value = "#8590a6"
    fontColor2.value = "#8590a6"
    fontColor5.value = "black"
    fontColor3.value = "#8590a6"
    fontColor4.value = "#8590a6"
  }
}

//退出登录
function logout() {
  removeToken()
  removeUser()
  //将user值设为空
  webInfoStore.setUser({})
}

//搜索框内容
const searchInfo = ref()

async function doSearch() {
  loadBar.start()
  await getPostByCondition({searchInfo: searchInfo.value,status:[1]}).then(res => {
    postStore.setSearchPost(res.data.list)
  })
  loadBar.finish()
  await router.push(
      {
        name: `search`,
        params: {
          info: searchInfo.value
        }
      })
  searchInfo.value = ''

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
  const usersRes = await getUserByCondition({userIds: userIds});
  const users = usersRes.data.list
  relatedStore.setUsers(users)
  await router.push({
    name: 'setting'
  })
  loadBar.finish()
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
}

/*搜索框样式*/
.SearchBox {
  box-sizing: border-box;
  background-color: #f6f6f6;
  border-radius: 30px;
  border: 1px solid #ececec;
  height: 32px;
  transition: border 1s;
  padding: 0 5px 0px 20px;
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


</style>