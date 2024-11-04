import './articleTagColors.css'
export const articleTagColors = {"预览":"tvod","组件":"grxj","markdown":"nuaz","css案例":"tvod","css布局":"n8zg","导航":"23py","html案例":"tvod","js案例":"tvod","循环":"2zlf","对象":"w4y5","排序":"qkc2","数组":"w4y5","流程控制":"iguh","Node规范":"iguh"}

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
