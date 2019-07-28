<template>
  <div class='index'>
    <h1 @click="play">重庆项目用户选择页面</h1>
    <button @click="play(0)">1号视屏</button>
    <button @click="play(1)">2号视屏</button>
  </div>
</template>

<script>
  import * as API from '@/interface/api'

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
     
    },
    methods:{
     async play(i){
        let a =await API.chooseVideo({'videoNum':1})
        if(a.videoNum==i){
          alert('播放成功')
        }
      }
    },

  }

</script>

<style lang="less" scoped>


</style>
