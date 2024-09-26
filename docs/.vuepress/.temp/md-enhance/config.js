import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/liuguanglu/vientiane/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_typescript@5.5.4_vuepress@2.0.0-rc.15_@vuepress+bundler-vite@2.0_plcooqw6x2cnkdanpzsuqgslue/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/Users/liuguanglu/vientiane/node_modules/.pnpm/katex@0.16.11/node_modules/katex/dist/katex.min.css";
import "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Tabs from "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/liuguanglu/vientiane/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_katex@0.16.11_markdown-it@14.1.0_typescript@5.5.4_vuep_s6mohk45ivljkfavfti47sqrgq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
