// type SocialLinkIcon =
//   | 'discord'
//   | 'facebook'
//   | 'github'
//   | 'instagram'
//   | 'linkedin'
//   | 'slack'
//   | 'twitter'
//   | 'youtube'
//   | { svg: string }

export default {
  title: '222', //站点标题
  description: '一个vue3组件库', //mate标签description，多用于搜索引擎抓取摘要

  themeConfig: {
    siteTitle: false,
    logo: '/logo.png',
    // 右侧导航
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/examples/button/' },
      {
        text: 'Drop Menu',
        items: [{ text: 'Item A', link: '/item-1' }],
      },
      {
        text: 'Drop Menu',
        items: [
          {
            items: [
              { text: 'Item A1', link: '/item-A1' },
              { text: 'Item A2', link: '/item-A2' },
            ],
          },
          {
            items: [
              { text: 'Item B1', link: '/item-B1' },
              { text: 'Item B2', link: '/item-B2' },
            ],
          },
        ],
      },
    ],
    // 社交链接socialLinks
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/geeksdidi' }],

    // 侧边栏Sidebar
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation',
            },
            {
              text: '快速开始',
              link: '/guild',
            },
            {
              text: 'Button',
              link: '/guild/Button',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx',
            },
          ],
        },
      ],
    },
  },
}
// export default用于ES6中模块块开发，导出某个模块

// module.exports = {
//   title: 'Hello VitePress',
//   description: 'Just playing around.',
// }
// module.exports用于node模块块开发，导出某个模块
