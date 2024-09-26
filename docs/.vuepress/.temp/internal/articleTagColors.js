import './articleTagColors.css'
export const articleTagColors = {"css案例":"1o3v","css布局":"6o8l","导航":"wu1j","html案例":"1o3v","js案例":"1o3v","循环":"mk83","对象":"1cmy","排序":"v95t","数组":"1cmy","流程控制":"4jtw","Node规范":"4jtw"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
