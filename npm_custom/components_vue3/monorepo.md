monorepo 就是把多个工程放到一个 git 仓库中进行管理，因此他们可以共享同一套构建流程、代码规范也可以做到统一，特别是如果存在模块间的相互引用的情况，查看代码、修改bug、调试等会更加方便。


启动 pnpm 的 workspace 功能，需要工程根目录下存在 pnpm-workspace.yaml 配置文件，并且在 pnpm-workspace.yaml 中指定工作空间的目录。比如这里我们所有的子包都是放在 packages 目录下，因此修改 pnpm-workspace.yaml


设置pnpm-workspace.yaml 工程羡慕模块间的相互引用 workspace:^1.1.1
打包也是可以吧关联的插件内容打进去的