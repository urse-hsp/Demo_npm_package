整个工程的代码组织采用 Monorepo 的组织方式，使用工具 pnpm + workspace 来实现。所以全部项目都是放在一个仓库里的，包括文档、组件。

开发环境中的依赖一般全部安装在整个项目根目录下，方便下面我们每个包都可以引用,所以在安装的时候需要加个 -w

pnpm i vue@next typescript less -D -w
pnpm install vite @vitejs/plugin-vue -D -w
@vitejs/plugin-vue 用来支持.vue 文件的转译

开启 Monorepo 的组织关联，子项目可以访问跟目录 node_modules 依赖
要安装到根目录加配置 -W
安装依然会安装在当前的json目录层，手动安装到根目录，项目关联起来，就可以访问了


vitepress 文档项目。安装到发布环境