import{_ as i,r as n,o as a,c as r,b as t,d as o,e as l,w as c,a as d}from"./app-BxuQfIW3.js";const p={},m={class:"hint-container tip"};function f(g,e){const s=n("RouteLink");return a(),r("div",null,[e[4]||(e[4]=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"重复写入会自动覆盖掉之前的内容")],-1)),t("div",m,[e[3]||(e[3]=t("p",{class:"hint-container-title"},"提示",-1)),t("p",null,[e[1]||(e[1]=o("回调函数写法请参考")),l(s,{to:"/javascript/bwer4ndo/"},{default:c(()=>e[0]||(e[0]=[o("Js进阶开发（2）")])),_:1}),e[2]||(e[2]=o(" ```js import fs from 'fs' const filepath = '/path/file' //判断文件存在 fs.access(filepath,(err) =>{ if(err){ console.log('file no exist') }else{"))])]),e[5]||(e[5]=d(`<pre><code>//写入内容
fs.writeFile(filePath,&#39;test text&#39;,err =&gt;{
  if(err){
    console.log(err)
    console.log(&#39;fail to write&#39;)
  }else{
    console.log(&#39;write success&#39;)
  }
})

//读取文件
fs.readFile(filepath,(err,data)=&gt;{
  if(err){
    console.log(err)
    console.log(&#39;fail to read&#39;)
  }else{
    //转为字符串
    console.log(data.toString())
  }
})
console.log(&#39;file exist&#39;)
</code></pre><p>} })</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,3))])}const h=i(p,[["render",f],["__file","index.html.vue"]]),v=JSON.parse(`{"path":"/article/4gihfcsz/","title":"Fs模块","lang":"zh-CN","frontmatter":{"title":"Fs模块","createTime":"2024/09/07 20:34:56","permalink":"/article/4gihfcsz/","description":"注意 重复写入会自动覆盖掉之前的内容 提示 回调函数写法请参考 \`\`\`js import fs from 'fs' const filepath = '/path/file' //判断文件存在 fs.access(filepath,(err) =>{ if(err){ console.log('file no exist') }else{ } })","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://course.iglooblog.top/article/4gihfcsz/"}],["meta",{"property":"og:site_name","content":"Vientiane"}],["meta",{"property":"og:title","content":"Fs模块"}],["meta",{"property":"og:description","content":"注意 重复写入会自动覆盖掉之前的内容 提示 回调函数写法请参考 \`\`\`js import fs from 'fs' const filepath = '/path/file' //判断文件存在 fs.access(filepath,(err) =>{ if(err){ console.log('file no exist') }else{ } })"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T14:46:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-22T14:46:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fs模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-22T14:46:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.4,"words":120},"git":{"createdTime":1727016377000,"updatedTime":1727016377000,"contributors":[{"name":"passwordgloo","email":"passwordgloo@163.com","commits":1}]},"autoDesc":true,"filePathRelative":"案例/node/Fs模块.md","categoryList":[{"id":"cf3e26","sort":10001,"name":"案例"},{"id":"089af6","sort":10005,"name":"node"}]}`);export{h as comp,v as data};
