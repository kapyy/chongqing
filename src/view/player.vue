<template>
  <div class='index'>
    <h1>重庆</h1>
    <div v-for="(item,index) in videoMap" :key="index">
      <video v-if='index==videoNo' controls="controls" @ended="endVideo" autoplay="autoplay" ref="video" width="200px">
        <source :src='item' type="video/mp4">
      </video>
    </div>

  </div>
</template>

<script>
  import * as API from '@/interface/api'
  import video1 from '@/assets/text.mp4'
  import video2 from '@/assets/大树.mp4'
  import {
    setTimeout,
    setInterval
  } from 'timers';

  export default {
    name: 'player',
    components: {

    },
    props: {},
    data() {
      return {
        videoMap: [
          video2,
          video1,
        ],
        videoNo:0,
        sum:1
      }
    },
    mounted() {
      setInterval(
        this.Polling, 1000
      )
    },
    methods: {
 
      play() {
        this.$refs.video.play()
      },
      endVideo() {
        this.videoNo=(this.sum++)%2
      },
      //轮询接口 当前应当播放什么
      async Polling() {
        let res = await setTimeout(() => {
          return 1
        }, 10)
        console.log(res)
      }
    },

  }
</script>

<style lang="less" scoped>


</style>