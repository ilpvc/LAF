<template>
  <div class="write_post">
    <div class="left">
      <h2>发布问题</h2>
      <n-form
          ref="formRef"
          label-placement="left"
          label-width="auto"
          require-mark-placement="right-hanging"
          :style="{
      width: '600px'
    }"
      >
        <n-form-item label="类型" path="typeValue">
          <n-select v-model:value="post.type"
                    :options="[1,2,3].map((v)=>({
                    label: ()=>{
                      if(v===1)return '失物'
                      if(v===2) return '招领'
                      if(v===3) return '其他'
                      },
                    value: v
                    }))"
          />
        </n-form-item>
        <n-form-item :label="post.type===3? '帖子标题':'丢失物品'" path="titleValue">
          <n-input v-model:value="post.title" :placeholder="post.type===3? '帖子标题':'丢失物品'"/>
        </n-form-item>
        <n-form-item label="具体描述" path="contentValue">
          <n-input
              v-model:value="post.content"
              placeholder="具体描述"
              type="textarea"
              :autosize="{
          minRows: 3,
          maxRows: 5
        }"
          />
        </n-form-item>

        <n-form-item label="图片上传">
          <n-upload
              ref="upload"
              action="http://localhost:8080/lostandfound/upload/image"
              list-type="image-card"
              :accept="'/image/*'"
              :file-list="fileList"
              :default-upload="false"
              multiple
              :custom-request="customRequest"
          />
        </n-form-item>


        <n-button type="primary" size="large" @click="submit">提交</n-button>
      </n-form>
    </div>
    <div>
      <NavigationCard></NavigationCard>
      <LeiFengRank></LeiFengRank>
    </div>

  </div>
</template>

<script setup lang="ts">
import NavigationCard from "@/components/NavigationCard.vue";
import LeiFengRank from "@/components/LeiFengRank.vue";
import {Post} from "@/Interface/ApiInterface";
import {ref} from "vue";
import {UploadCustomRequestOptions, UploadFileInfo, useMessage, UploadInst} from "naive-ui";
import service from "@/utils/request";

const message = useMessage()

const upload = ref<UploadInst | null>(null)
const fileList = ref<UploadFileInfo[]>()
let post = ref<Post>({
  title: '',
  type: 1,
  count: 0,
  status: 1,
  backUserId: undefined,
  image: '',
  content: '',
  userId: undefined,

})


function submit() {
  console.log(upload.value);
  upload.value?.submit()
  message.success('提交成功')
}

//自定义图片上传请求
const customRequest = ({
                         file,
                         data,
                         headers,
                         withCredentials,
                         action,
                         onFinish,
                         onError,
                         onProgress
                       }: UploadCustomRequestOptions) => {
  const formData = new FormData()
  console.log(file)
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(
          key,
          data[key as keyof UploadCustomRequestOptions['data']]
      )
    })
  }
  formData.append('file', file.file as File)
  service({
    url: action as string,
    method: 'post',
    data: formData,
  })
      .then((res) => {
        message.success(JSON.stringify(res))
      })
      .catch((error) => {
        message.success(error.message)
      })
}
</script>

<style scoped lang="less">
.write_post {
  display: flex;
  flex-direction: row;

  .left {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 700px;
    height: 800px;
    background: white;
    align-items: center;
  }
}
</style>