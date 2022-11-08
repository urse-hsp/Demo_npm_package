开发环境中的依赖一般全部安装在整个项目根目录下，方便下面我们每个包都可以引用,所以在安装的时候需要加个 -w

pnpm i vue@next typescript less -D -w
pnpm install vite @vitejs/plugin-vue -D -w
@vitejs/plugin-vue 用来支持.vue 文件的转译


vitepress 文档项目。安装到发布环境