
# From 1.0.0 -> 1.0.1
npm version patch
# From 1.0.1 -> 1.1.0
npm version minor
# From 1.1.0 -> 2.0.0
npm version major

pnpm publish --access public 发包

npm login 登录

运行 npm unpublish 包名 --force 命令，即可从 npm 删除已发布的包。
