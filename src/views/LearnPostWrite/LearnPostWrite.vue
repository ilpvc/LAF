<template>
  <div id="markdownEditor">
    <div class="editor-header">
      <div class="title">编辑区域</div>
      <n-button type="success" @click="()=>showDetailModal = true">确认发布</n-button>
    </div>
    <MdEditor class="body" v-model="editorContent"
              :toolbars-exclude="toolbarsExclude"
              @onUploadImg="onUploadImg"/>
  </div>

  <n-modal v-model:show="showDetailModal">
    <n-card
      style="width: 600px"
      title="发布文章"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true">
      <n-form
        ref="formRef"
        :model="postTemp"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
        :style="{maxWidth: '640px'}">
        <n-form-item label="作者" path="userNickname">
          <n-input v-model:value="postTemp.userNickname" disabled/>
        </n-form-item>
        <n-form-item label="标题" path="title">
          <n-input v-model:value="postTemp.title" placeholder="标题"/>
        </n-form-item>
        <n-form-item label="标签" path="tags">
          <n-dynamic-tags v-model:value="postTemp.tags"/>
        </n-form-item>
        <n-form-item label="封面图片">
          <n-upload
            ref="upload"
            action="http://localhost:8080/lostandfound/upload/image"
            list-type="image-card"
            :accept="'/image/*'"
            :default-upload="false"
            multiple
            max="1"
            :custom-request="customRequest"
          />
        </n-form-item>
      </n-form>
      <template #footer>
        <div style="display: flex;justify-content: flex-end">
          <n-button @click="shadowModal" style="margin-right: 10px">取消</n-button>
          <n-button type="success" @click="doSubmitEssay">确认</n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">

import {ref, unref, watch} from "vue";
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {UploadCustomRequestOptions, useMessage, useLoadingBar} from "naive-ui"
import service from "@/utils/request";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {addPost, getPostByCondition, pagePostCondition} from "@/api/posts";
import {useRouter} from "vue-router";
import {usePostStore} from "@/store/PostStore";

const message = useMessage();
const toolbarsExclude = ref(['github', 'save', 'fullscreen', 'htmlPreview'])
const editorContent = ref('')

const showDetailModal = ref(false)

const webInfoStore = useWebInfoStore();
const postTemp = ref({
  title: '',
  userNickname: webInfoStore.getUser.nickname,
  tags: [],
  image: ''
})

const rules = {
  title: {
    required: true,
    trigger: ['input'],
    message: '请输入标题'
  },
}

const loadingBar = useLoadingBar()
const router = useRouter()
const upload = ref()

//提交文件
async function doSubmitEssay() {
  await upload.value?.submit()

}

const postStore = usePostStore();
//监听图片是否成功返回
watch(() => postTemp.value.image, async () => {

  await addPost({
    userId: webInfoStore.getUser.id,
    type: 4,
    title: unref(postTemp).title,
    userNickname: unref(postTemp).userNickname,
    tags: unref(postTemp).tags.toString(),
    image: postTemp.value.image,
    content: unref(editorContent),
    count: 0
  })
  showDetailModal.value = false
  message.success('保存成功')
  const postsRes = await getPostByCondition({types:[4]});
  const pagePost = await pagePostCondition({types:[4]},1,5);
  postStore.setCurrentPagePost(pagePost.data.items.records)
  postStore.setPages(pagePost.data.items.pages)
  await postStore.setLearnPost(postsRes.data.list)
  await router.push({
    name:'learn'
  })
  loadingBar.finish()
})

function shadowModal() {
  showDetailModal.value = false

}

//上传图片
async function onUploadImg(files, callback) {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);
        if (file.size > 4194304) {
          message.error('上传图片不能大于4M')
          loadingBar.error()
          return "error"
        }
        service
          .post('http://localhost:8080/lostandfound/upload/image', form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => rev(res))
          .catch((error) => rej(error));
      });
    })
  );
  console.log(res)
  callback(res);
}

//自定义图片上传
const customRequest = async ({
                               file,
                               data,
                               action,
                             }: UploadCustomRequestOptions) => {
  loadingBar.start()
  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(
        key,
        data[key as keyof UploadCustomRequestOptions['data']]
      )
    })
  }
  formData.append('file', file.file as File)
  if (file.file.size > 4194304) {
    message.error('上传图片不能大于4M')
    return
  } else {
    await service({
      url: action as string,
      method: 'post',
      data: formData,
    }).then((res) => {
      postTemp.value.image = postTemp.value.image.concat(res)
    }, reject => {
      console.log(reject)
    })
  }

}
</script>

<style scoped lang="less">
#markdownEditor {
  display: flex;
  flex-direction: column;
  height: 800px;

  .editor-header {
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
    background-color: white;
    margin: 0 1px;

    button {
      outline: none;
    }

    .title {
      font-family: 微软雅黑, cursive;
      font-size: 17px;
      font-weight: 900;
    }
  }

  .body {
    height: 800px;
    max-width: 1000px;
  }
}
</style>