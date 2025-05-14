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

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [ps],
})
