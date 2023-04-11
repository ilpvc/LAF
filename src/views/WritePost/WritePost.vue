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

        <n-form-item label="图片上传" >
          <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              list-type="image-card"
              @preview="handlePreview"
          />
          <n-modal
              v-model:show="showModal"
              preset="card"
              style="width: 600px"
              title="一张很酷的图片"
          >
            <img :src="previewImageUrl" style="width: 100%">
          </n-modal>
        </n-form-item>


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