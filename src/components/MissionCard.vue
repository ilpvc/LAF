<template>
  <div id="mission-body">

    <div class="header">
      <svg t="1678696928774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1301" width="24" height="24">
        <path
            d="M832.8 892.7h-638c-28.2 0-51.2-23-51.2-51.2V298c0-28.2 23-51.2 51.2-51.2H365c10.9 0 19.7 8.8 19.7 19.7s-8.8 19.7-19.7 19.7H194.8c-6.4 0-11.8 5.4-11.8 11.8v543.5c0 6.4 5.4 11.8 11.8 11.8h638c6.4 0 11.8-5.4 11.8-11.8V298c0-6.4-5.4-11.8-11.8-11.8H662.6c-10.9 0-19.7-8.8-19.7-19.7s8.8-19.7 19.7-19.7h170.2c28.2 0 51.2 23 51.2 51.2v543.5c0 28.2-23 51.2-51.2 51.2z"
            fill="#444444" p-id="1302"></path>
        <path
            d="M631.1 349.2H396.5c-28.2 0-51.2-23-51.2-51.2v-63c0-28.2 23-51.2 51.2-51.2h39.4c10.9 0 19.7 8.8 19.7 19.7 0 10.9-8.8 19.7-19.7 19.7h-39.4c-6.4 0-11.8 5.4-11.8 11.8v63c0 6.4 5.4 11.8 11.8 11.8h234.6c6.4 0 11.8-5.4 11.8-11.8v-63c0-6.4-5.4-11.8-11.8-11.8h-39.4c-10.9 0-19.7-8.8-19.7-19.7 0-10.9 8.8-19.7 19.7-19.7h39.4c28.2 0 51.2 23 51.2 51.2v63c0 28.2-23 51.2-51.2 51.2z"
            fill="#444444" p-id="1303"></path>
        <path
            d="M591.7 215.3c-10.9 0-19.7-8.8-19.7-19.7 0-6.4-5.4-11.8-11.8-11.8h-92.9c-6.4 0-11.8 5.4-11.8 11.8 0 10.9-8.8 19.7-19.7 19.7s-19.7-8.8-19.7-19.7c0-28.2 23-51.2 51.2-51.2h92.9c28.2 0 51.2 23 51.2 51.2 0 10.9-8.8 19.7-19.7 19.7z"
            fill="#444444" p-id="1304"></path>
        <path
            d="M466 720.7c-5 0-10.1-1.9-13.9-5.8L337.4 600.3c-7.7-7.7-7.7-20.2 0-27.8 7.7-7.7 20.2-7.7 27.8 0L466 673.2l223.7-223.7c7.7-7.7 20.2-7.7 27.8 0 7.7 7.7 7.7 20.2 0 27.8L479.9 714.9c-3.8 3.9-8.9 5.8-13.9 5.8z"
            fill="#FF8803" p-id="1305"></path>
      </svg>
      <i style="color: #444444;padding-left: 5px">
        任务中心
      </i>
    </div>

    <div class="mission">
      <div class="mission-item" v-for="(task,index) in tasks" :key="index">
        <div class="item-left">
          <svg t="1678697746782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1493" width="30" height="30">
            <path d="M499.8144 535.2448a210.7392 115.2 0 1 0 421.4784 0 210.7392 115.2 0 1 0-421.4784 0Z" fill="#FF5A5A"
                  p-id="1494"></path>
            <path
                d="M710.5536 699.2896c-87.1936 0-162.048-27.0336-194.048-65.5872-10.7008 12.9024-16.64 27.0848-16.64 41.984 0 59.392 94.3616 107.5712 210.7392 107.5712 116.3776 0 210.7392-48.1792 210.7392-107.5712 0-14.8992-5.9392-29.0816-16.64-41.984-32.1536 38.5536-106.9568 65.5872-194.1504 65.5872z"
                fill="#F5504E" p-id="1495"></path>
            <path
                d="M710.5536 833.024c-87.1936 0-162.048-27.0336-194.048-65.5872-10.7008 12.9024-16.64 27.0848-16.64 41.984 0 59.392 94.3616 107.5712 210.7392 107.5712 116.3776 0 210.7392-48.1792 210.7392-107.5712 0-14.8992-5.9392-29.0816-16.64-41.984-32.1536 38.5536-106.9568 65.5872-194.1504 65.5872z"
                fill="#F5504E" p-id="1496"></path>
            <path
                d="M473.7536 457.3696c54.2208-88.6784 194.56-93.2352 260.352-90.0608 28.8256-26.5728 45.4144-57.3952 45.4144-90.2656 0-100.1472-153.1392-181.4016-342.016-181.4016s-342.016 81.2032-342.016 181.4016 153.1392 181.4016 342.016 181.4016c12.2368-0.0512 24.32-0.4096 36.2496-1.0752z"
                fill="#F66A68" p-id="1497"></path>
            <path
                d="M470.3744 585.8816c-10.0352-8.192-18.6368-28.672-24.5248-45.1584-2.7648 0.0512-5.5296 0.1024-8.3456 0.1024-141.5168 0-262.9632-45.6192-314.9824-110.592-17.408 21.76-27.0336 45.6704-27.0336 70.8096 0 100.1472 153.1392 181.4016 342.016 181.4016 4.096 0 8.0896-0.1024 12.1344-0.1536-6.8608-50.5856 8.0384-74.1376 20.736-96.4096z"
                fill="#FF5A5A" p-id="1498"></path>
            <path
                d="M442.5728 766.2592c-1.6896 0-3.328 0.0512-5.0176 0.0512-141.5168 0-262.9632-45.6192-314.9824-110.592-17.408 21.76-27.0336 45.6704-27.0336 70.7584 0 100.1472 153.1392 181.4016 342.016 181.4016 17.2032 0 34.048-0.6656 50.5856-1.9968-46.6432-49.152-49.152-106.8032-45.568-139.6224z"
                fill="#F5504E" p-id="1499"></path>
            <path
                d="M443.648 815.2576c-2.9184-18.8416-2.5088-35.9424-1.1264-48.9984-1.6896 0-3.328 0.0512-5.0176 0.0512-111.8208 0-211.0976-28.4672-273.5104-72.4992 76.1856 67.4816 173.2608 111.5136 279.6544 121.4464zM516.5056 767.4368c-10.7008 12.9024-16.64 27.0848-16.64 41.984 0 2.6624 0.256 5.2736 0.6144 7.8336 3.1744-0.0512 6.4-0.1536 9.5744-0.256 23.3984-0.9728 46.2848-3.584 68.7104-7.68-26.9824-11.0592-48.5888-25.3952-62.2592-41.8816zM710.5536 699.2896c-87.1936 0-162.048-27.0336-194.048-65.5872-10.7008 12.9024-16.64 27.0848-16.64 41.984 0 53.0944 75.3664 97.1776 174.4384 105.9328a490.74176 490.74176 0 0 0 156.416-101.5808c-34.1504 12.1344-75.52 19.2512-120.1664 19.2512z"
                fill="#FF5A5A" p-id="1500"></path>
            <path
                d="M445.8496 540.7232c-2.7648 0.0512-5.5296 0.1024-8.3456 0.1024-141.5168 0-262.9632-45.6192-314.9824-110.592-17.408 21.76-27.0336 45.6704-27.0336 70.7584 0 15.0016 3.4816 29.5936 9.984 43.52 87.1424 64.768 196.1472 101.2224 313.0368 96.4608 10.3424-0.4096 20.6336-1.2288 30.8224-2.2528 3.4304-22.9888 12.6976-38.1952 21.0432-52.8384-10.0352-8.192-18.5856-28.672-24.5248-45.1584zM801.3824 431.3088c-27.4944-7.168-58.3168-11.2128-90.8288-11.2128-116.3776 0-210.7392 51.5584-210.7392 115.2 0 30.8224 22.2208 58.8288 58.3168 79.5136 99.6352-34.2016 184.32-99.328 243.2512-183.5008z"
                fill="#F66A68" p-id="1501"></path>
            <path
                d="M150.9888 458.496c-10.9568-8.9088-20.5312-18.3808-28.4672-28.2624-3.9424 4.9664-7.4752 10.0352-10.5984 15.2064 12.8 4.864 25.8048 9.216 39.0656 13.056zM437.504 95.6416c-188.8768 0-342.016 81.2032-342.016 181.4016 0 97.6896 145.664 177.3056 328.0896 181.1968a492.5952 492.5952 0 0 0 70.1952-26.2144c21.7088-22.016 49.8688-36.9152 79.9744-46.7968 69.888-50.3296 125.8496-118.4256 161.4848-197.4272-58.7776-54.9888-170.0352-92.16-297.728-92.16z"
                fill="#F67271" p-id="1502"></path>
            <path
                d="M576.1024 111.2064c-42.3936-9.984-89.2416-15.5648-138.5984-15.5648-188.8768 0-342.016 81.2032-342.016 181.4016 0 5.4272 0.512 10.752 1.4336 16.0768a446.8224 446.8224 0 0 0 127.488 13.0048c146.9952-6.0416 274.5344-82.176 351.6928-194.9184z"
                fill="#F67B7A" p-id="1503"></path>
          </svg>
          <i>{{task.taskName }} -- {{task.points}}分</i>
        </div>

        <div class="item-right">
          <n-button v-if="receivedTaskSet?.has(task.id)" round size="tiny" type="warning" disabled>
            已领取
          </n-button>
          <n-button v-else round :type="finishTaskSet.has(task.id)?'success':''"
                     size="tiny" @click="success(task)" :disabled="!finishTaskSet.has(task.id)" >
            领&nbsp;&nbsp;&nbsp;&nbsp;取
          </n-button>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMessage} from 'naive-ui'
