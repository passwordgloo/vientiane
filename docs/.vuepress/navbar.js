/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.js` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'solar:home-smile-bold' },
  {
    text: '人工智能',
    icon: 'solar:star-fall-bold-duotone',
    // badge: {type: 'tip', text: '整理中'},
    items: [
      {
        text: 'Midjourney',
        link: '/aigc/midjourney/',
        icon: 'svg-spinners:270-ring-with-bg'
      }
    ]
  },
  {
    text: '设计',
    icon: 'simple-icons:adobe',
    items: [
      {
        text: 'Photoshop',
        link: '/ps/',
        icon: 'logos:adobe-photoshop'
      },
    ]
  },
  {
    text: '办公',
    icon: 'hugeicons:wps-office-rectangle',
    items: [
      {
        text: 'PPT',
        link: '/ppt/',
        icon: 'vscode-icons:file-type-powerpoint2'
      }
    ]
  },
   {
    text: '代码',
    icon: 'solar:chat-square-code-bold',
    items: [
      {
        text: 'HTML',
        link:'/html/',
        icon: 'vscode-icons:file-type-html',
        // badge: {type: 'danger', text: '待修复'}
      },
      {
        text: 'CSS',
        link:'/css/',
        icon: 'vscode-icons:file-type-css2',
        badge: {type: 'warning', text: '暂缓'}
      },
    ]
  },
  {
    text: '博客',
    link: '/blog/',
    icon: 'solar:bookmark-opened-bold-duotone'
  },
  {
    text: '友链',
    link: '/friends/',
    icon: 'solar:people-nearby-bold-duotone'
  }
])
