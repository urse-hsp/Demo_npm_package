module.exports = {
  // 以当前目录为根目录，不再向上查找
  root: true,
  // 指定脚本的运行环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true, // 浏览器环境中的全局变量
    es6: true, // 启用除了modules以外的所有ES6特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    node: true, // Node.js 全局变量和 Node.js 作用域
    jest: true // 支持jest测试全局变量
  },
  // 使用的扩展库
  extends: [
    'eslint:recommended', // 所有在规则页面被标记为“✔️”的规则将会默认开启
    'plugin:react/recommended',
    'react-app', // eslint-config-react-app create-react-app使用的可共享配置
    'react-app/jest' // eslint-config-react-app支持eslint-plugin-jest
  ],
  // 设置全局变量
  globals: {},
  // 指定eslint解析器
  // parser: 'babel-eslint', // 兼容ES处于实验性阶段的语法
  // 指定解析器选项
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      generators: true,
      legacyDecorators: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  // 第三方插件
  plugins: [
    'react' // react语法检查
    // 'react-hooks', // hooks语法检查
    // 'jest', // jest语法检查
    // '@typescript-eslint' // ts语法检查
  ],
  // 共享设置
  settings: {
    'import/ignore': ['node_modules'], // 忽略需要校验的目录
    react: {
      // 告知浏览器版本
      version: 'detect'
    }
  },
  // 规则
  rules: {
    camelcase: 0, // 不强制驼峰法命名
    'jsx-quotes': [2, 'prefer-double'], // 强制在JSX属性（jsx-quotes）中一致使用双引号
    'no-debugger': 1, // 禁用debugger
    'no-var': 1, // 对var警告
    semi: 0, // 不强制使用分号
    'no-underscore-dangle': 0, // 标识符不能以_开头或结尾 [*****]
    'react-hooks/exhaustive-deps': 0, // useEffect参数必填 [*****]
    'eol-last': 0, //  关闭文件末尾强制换行
    'no-multiple-empty-lines': [1, { max: 3 }], // 空行最多不能超过3行
    indent: [1, 2], // 缩进2个空格
    'import/first': 1, // import必须在文件顶端
    'spaced-comment': 1, // 注释符号后必须有空格
    'no-trailing-spaces': 0, // 关闭尾随空白限制,一行结束后面有空格就发出警告
    'space-before-blocks': [1, 'always'], // 不以新行开始的块{前面要有空格
    'space-before-function-paren': [0, 'always'], // 定义函数时括号前面要有空格
    'object-curly-spacing': [1, 'always'], // 大括号内总是有空格
    'padded-blocks': 0, // 关闭块内上下空行限制
    'operator-linebreak': [1, 'after'], // 语句太长时，运算符放在行位
    // 'no-unused-vars': 1, // js：不能有声明后未被使用的变量或参数 [*****]
    '@typescript-eslint/no-unused-vars': 1, // no-unused-vars/ts [*****]
    'quote-props': 0, // 关闭判断是否使用引号
    quotes: [2, 'single'], // 单引号 [*****]
    'no-console': 0, // 不禁用console
    'no-irregular-whitespace': 2, // 不规则的空白不允许
    'no-alert': 2, // 禁止使用alert confirm prompt
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-class-assign': 2, // 禁止给类赋值
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-dupe-args': 2, // 函数参数不能重复
    'no-empty': 2, // 块语句中的内容不能为空
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-invalid-this': 2, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-redeclare': 2, // 禁止重复声明变量
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-this-before-super': 2, // 在调用super()之前不能使用this或super
    'no-undef': 2, // 不能有未定义的变量
    'no-use-before-define': 2, // 未定义前不能使用
    'no-useless-catch': 0, // 忽略不必要的 catch 子句
    'react/display-name': 0, // 关闭组件名检查,防止在React组件定义中丢失displayName
    'react/forbid-prop-types': [2, { forbid: ['any'] }], // 禁止某些propTypes
    'react/jsx-boolean-value': 2, // 在JSX中强制布尔属性符号
    'react/jsx-closing-bracket-location': 1, // 在JSX中验证右括号位置
    'react/jsx-curly-spacing': [2, { when: 'never', children: true }], // 在JSX属性和表达式中加强或禁止大括号内的空格。
    'react/jsx-indent-props': 0, // 验证JSX中的props缩进
    'react/jsx-key': 2, // 在数组或迭代器中验证JSX具有key属性
    // 'react/jsx-max-props-per-line': [1, { maximum: 1 }], // 限制JSX中单行上的props的最大数量
    'react/jsx-no-bind': 0, // JSX中允许使用箭头函数和bind
    'react/jsx-no-duplicate-props': 2, // 防止在JSX中重复的props
    'react/jsx-no-literals': 0, // 允许使用未包装的JSX字符串
    'react/jsx-no-undef': 1, // 在JSX中禁止未声明的变量
    'react/jsx-pascal-case': 2, // 为用户定义的JSX组件强制使用PascalCase [*****]
    'react/jsx-sort-props': 0, // 强化props按字母排序
    'react/jsx-uses-react': 1, // 防止反应被错误地标记为未使用
    'react/jsx-uses-vars': 2, // 防止在JSX中使用的变量被错误地标记为未使用
    'react/no-danger': 0, // 允许使用危险的JSX属性
    'react/no-did-mount-set-state': 0, // 允许在componentDidMount中使用setState
    'react/no-did-update-set-state': 1, // 防止在componentDidUpdate中使用setState
    'react/no-direct-mutation-state': 2, // 防止this.state的直接变异
    'react/no-multi-comp': 0, // 防止每个文件有多个组件定义
    'react/no-set-state': 0, // 允许使用setState
    'react/no-unknown-property': 2, // 防止使用未知的DOM属性
    'react/prefer-es6-class': 2, // 为React组件强制执行ES5或ES6类
    'react/prop-types': 2, // 防止在React组件定义中丢失props验证
    'react/react-in-jsx-scope': 2, // 使用JSX时防止丢失React [*****]
    'react/self-closing-comp': 0, // 防止没有children的组件的额外结束标签 [*****]
    'react/sort-comp': 2, // 强制组件方法顺序
    'no-extra-boolean-cast': 2, // 禁止不必要的bool转换
    'react/no-array-index-key': 1, // 警告在数组中遍历中使用数组key做索引
    'react/no-deprecated': 2, // 不使用弃用的方法
    'react/jsx-equals-spacing': 2, // 在JSX属性中强制或禁止等号周围的空格
    'no-unreachable': 1, // 不能有无法执行的代码
    'comma-dangle': 2, // 项尾不能有逗号  [*****]
    'no-mixed-spaces-and-tabs': 1, // 禁止混用tab和空格
    'prefer-arrow-callback': 0, // 比较喜欢箭头回调
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'arrow-spacing': 0 // =>的前/后括号
  }
}
