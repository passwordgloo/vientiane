import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
const ai = defineNoteConfig({
  dir: 'ai',
  link: '/ai',
  sidebar: [
    {
      text: '人工智能',
      collapsed: false,
      items: 'auto'
    }
  ]
})

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

const html = defineNoteConfig({
  dir: 'html',
  link: '/html',
  sidebar: [
    {
      text: 'HTML',
      collapsed: false,
      items: 'auto'
    }
  ]
})

const css = defineNoteConfig({
  dir: 'css',
  link: '/css',
  sidebar: [
    {
      text: 'CSS',
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
  notes: [ai,ps,ppt,social,html,css],
})
