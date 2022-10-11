https://mp.weixin.qq.com/s/pfnSVPrUf8yyVaezvhnFGg

-w  依赖一般全部安装在整个项目根目录下，方便下面我们每个包都可以引用,


创建代码与组织的联系
npm init --scope=mingbo_zhang
这一步操作， 会让我们确认一些信息，并且包名前会带上“@”符号


单仓库menorepo
个大的项目仓库中，管理多个模块/包（package），这种类型的项目大都在项目根目录下有一个packages文件夹，分多个项目管理。大概结构如下：
实现monorepo
新建一个pnpm-workspace.yaml文件将我们的包关联起来

配置文件 .npmrc
某些工具仅在根目录的node_modules时才有效，可以将其设置为true来提升那些不在根目录的node_modules，就是将你安装的依赖包的依赖包的依赖包的...都放到同一级别（扁平化）