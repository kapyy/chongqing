<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  import * as API from '@/interface/api'
import { clearTimeout } from 'timers';
  export default {
    name: 'App',
    components: {

    },
    data() {
      return {}
    },
    mounted() {
 

    },
    methods: {

    },
    destroyed() {
      // alert(11)
    }
  }

</script>

<style>
  #app {
    width: 1170px;
    background: rgba(245, 246, 249, 1);
  }

</style>
