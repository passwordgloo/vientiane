import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'solar:home-smile-bold' },
  {
    text: '设计',
    icon: 'simple-icons:adobe',
    items: [
      {
        text: 'PS',
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
        badge: {type: 'warning', text: '整理中'}
      },
    ]
  },

  {
    text: '考试',
    icon: 'solar:bookmark-opened-bold-duotone',
    items: [
      {
        text: '社工',
        icon: 'vscode-icons:file-type-flareact',
        link: '/social/'
      }
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
