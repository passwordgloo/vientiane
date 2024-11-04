import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/home/logo.svg',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: '/home/avatar.png',
    name: 'flyigloo',
    description: 'online front-end notebook',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/passwordgloo' },
    { icon: 'gitlab', link: 'https://gitlab.com/passwordgloo'},
    { icon: 'bilibili', link: 'https://space.bilibili.com/394017572' }
  ],
  navbarSocialInclude: ['bilibili'],
  footer: { copyright: 'Copyright © 2024-present passwordgloo' }
})
