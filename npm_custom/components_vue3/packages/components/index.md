用来存放各种UI组件的包

# vite build
打包的组件库只能给js项目使用,  所以我们需要在打包的库里加入声明文件(.d.ts)。

配置vite-plugin-dts插件


pkg.module

我们组件库默认入口文件是传统的CommonJS模块，但是如果你的环境支持ESModule的话，构建工具会优先使用我们的module入口

pkg.files

files是指我们1需要发布到npm上的目录，因为不可能components下的所有目录都被发布上去


pnpm version patch你就会发现这个包的版本号patch(版本号第三个数) +1 了，同样的 pnpm version major major和 pnpm version minor 分别对应版本号的第一和第二位增加。

pnpm publish --access public 发包


package{
    "main": "lib/index.js",
  "module": "es/index.js",
}


<!-- 样式问题 -->
首先我们需要做的是将less打包成css然后放到打包后对应的文件目录下,我们在components下新建build文件夹来存放我们的一些打包工具,然后新建buildLess.ts,首先我们需要先安装一些工具cpy和fast-glob