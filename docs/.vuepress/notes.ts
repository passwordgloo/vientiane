import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: '/css',
      link: '/css/',
      sidebar: [
        {
          text: '目录',
          collapsed: false,
          items: 'auto'
        }
      ]
    },
    {
      dir: '/html',
      link: '/html/',
      sidebar: [
        {
          text: '目录',
          collapsed: false,
          items: 'auto'
        }
      ]
    },
    {
      dir: '/c',
      link: '/c/',
      sidebar: [
        {
          text: '目录',
          collapsed: false,
          items: 'auto'
        }
      ]
    },
    {
      dir: '/js',
      link: '/javascript/',
      sidebar: [
        {
          text: '目录',
          collapsed: false,
          items: 'auto'
        }
      ]
    }
  ]
})