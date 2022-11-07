// 多文件传递
const context = require.context('./', false, /\.js$/);
export default context
  .keys()
  .filter((item) => item !== './index.js')
  .map((key) => context(key));

  // 2
const modulesFiles = require.context('./modules', true, /\.js$/);
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});
