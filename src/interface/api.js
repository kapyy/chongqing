import axios from "axios";

var greetingUrl = '/greeting'


//自动补全
function greeting(params) {
  return post(greetingUrl, params)
}


// post请求的promise封装
function post(url, params) {
  return new Promise((reslove, reject) => {
    axios.post(url, params)
      .then(function (response) {
        debugger
        if (response.data.resCode == 0) {
          reslove({data:response.data.data,total:response.data.total,keyWords:response.data.keywords})
        } else {
          reject(response.data.resultMsg)
        }
      })
      .catch(function (error) {
        reject(error)
      });
  })
}
// get请求的promise封装
function get(url, params) {
  return new Promise((reslove, reject) => {
    axios.get(url, params)
      .then(function (response) {
        if (response.data.resultCode == 0) {
          reslove(response.data.data)
        } else {
          reject(response.data.resultMsg)
        }
      })
      .catch(function (error) {
        reject(error)
      });
  })
}


export {
  greeting,
}
