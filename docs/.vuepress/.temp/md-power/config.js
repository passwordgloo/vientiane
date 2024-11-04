import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_urpkv6lhbwuhdi2urkqjo4uopi/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_urpkv6lhbwuhdi2urkqjo4uopi/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import PDFViewer from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_urpkv6lhbwuhdi2urkqjo4uopi/node_modules/vuepress-plugin-md-power/lib/client/components/PDFViewer.vue'
import Plot from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_urpkv6lhbwuhdi2urkqjo4uopi/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_urpkv6lhbwuhdi2urkqjo4uopi/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import '/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.114_markdown-it@14.1.0_typescript@5.6.3_vuepress@2.0.0-rc.1_urpkv6lhbwuhdi2urkqjo4uopi/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('PDFViewer', PDFViewer)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
