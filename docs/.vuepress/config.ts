import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '万象',
  description: 'library and textbook',

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: 'https://wiki.iglooblog.top',

    /* 文档仓库配置，用于 editLink */
    contributors: true,
    docsRepo: 'https://github.com/passwordgloo/vientiane',
    docsDir: 'docs',
    copyright: 'CC-BY-SA-4.0',
    editLink: false,
    changelog: {
      maxCount: 10,
      repoUrl: 'https://github.com/passwordgloo/vientiane',
      commitUrlPattern: ':repo/commit/:hash',
      issueUrlPattern: ':repo/issues/:issue',
      tagUrlPattern: ':repo/releases/tag/:tag'
    },

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    blog: {
      postList: true, // 是否启用文章列表页
      tags: true, // 是否启用标签页
      // include: ['blog/**/*.md'], //设置特定目录
      archives: true, // 是否启用归档页
      categories: true, // 是否启用分类页
      postCover: 'right', // 文章封面位置
      pagination: 15, // 每页显示文章数量
    },

    /* 博客文章页面链接前缀 */
    article: '/article/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,  // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true,      // 是否生成标题
    },

    /* 本地搜索, 默认启用 */
    // search: { provider: 'local' },

    
    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    search: {
      // provider: 'local'
      provider: 'algolia',
      appId: process.env.APP_ID,
      apiKey: process.env.SEARCH_KEY,
      indexName: process.env.INDEX,
    },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    codeHighlighter: {
      //   twoslash: true, // 启用 twoslash
      //   whitespace: true, // 启用 空格/Tab 高亮
        lineNumbers: true // 启用行号
    },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    // readingTime: true,

    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
    markdown: {
      abbr: true,         // 启用 abbr 语法  *[label]: content
      // markmap: true,    //需安装markmap-lib markmap-toolbar markmap-view
      annotation: true,   // 启用 annotation 语法  [+label]: content
      //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      collapse: true,     // 启用折叠面板。支持expand/accordion
      codeTree:true,
      plot: true,         // 启用隐秘文本语法 !!xxxx!!
      field: true,        // 启用field容器，，用于描述字段信息，语法 ::: field，复合容器 :::: field-group
      fileTree: true,     //启用文件树容器，支持simple/colored
      //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      //   icons: true,        // 启用内置图标语法  ::icon-name::
      //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      //   codeTree: true,     // 显示一个带有文件树的代码块区域 语法 ::: code-tress
      //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
      demo: true,         // 启用 demo 容器  ::: demo
      //   repl: {             // 启用 代码演示容器
      //     go: true,         // ::: go-repl
      //     rust: true,       // ::: rust-repl
      //     kotlin: true,     // ::: kotlin-repl
      //   },
      //   math: {             // 启用数学公式
      //     type: 'katex',
      //   },
      //   chartjs: true,      // 启用 chart.js
      //   echarts: true,      // 启用 ECharts
      //   mermaid: true,      // 启用 mermaid
      //   flowchart: true,    // 启用 flowchart
      image: {
        //     figure: true,     // 启用 figure
        lazyload: true,   // 启用图片懒加载
        mark: true,       // 启用图片标记
        //     size: true,       // 启用图片大小
      },
      //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
      //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
    },

    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    // comment: {
    //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    //   comment: true,
    //   repo: '',
    //   repoId: '',
    //   category: '',
    //   categoryId: '',
    //   mapping: 'pathname',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    // },

    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  }),
})
