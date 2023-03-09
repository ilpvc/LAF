<template>

  <div id="body">
    <div class="card-header">
      <div class="header-detail">
        <n-avatar
            round
            size="large"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <div class="header-detail-dd">
          <a href="javascript:;">昵称</a>
          <i>8小时前发布</i>
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
    <div class="article-info">{{ articleInfo }}</div>
    <div class="image">
      <n-image-group show-toolbar-tooltip>
        <n-space>
          <n-image
              width="150"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <n-image
              width="150"
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          />
        </n-space>
      </n-image-group>
    </div>
    <div class="card-secondary-footer">
      <i style="color: #8590a6">浏览{{ watchCount }}次</i>
      <div style="width: 200px">
        <n-space justify="space-around">
          <a href="javascript:;">
            <svg t="1678345978919" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="1188" width="30" height="30">
              <path
                  d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                  p-id="1189"></path>
            </svg>
          </a>
          <a href="javascript:;">
            <svg t="1678346064583" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="1368" width="30" height="30">
              <path
                  d="M248.482281 938.000324c-4.306072 0-8.592702-1.336438-12.211113-3.967358-6.395664-4.646833-9.600659-12.521175-8.264221-20.314675l48.430012-282.363949L71.288626 431.382914c-5.66093-5.519714-7.698333-13.772678-5.255701-21.291932 2.444679-7.519254 8.943696-13.000082 16.768919-14.137998l283.508006-41.195238L493.099535 97.853655c3.498684-7.089465 10.720156-11.577686 18.627243-11.577686 7.907087 0 15.127536 4.489244 18.627243 11.577686l126.788661 256.904091 283.510052 41.195238c7.823176 1.137916 14.322194 6.618744 16.766872 14.137998 2.442632 7.519254 0.405229 15.773242-5.255701 21.291932L747.012502 631.354342l48.430012 282.363949c1.336438 7.7935-1.868557 15.667841-8.264221 20.314675-6.399757 4.646833-14.878872 5.257747-21.874193 1.582031L511.726777 802.298666 258.146385 935.614997C255.107165 937.211355 251.789607 938.000324 248.482281 938.000324zM130.422422 431.011454 313.25654 609.228415c4.894474 4.7727 7.128351 11.647271 5.974062 18.385742l-43.163055 251.64532 225.994104-118.811989c6.048763-3.180436 13.282514-3.180436 19.331277 0l225.992057 118.811989-43.163055-251.64532c-1.154289-6.738471 1.079588-13.613042 5.974062-18.385742l182.833095-178.216961-252.665557-36.71418c-6.767124-0.983397-12.614296-5.233188-15.641235-11.362792L511.726777 153.97893 398.729214 382.934482c-3.025916 6.129604-8.874111 10.379395-15.639189 11.362792L130.422422 431.011454z"
                  fill="#272636" p-id="1369"></path>
            </svg>
          </a>
          <a href="javascript:;">
            <svg t="1678346461743" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="1106" width="30" height="30">
              <path
                  d="M513.559007 60.225663c-248.299109 0-449.587532 201.299679-449.587532 449.625394 0 248.296039 201.288422 449.594695 449.587532 449.594695 248.27762 0 449.63358-201.299679 449.63358-449.594695C963.192587 261.525342 761.836627 60.225663 513.559007 60.225663zM513.678734 917.673369c-225.174436 0-407.703609-182.53736-407.703609-407.706679S288.505321 102.254895 513.678734 102.254895c225.165226 0 407.695423 182.541453 407.695423 407.710772S738.844983 917.673369 513.678734 917.673369z"
                  fill="#040000" p-id="1107"></path>
              <path
                  d="M486.287897 644.807748c12.999059 12.790304 12.777001 34.097586-0.497327 47.590901l0 0c-13.275351 13.491269-34.577516 14.063297-47.576575 1.277086L282.51591 540.491914c-12.999059-12.791327-12.775978-34.097586 0.49835-47.590901l0 0c13.281491-13.494339 34.58468-14.06739 47.576575-1.276063L486.287897 644.807748z"
                  fill="#040000" p-id="1108"></path>
              <path
                  d="M717.467093 359.167173c12.797467-12.999059 34.100656-12.771885 47.591925 0.502443l0 0c13.496385 13.274328 14.07046 34.573423 1.279133 47.576575L484.90541 693.291996c-12.791327 13.003152-34.093493 12.774955-47.583738-0.49835l0 0c-13.497409-13.278421-14.07046-34.577516-1.280156-47.576575L717.467093 359.167173z"
                  fill="#040000" p-id="1109"></path>
            </svg>
          </a>


        </n-space>
      </div>


    </div>
    <div style="border: 1px solid #ccc">
      <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
      />
      <Editor
          style="height: 500px; overflow-y: hidden;"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
      />
    </div>
  </div>

</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
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
//帖子文字内容
let articleInfo = ref("")
articleInfo = "我昨天丢爱上了的卡老师的那句拉开就是你的空间暗示的看上的23按时到了莫斯科看到拉莫斯开发商的23安排上看到跑得快放松的开发商们说的那番话粗俗的那部分舍不得暗示堤岸上读到不放手的伏笔爱上大槐树大部分还是地方比较"

//帖子浏览次数
let watchCount = ref()
watchCount = 10000




const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
let mode=ref('simple');


</script>

<style scoped>
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
  min-height: 300px;
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