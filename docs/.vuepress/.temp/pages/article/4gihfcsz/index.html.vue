<template><div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>重复写入会自动覆盖掉之前的内容</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>回调函数写法请参考<RouteLink to="/javascript/bwer4ndo/">Js进阶开发（2）</RouteLink>
```js
import fs from 'fs'
const filepath = '/path/file'
//判断文件存在
fs.access(filepath,(err) =&gt;{
if(err){
console.log('file no exist')
}else{</p>
</div>
<pre><code>//写入内容
fs.writeFile(filePath,'test text',err =&gt;{
  if(err){
    console.log(err)
    console.log('fail to write')
  }else{
    console.log('write success')
  }
})

//读取文件
fs.readFile(filepath,(err,data)=&gt;{
  if(err){
    console.log(err)
    console.log('fail to read')
  }else{
    //转为字符串
    console.log(data.toString())
  }
})
console.log('file exist')
</code></pre>
<p>}
})</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


