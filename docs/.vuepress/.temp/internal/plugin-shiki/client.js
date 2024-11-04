
import { useCopyCode } from '/Users/liuguanglu/vientiane/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.114_typescript@5.6.3_vue@3.5.12_typescript@5.6.3__vue_yd3ulsixnxxuk7lrrmoemuhs44/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from '/Users/liuguanglu/vientiane/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.114_typescript@5.6.3_vue@3.5.12_typescript@5.6.3__vue_yd3ulsixnxxuk7lrrmoemuhs44/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
