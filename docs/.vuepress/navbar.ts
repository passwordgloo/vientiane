import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const navbar = defineNavbarConfig([
    { text: '首页', link: '/', icon: 'solar:home-smile-bold' },
    {
        text: '前端',
        icon: 'solar:box-bold-duotone',
        items: [
            {
                text: 'HTML',
                link: '/html/jcg4iavr/',
                icon: 'solar:letter-opened-bold-duotone'
            },
            {
                text: 'CSS',
                link: '/css/bsfm7ror/',
                icon: 'solar:letter-opened-bold-duotone'
            },
            {
                text: 'Javascript',
                link: '/article/67jtyktz/',
                icon: 'solar:letter-opened-bold-duotone'
            },
            {
                text: 'Node',
                link: '/article/ypmrbeb2/',
                icon: 'solar:letter-opened-bold-duotone'
            },
        ]
    },
    {
        text: '编程',
        icon: 'solar:chat-square-code-bold-duotone',
        items: [
            { text: 'C', link: '/c/wvaf8a5j/' },
            { text: 'vba', link: '/vba/gbwe56po/' },
        ]
    },
    { text: '归档', link: '/blog/archives/', icon: 'solar:bookmark-opened-bold-duotone' },
    { text: '友链', link: '/friends/', icon: 'solar:people-nearby-bold-duotone' },
    { text: `${version}`, icon: 'codicon:versions', link: '/CHANGELOG.md' },
])
