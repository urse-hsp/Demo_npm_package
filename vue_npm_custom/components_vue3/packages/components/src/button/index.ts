import button from './button.vue'
import type { App, Plugin } from 'vue'

// 很多时候我们在vue中使用一个组件会用的app.use 将组件挂载到全局。要使用app.use函数的话我们需要让我们的每个组件都提供一个install方法，app.use()的时候就会调用这个方法;
type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    //注册组件
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

const Button = withInstall(button)

export default Button


// withInstall方法可以做个公共方法放到工具库里，因为后续每个组件都会用到