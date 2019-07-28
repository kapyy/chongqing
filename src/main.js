
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Service from '@/config/service'
//
localStorage.setItem("userId",10001)
axios.defaults.headers.common['token'] =localStorage.getItem("userId")
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = Service[process.env.NODE_ENV].url;
/* 
  做全局拦截使用
  https://blog.csdn.net/sjn0503/article/details/74729300 
*/
axios.interceptors.response.use((response) => {
  return response;
})
console.log(window.expCallback)

Vue.prototype.$appFun=(x)=>{
  if(window.expCallback){
    window.expCallback.next(x)
  }else{
    console.log(x)
  }
}


Vue.config.productionTip = false
Vue.use(ElementUI);
import '../static/reset.css'
import '../static/iview-reset.less'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
  },
})
