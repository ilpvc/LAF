<template>
  <div id="NoticeMessage">

    <div class="left">
      <div>
        <h2>所有消息</h2>
      </div>
      <n-scrollbar>
        <a href="#" v-for="i in 20" :key="i" class="l-item">
          <MessageThumbnail></MessageThumbnail>
        </a>
      </n-scrollbar>

    </div>

    <div class="right">

      <div class="r-top">
        <n-scrollbar style="max-height: 600px">
          <MessageItem v-for="i in 10" :key="i" :type="i%2"></MessageItem>
        </n-scrollbar>
      </div>
      <div class="r-bottom">

        <div class="b-nav">
          <div>
            <Emoji v-show="emoji" :key="emoji"></Emoji>
            <div class="emoji" @click="emojiShow">
              <svg t="1679299088420" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="1406" width="24" height="24">
                <path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#272536"
                      p-id="1407"></path>
                <path
                    d="M807.273469 216.727043c-162.808016-162.836669-427.736874-162.836669-590.544891 0-162.836669 162.806993-162.836669 427.736874 0 590.543867 162.808016 162.837692 427.737898 162.837692 590.544891 0C970.110137 644.462894 970.110137 379.534036 807.273469 216.727043M764.893242 764.92036c-139.444912 139.443889-366.370225 139.414213-505.798764 0-139.459239-139.473565-139.459239-366.354875 0-505.827417 139.428539-139.429563 366.354875-139.460262 505.798764 0C904.336108 398.521482 904.336108 625.476471 764.893242 764.92036"
                    fill="#231F20" p-id="1408"></path>
                <path
                    d="M381.724423 468.02137c24.783453 0 44.953841-20.169365 44.953841-44.967144 0-24.828478-20.170388-45.027519-44.953841-45.027519-24.842805 0-45.013193 20.199041-45.013193 45.027519C336.71123 447.852004 356.881618 468.02137 381.724423 468.02137"
                    fill="#231F20" p-id="1409"></path>
                <path
                    d="M640.680243 468.095048c24.812105 0 45.010123-20.213367 45.010123-45.01217 0-24.827455-20.198018-44.99682-45.010123-44.99682-24.785499 0-44.953841 20.169365-44.953841 44.99682C595.726401 447.88168 615.894743 468.095048 640.680243 468.095048"
                    fill="#231F20" p-id="1410"></path>
                <path
                    d="M642.245901 619.058294l-2.453888 0.798179c-40.310078 18.248619-83.548858 27.5341-128.411625 27.5341-46.343491 0-90.173742-9.375531-130.305765-27.799136l-2.425236-0.741897c-1.508353-0.413416-3.548826-1.003863-6.092765-1.003863-14.757099 0-26.734898 11.977799-26.734898 26.675546 0 6.978948 3.282766 13.988596 8.695033 19.253506l-0.325411 1.62501 6.831592 3.076058c47.911196 21.679765 100.021018 33.095769 150.681838 33.095769 51.608402 0 102.180194-11.120268 150.978597-33.361829 8.575306-4.703115 13.928221-13.721513 13.928221-23.511483C676.611593 627.458615 661.027663 613.290941 642.245901 619.058294"
                    fill="#231F20" p-id="1411"></path>
              </svg>
            </div>
          </div>


        </div>

        <div class="b-input">
          <n-input
              v-model:value="message"
              type="textarea"
              placeholder="基本的 Textarea"
              :autosize="{
        minRows: 5,
        maxRows: 5
      }"
          />
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>

import MessageThumbnail from "@/components/MessageThumbnail.vue";
import Emoji from "@/components/Emoji.vue";
import MessageItem from "@/components/MessageItem.vue";
import {getCurrentInstance, ref} from "vue";

let message = ref("")
const currentInstance = getCurrentInstance()
let emoji = false

function emojiShow() {
  emoji = !emoji
  currentInstance.proxy.$forceUpdate()
}
</script>

<style scoped lang="less">

#NoticeMessage {
  display: flex;
  width: 1000px;
  padding: 10px;
  background-color: #c8e6c9;
  border-radius: 10px;

  .left {
    display: flex;
    flex-direction: column;
    width: 290px;
    border-right: 1px solid #121212;
    height: 800px;
    padding: 10px 2px;
    background: linear-gradient(135deg, #fbed96, #abecd6);
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 700px;
    background: #e8f5e9;
    padding: 20px 10px;
    justify-content: space-between;

    .r-top {
      display: flex;
      flex-direction: column;
      height: 600px;
      border-bottom: 1px solid #8590a6;
    }

    .r-bottom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 160px;

      .b-nav {
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .emoji {
          margin-top: 3px;
          cursor: pointer;
        }
      }

      .b-input {
        display: flex;
        flex-direction: column;
      }
    }

  }

}


.l-item {
  display: flex;

  transition: background 0.75s;

  &:hover {
    background: #e0ff9e;
  }
}
</style>