// 监听手机方向
export const phonePosition = (params) => {
  Taro.onDeviceMotionChange(function (res) {
    let alpha = parseFloat(res.alpha),
      screen = '',
      title = ''
    if (alpha > 45 && alpha < 136) {
      screen = 'Left'
      title = '左侧'
    } else if (alpha > 225 && alpha < 316) {
      screen = 'right'
      title = '右侧'
    } else if (alpha > 135 && alpha < 226) {
      screen = 'back'
      title = '反面'
    } else {
      screen = 'just'
      title = '正面'
    }
    return { alpha, screen, title }
  })
}

/* 升级小程序 */
export const updateXCX = () => {
  if (process.env.TARO_ENV === 'weapp') {
    // console.log(wx.canIUse("getUpdateManager"))
    if (wx.canIUse('getUpdateManager')) {
      let updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate((res) => {
        // 请求完新版本信息的回调
        // console.log(res.hasUpdate);
      })
      updateManager.onUpdateReady(() => {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: (res) => {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            } else if (res.cancel) {
              return false
            }
          },
        })
      })
      updateManager.onUpdateFailed(() => {
        // 新的版本下载失败
        wx.hideLoading()
        wx.showModal({
          title: '升级失败',
          content: '新版本下载失败，请检查网络！',
          showCancel: false,
        })
      })
    }
  }
}

// 判断资源类型
export function getFileType(name) {
  if (!name) return false
  const index1 = name.lastIndexOf('.')
  const index2 = name.length
  const postf = name.substring(index1, index2).toLowerCase()

  const imgType = ['.gif', '.jpeg', '.jpg', '.bmp', '.png']
  const videoType = [
    '.avi',
    '.wmv',
    '.mkv',
    '.mp4',
    '.mov',
    '.rm',
    '.3gp',
    '.flv',
    '.mpg',
    '.rmvb',
  ]
  if (imgType.indexOf(postf) !== -1) {
    return 'image'
  } else if (videoType.indexOf(postf) !== -1) {
    return 'video'
  } else {
    return false
  }
}

// 时间戳转换 月日 周几
export function transDay(day, diy = false) {
  if (!day) return ''
  const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const weekIndex = parseInt(moment(day).format('E'))
  if (diy) {
    return `${weeks[weekIndex % 7]} / ${moment(day).format('YYYY-MM-DD')} / `
  }
  return `${moment(day).format('MM月DD号')}(${weeks[weekIndex % 7]})`
}

// 获取7天日期等
export function getDayList() {
  const initState = {
    current: 0,
    swiperContentIdx: 0, // 主容器滑块
    dates: [], // 日期滑块内容
    weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  }
  const { weeks } = initState
  const weekOfDay = parseInt(moment().format('E'))
  let momentObj = moment()
  momentObj.subtract(0, 'days')
  let dates = [
    {
      date: moment().format('YYYY-MM-DD'),
      week: weeks[weekOfDay % 7],
    },
  ]
  for (let i = 0; i < 5; i++) {
    let tempMoment = momentObj.add(1, 'days').format('YYYY-MM-DD')
    dates[dates.length] = {
      date: tempMoment,
      week:
        tempMoment === moment().format('YYYY-MM-DD')
          ? '今日'
          : weeks[(weekOfDay + i + 1) % 7],
    }
  }
  return {
    ...initState,
    dates,
    swiperContentIdx: 0,
    selectedDate: moment().format('YYYY-MM-DD'),
  }
}

/**
 *
 * @param {String} theme 统用主题
 * @param {String} backTheme 通用背景渐变
 */
 export function setTheme(theme = '#2fc29f', backTheme = 'linear-gradient(90deg, #70e0a6 0%, #2eccac 100%)') {
  document.body.style.setProperty('--theme', theme)
  document.body.style.setProperty('--backTheme', backTheme)
}

// 获取url某个参数
export function GetQueryString(name = 'code', url = window.location.href) {
  let urlCode = '',
    urlParams = {}
  if (url.indexOf('?') != -1) {
    let params = url.split('?')[1]
    // 多个参数
    if (params.indexOf('&') != -1) {
      const param = params.split('&')
      for (let i = 0; i < param.length; i++) {
        if (param[i].split('=')[0] === name) urlCode = param[i].split('=')[1]
        urlParams[param[i].split('=')[0]] = param[i].split('=')[1] // JSON.parse
      }
    } else urlCode = params.split('=')[1]
  }
  return { urlCode, urlParams }
}