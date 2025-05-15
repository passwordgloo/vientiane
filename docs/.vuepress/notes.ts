import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const ps = defineNoteConfig({
  dir: 'ps',
  link: '/ps',
  sidebar: [
    {
      text: 'PS基础入门',
      collapsed: false,
      items: 'auto'
    }
  ]
})

const ppt = defineNoteConfig({
  dir: 'ppt',
  link: '/ppt',
  sidebar: [
    {
      text: 'PPT学习指南',
      collapsed: false,
      items: 'auto'
    }
  ]
})

const social = defineNoteConfig({
  dir: 'social',
  link: '/social',
  sidebar: [
    {
      text: '中级社工',
      collapsed: false,
      items: 'auto'
    }
  ]
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [ps,ppt,social],
})
