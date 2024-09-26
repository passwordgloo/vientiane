import { enhanceTwoslash } from '/Users/liuguanglu/vientiane/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.96_typescript@5.5.4_vue@3.5.3_typescript@5.5.4__vuepr_l7fputsmk36so7lbbnkey3ehey/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/twoslash.js'
import { useCopyCode } from '/Users/liuguanglu/vientiane/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.96_typescript@5.5.4_vue@3.5.3_typescript@5.5.4__vuepr_l7fputsmk36so7lbbnkey3ehey/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from '/Users/liuguanglu/vientiane/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.96_typescript@5.5.4_vue@3.5.3_typescript@5.5.4__vuepr_l7fputsmk36so7lbbnkey3ehey/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  enhance({ app }) {
    enhanceTwoslash(app)
  },
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
