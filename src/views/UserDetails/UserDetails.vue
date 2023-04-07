<template>
  <div class="body">

    <!--    模态框-->
    <div>
      <n-modal ref="modal" v-model:show="showModal" preset="dialog" title="Dialog" type="info" :close-on-esc="false"
               :mask-closable="false" :auto-focus="false" :on-close="onCloseClick">
        <template #header>
          <div>修改个人信息</div>
        </template>
        <div>
          <n-form
              ref="formRef"
              label-placement="left"
              label-width="auto"
              require-mark-placement="right-hanging"
              :style="{maxWidth: '640px',margin:'20px 0px'}"
          >
            <n-form-item label="姓名" path="realNameValue">
              <n-input v-model:value="userInfo.realName" placeholder="真实姓名"/>
            </n-form-item>
            <n-form-item label="性别" path="genderValue">
              <n-select
                  v-model:value="userInfo.gender"
                  placeholder="选择性别"
                  :options="[1,2].map((v)=>({
                  label: ()=>{if(v===1)return '男';else return '女'},
                  value: v
                  }))"
              />
            </n-form-item>
            <n-form-item label="年龄" path="ageValue">
              <n-input-number v-model:value="userInfo.age" placeholder="年龄"/>
            </n-form-item>
            <n-form-item label="班级" path="clazzValue">
              <n-input v-model:value="userInfo.clazz" placeholder="班级"/>
            </n-form-item>
            <n-form-item label="QQ" path="QQValue">
              <n-input v-model:value="userInfo.qq" placeholder="QQ"/>
            </n-form-item>
            <n-form-item label="邮箱" path="emailValue">
              <n-input v-model:value="userInfo.email" placeholder="邮箱"/>
            </n-form-item>

          </n-form>
        </div>
        <template #action>
          <div>
            <n-button type="info" @click="submit">
              保存
            </n-button>
          </div>
        </template>
      </n-modal>
    </div>

    <div class="header">
      <div class="header-info">
        <img src="./img/bg.jpg">
      </div>

      <div class="header-user">
        <div>
          <i style="font-size: 1.5em">个人信息</i>&nbsp;<a class="change" @click="isShowModal">修改</a>
        </div>
        <div class="info" style="position: relative;left: -12px">
          <i>姓名:</i> {{ userInfo.realName || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -24px">
          <i>性别:</i> {{ genderComputed || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -36px">
          <i>年龄:</i> {{ userInfo.age || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -48px">
          <i>班级:</i> {{ userInfo.clazz || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -60px">
          <i>QQ:</i> {{ userInfo.qq || '未设置' }}
        </div>
        <div class="info" style="position: relative;left: -72px">
          <i>邮箱:</i> {{ userInfo.email || '未设置' }}
        </div>

      </div>

      <div class="header-avatar">
        <div class="avatar" style="position: relative;left: -12px">
          <n-avatar
              :size="100"
              :src="userInfo.header"
          />
        </div>
        <div class="btn" style="position: relative;left: -42px">
          <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
      'naive-info': 'hello!'
    }"
              :data="{
      'naive-data': 'cool! naive!'
    }"
          >
            <n-button>上传头像</n-button>
          </n-upload>
        </div>
        <div class="btn" style="position: relative;left: -60px">
          <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
      'naive-info': 'hello!'
    }"
              :data="{
      'naive-data': 'cool! naive!'
    }"
          >
            <n-button>修改背景</n-button>
          </n-upload>
        </div>
      </div>

      <div class="header-setting">
        <div style="font-size: 1.5em;position:relative; left: 10px;margin-bottom: 10px;color: white">选项</div>
        <div style="position: relative;left: 31px;border-bottom: #ffffff 1px solid;width: 136px;">
          <i style="margin-left: 10px">
            <a href="#" style="font-size: 1.1em;color: white;">隐藏个人信息</a>
          </i>
        </div>
      </div>

    </div>

    <div class="center">

      <div class="left">
        <div class="left-header">
          <n-tabs ref="tab" :default-value="UserPostsType.THUMB" justify-content="space-around"
                  @update:value="changeTabAndGetPosts">
            <n-tab-pane :name="UserPostsType.THUMB" tab="我点赞的" class="left-content">
              <n-empty description="你还没有点赞哦" v-if="true">
              </n-empty>
              <div>
                <Card v-for="port in posts" :key="port.id" v-bind:pp="port"></Card>
              </div>
            </n-tab-pane>
            <n-tab-pane :name="UserPostsType.COMMENT" tab="我评论的" class="left-content">
              <n-empty description="你还没有点赞哦" v-if="false">
              </n-empty>
              <div>
                <Card v-for="port in posts" :key="port.id" v-bind:pp="port"></Card>
              </div>
            </n-tab-pane>
            <n-tab-pane :name="UserPostsType.COLLECTION" tab="收藏" class="left-content">
              <n-empty description="你还没有点赞哦" v-if="!posts">
              </n-empty>
              <div>
                <Card v-for="port in posts" :key="port.id" v-bind:pp="port"></Card>
              </div>
            </n-tab-pane>
            <n-tab-pane :name="UserPostsType.ATTENTION" tab="关注" class="left-content">
              <n-empty description="你还没有点赞哦" v-if="!posts">
              </n-empty>
              <div>
                <Card v-for="port in posts" :key="port.id" v-bind:pp="port"></Card>
              </div>
            </n-tab-pane>
            <n-tab-pane :name="UserPostsType.REPORT" tab="举报" class="left-content">
              <n-empty description="你还没有点赞哦" v-if="!posts">
              </n-empty>
            </n-tab-pane>
          </n-tabs>
        </div>
      </div>

      <div class="right">
        <NavigationCard></NavigationCard>
        <MissionCard></MissionCard>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import Card from "@/components/Card/Card.vue"
import {computed, getCurrentInstance, onMounted, reactive, ref} from "vue";
import NavigationCard from "@/components/NavigationCard.vue";
import MissionCard from "@/components/MissionCard.vue";
import {Likes, Post, User} from "@/Interface/ApiInterface";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {usePostStore} from "@/store/PostStore";
import {getCacheUserById, updateUser} from "@/api/user";
import {useMessage} from "naive-ui";
import {UserPostsType} from "@/Interface/enum"
import {getPostIdByLikeUserId} from "@/api/thumb";
import {getPostByCondition} from "@/api/posts";


const currentInstance = getCurrentInstance()
const message = useMessage()
const postStore = usePostStore()
const webInfoStore = useWebInfoStore()
let userInfo = reactive<User>({
  ...webInfoStore.getUser
})
//获取所有帖子
const posts = ref<Post[]>()

//修改信息的模态框控制
const showModal = ref(false)

function isShowModal() {
  showModal.value = !showModal.value
}

//点击关闭弹窗提示
function onCloseClick() {
  return confirm("你还没有保存，确认退出吗？");
}

async function submit() {
  message.loading('正在保存', {duration: 10})
  await updateUser(userInfo).then(res => {
    if (res.code === 200) {
      message.success('保存成功')
      showModal.value = false
    }
  })
  await getCacheUserById(userInfo.id).then(res => {
    webInfoStore.setUser(res.data.item)
  })
}

//对后端用户性别进行校验匹配
const genderComputed = computed(() => {
  return userInfo.gender === 1 ? '男' : '女'
})

//点击切换页面获取数据
async function changeTabAndGetPosts(tabName: number) {
  const postsId: number[] = []
  switch (tabName) {
    case UserPostsType.THUMB:
      await getPostIdByLikeUserId(userInfo.id || 0).then(res => {
        for (const item: Likes of res.data.list) {
          postsId.push(item.postId)
        }
      })
      await getPostByCondition({collection: postsId}).then(res => {
        posts.value = res.data.list
        currentInstance?.proxy?.$forceUpdate()
      })
      break;
    case UserPostsType.COMMENT:
      posts.value = []
      console.log(posts)
      break;

  }
  return true
}


onMounted(() => {
  changeTabAndGetPosts(0)
})
</script>

<style scoped lang="less">

//主题右部分
.right {
  display: flex;
  width: 300px;
  flex-direction: column;
}

//主体左部分
.left {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 700px;
  //margin-right: 10px;
  .left-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-content {
      padding: 20px 0px;
    }
  }
}

//主题部分
.center {
  display: flex;
  flex-direction: row;
}

//设置
.header-setting {
  height: 250px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  background: linear-gradient(110deg, transparent 90px, #646cff 0);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  a:hover {
    color: #ececec;
  }
}

//头像信息
.header-avatar {
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: flex-start;
  align-items: center;

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px;
  }

  .btn {
    margin: 5px 10px;
  }
}

//个人信息
.header-user {
  display: flex;
  height: 250px;
  flex-direction: column;
  justify-content: space-around;

  .change {
    color: #646cff;

    &:hover {
      cursor: pointer;
    }
  }

  .info {
    display: inline-block;
    overflow: hidden;
    width: 190px;
    color: red;

    i {
      color: #121212;
    }
  }
}

/*背景信息*/
.header-info {
  width: 500px;
  height: 250px;

  background: linear-gradient(-70deg, transparent 100px, #ffffff 0) bottom right;
  /*box-shadow: 0 0 50px 10px #ececec;*/
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    -webkit-mask-image: linear-gradient(-70deg, transparent 100px, #646cff 0);
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    opacity: 90%;
    fill-opacity: 11110;
    transition: opacity 0.5s;
  }

  img:hover {
    opacity: 100%;
  }
}

/*个人主页*/
.body {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  width: 1000px;
}

/*个人主页的头*/
.header {
  display: flex;
  flex-direction: row;
  height: 250px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(110deg, transparent 450px, #ffffff 0) top left #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 20px 2px #8590a6;
}

</style>