import {getAllTasks} from "@/api/task";
import {onBeforeMount, onMounted, ref, unref} from "vue";
import {getTaskUserByCondition, updateTaskUsers} from "@/api/taskUser";
import {useWebInfoStore} from "@/store/WebInfoStore";
import {Tasks, TaskUsers} from "@/Interface/ApiInterface";
import {getUserById, updateUser} from "@/api/user";


const webInfoStore = useWebInfoStore();
const message = useMessage()
async function success (task) {
  const taskUserRes = await getTaskUserByCondition({taskId:task.id,userId:webInfoStore.getUser.id});
  let taskUsers:TaskUsers = taskUserRes.data.list[0]
  taskUsers.status = 1
  await updateTaskUsers(taskUsers)
  let user = webInfoStore.getUser
  user.integral = task.points+ (user.integral || 0)
  await updateUser(user)
  webInfoStore.setUser(user)
  message.success(
      "领取成功"
  )
  receivedTaskSet.value?.add(task.id)
}
const tasks = ref<Tasks[]>([])

//已经完成的任务ID
let finishTaskSet = new Set()
//已经领取的任务Id
let receivedTaskSet = ref<Set<number>>()
receivedTaskSet.value = new Set<number>()
async function init(){

  await getAllTasks().then(res=>{
    for (let i of res.data.list){
      tasks.value.push(i)
    }
  })
}


onMounted(()=>{
  init()
})

onBeforeMount(async ()=>{
  const taskUserRes = await getTaskUserByCondition({userId: webInfoStore.getUser.id,status: 0})
  taskUserRes.data.list.map(v =>finishTaskSet.add(v.taskId))
  const receivedTaskUserRes = await getTaskUserByCondition({userId: webInfoStore.getUser.id,status: 1})

  receivedTaskUserRes.data.list.map(v=>receivedTaskSet?.value?.add(v.taskId))
})
</script>

<style scoped lang="less">

//任务栏
.mission {
  display: flex;
  flex-direction: column;

  .mission-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    .item-left {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }

      i {
        color: #fad882;
      }
    }


    .item-right {
      button {
        outline: none;
      }
    }
  }
}

/*头部*/
.header {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  border-bottom: 1px #f9f9fa solid;
  padding-bottom: 5px;
}

/*导航卡片*/
#mission-body {
  display: flex;
  background-color: white;
  width: 290px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 15px 10px;
  flex-direction: column;
}
</style>