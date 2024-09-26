import { defineClientConfig } from 'vuepress/client'
import PDFViewer from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.96_typescript@5.5.4_vuepress@2.0.0-rc.15_@vuepress+bundler-_hnypmtqkwo2nraep7do4kyphde/node_modules/vuepress-plugin-md-power/lib/client/components/PDFViewer.vue'
import Bilibili from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.96_typescript@5.5.4_vuepress@2.0.0-rc.15_@vuepress+bundler-_hnypmtqkwo2nraep7do4kyphde/node_modules/vuepress-plugin-md-power/lib/client/components/Bilibili.vue'
import Youtube from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.96_typescript@5.5.4_vuepress@2.0.0-rc.15_@vuepress+bundler-_hnypmtqkwo2nraep7do4kyphde/node_modules/vuepress-plugin-md-power/lib/client/components/Youtube.vue'
import Plot from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.96_typescript@5.5.4_vuepress@2.0.0-rc.15_@vuepress+bundler-_hnypmtqkwo2nraep7do4kyphde/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.96_typescript@5.5.4_vuepress@2.0.0-rc.15_@vuepress+bundler-_hnypmtqkwo2nraep7do4kyphde/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'
import '@internal/md-power/file-tree.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('PDFViewer', PDFViewer)
    app.component('VideoBilibili', Bilibili)
    app.component('VideoYoutube', Youtube)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
