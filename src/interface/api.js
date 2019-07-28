import axios from "axios";
var initUrl = '/init'
var playVideoUrl = '/playVideo'
var endPlayUrl = '/endPlay'
var chooseVideoyUrl = '/chooseVideo'
//初始化和轮询
function init(params) {
  return post(initUrl, params)
}
// 播放视屏palyer用的
function playVideo(params) {
  return post(playVideoUrl, params)
}
// 播放视屏完成
function endPlay(params) {
  return post(endPlayUrl, params)
}
// 播放视屏完成
function chooseVideo(params) {
  return post(chooseVideoyUrl, params)
}
// post请求的promise封装
function post(url, params) {
  return new Promise((reslove, reject) => {
    axios.post(url, params)
      .then(function (response) {
        if (response.data.resCode === '1') {
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
  init,
  playVideo,
  endPlay,
  chooseVideo,
}
