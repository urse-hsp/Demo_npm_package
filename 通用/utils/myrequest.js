import axios from 'axios' // 引入axios
import qs from 'qs' // 序列化
import { MessageBox, Message } from 'element-ui'
import router from '@/router'
// import { Cookies } from 'js/cookie' // 轻量级处理cookies cpi插件
// Cookies.get('token')
let baseURL = process.env.VUE_APP_BASE_API

// 环境切换  // 开发 调试 生产
// if (process.env.NODE_ENV == 'development') baseURL = 'https://www.baidu.com'
// else if (process.env.NODE_ENV == 'debug') baseURL = 'https://www.ceshi.com'
// else if (process.env.NODE_ENV == 'production') baseURL = 'https://www.production.com'

// 创建个axioe 实例
const request = axios.create({
  baseURL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 120000,
})
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
request.interceptors.request.use(
  config => {
    // if (getToken()) {
    //   config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    config.headers['Content-Type'] = 'application/json'
    // Form Data 格式
    if (config.formdata === true) {
      config.data = qs.stringify(config.data, { arrayFormat: 'brackets' })
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    if (config.upload === true) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => (response.status === 200 ? Promise.resolve(response) : Promise.reject(response)),
  // 服务器状态码不是2开头的的情况
  error => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Message({
          message: '网络请求超时',
          type: 'error',
          duration: 2500,
        })
        return Promise.reject(error)
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        Message({
          message: '网络请求错误',
          type: 'error',
          duration: 2500,
        })
        return Promise.reject(error)
      }
    }
  }
)

// 401 未登录
// 403 权限过期
// 404 请求不存在

const errorHandle = (status, other) => {
  switch (status) {
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401:
      // 挑转到登录页
      break
    // 403 token过期，登录过期对用户进行提示，清除本地token和清空vuex中token对象，跳转登录页面
    case 403:
      //  Toast({
      //     message: '登录过期，请重新登录',
      //     duration: 1000,
      //     forbidClick: true
      // });
      // 清除token
      // localStorage.removeItem('token');
      // store.commit('loginSuccess', null);
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
      setTimeout(() => {
        // 挑转到登录页
      }, 1000)
      break

    // 404请求不存在
    case 404:
      // 网络请求不存在提示
      break
    // 其他错误，直接抛出错误提示
    default:
      // 提示其他错误
      console.log(other)
  }
}
export default request
