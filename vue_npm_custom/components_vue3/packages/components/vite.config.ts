import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts' // ts声明文件
// vite，它有一个库模式专门为我们来打包这种库组件的。

export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue', 'less'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'lib',
          preserveModulesRoot: 'src',
        },
      ],
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs'],
    },
  },
  // ts 声明，ts也可以使用
  plugins: [
    vue(),
    dts({
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: './tsconfig.json',
    }),
    //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
    dts({
      outputDir: 'lib',
      tsConfigFilePath: './tsconfig.json',
    }),
    // 处理css独立组件
    // {
    //   name: 'style',
    //   generateBundle(config, bundle) {
    //     //这里可以获取打包后的文件目录以及代码code
    //     const keys = Object.keys(bundle)

    //     for (const key of keys) {
    //       const bundler: any = bundle[key as any]
    //       //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

    //       this.emitFile({
    //         type: 'asset',
    //         fileName: key, //文件名名不变
    //         source: bundler.code.replace(/\.less/g, '.css'),
    //       })
    //     }
    //   },
    // },
  ],
})
// cjs(CommonJS)和esm(ESModule)两种形式,cjs模式主要用于服务端引用(ssr),而esm就是我们现在经常使用的方式，它本身自带treeShaking而不需要额外配置按需引入(前提是你将模块分别导出)，非常好用~
