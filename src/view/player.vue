<template>
  <div class='index'>
    <h1>重庆</h1>
    <div v-for="(item,index) in videoMap" :key="index">
      <video v-if='index==videoNo' controls="controls"  @ended="endPlay" autoplay="autoplay" ref="video"
        width="200px">
        <source :src='item' type="video/mp4">
      </video>
    </div>

  </div>
</template>

<script>
  import * as API from '@/interface/api'
  import video1 from '@/assets/text.mp4'
  import video2 from '@/assets/大树.mp4'
  export default {
    name: 'player',
    components: {

    },
    props: {},
    data() {
      return {
        videoMap: [
          video1,
          video2,
        ],
        videoNo: 0,
        sum: 1,
        jishiqi: 0,
        waiting: true //true表示等待接客,false 表示正在播放。
      }
    },
    mounted() {
      this.polling()
    },
    methods: {
      //轮询当前接口
      polling() {
        this.jishiqi = setInterval(
          this.query,
          1000
        )
      },
      query() {
        let index
        API.playVideo().then(res => {
          index = res.videoNum
          if (index !== -1) {
            this.waiting = false
            this.videoNo = index
            clearInterval(this.jishiqi)
          } else {
            console.log( this.videoNo)
            this.videoNo = 0
          }
        })

      },

      async endPlay() {
        //如果不是在等待状态就只是
        if(!this.waiting){
          let res = await API.endPlay()
                      this.videoNo = 0

          this.$refs.video[0].play()    

        }else{
          this.$refs.video[0].play()    
        }
      }
    },

  }
</script>

<style lang="less" scoped>


</style>