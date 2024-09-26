import comp from "/Users/liuguanglu/vientiane/docs/.vuepress/.temp/pages/article/ziygmgyz/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/ziygmgyz/\",\"title\":\"响应式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"响应式\",\"author\":\"落笔生花\",\"createTime\":\"2024/07/14 21:31:52\",\"permalink\":\"/article/ziygmgyz/\",\"tags\":[\"css布局\"],\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.12,\"words\":37},\"filePathRelative\":\"案例/css/响应式.md\",\"categoryList\":[{\"id\":\"cf3e26\",\"sort\":10001,\"name\":\"案例\"},{\"id\":\"df5149\",\"sort\":10002,\"name\":\"css\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
