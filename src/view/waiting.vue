<template>
  <div class='index'>
    <h1>重庆项目用户等待</h1>
    还需等待 {{num}} 人
    预计 {{num*2}} 分钟
  </div>
</template>

<script>
  import * as API from '@/interface/api'
  import {
    clearTimeout
  } from 'timers';
  export default {
    name: 'research',
    components: {

    },
    props: {},
    data() {
      return {
        num: 1000,
        timmer: ''
      }
    },
    mounted() {
      this.timmer = setInterval(this.Polling, 100 )
    },
    methods: {
      async Polling() {
        let res = await API.init()
        this.num = res.index
      }
    },
    watch: {
      num(value) {
        if (value === 0) {
          this.$router.push('/user', '')
        }
      }
    },

  }
</script>

<style lang="less" scoped>


</style>