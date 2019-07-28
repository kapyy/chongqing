<template>
  <div class='index'>
    <h1 @click="play">重庆项目用户选择页面</h1>
    <button @click="click(1)">1号视屏</button>
    <button @click="click(2)">2号视屏</button>
  </div>
</template>

<script>
  import * as API from '@/interface/api'
import { setTimeout, setInterval } from 'timers';

  export default {
    name: 'research',
    components: {

    },
    props: {
    },
    data() {
      return{}
    },
    mounted() {
      setTimeout(this.play,10)
      setInterval(
        this.Polling,1000
      )
       console.log(this.$refs.video.ended)
    },
    methods:{
      play(){
        this.$refs.video.play()
      },
      endVideo(){
        console.log('发送请求，告知服务器我已完成视频播放')
      },
      //轮询接口 当前应当播放什么
      async Polling(){
        let res = await setTimeout(()=>{ return 1 },10)
        console.log(res)
      }
    },

  }

</script>

<style lang="less" scoped>


</style>
