<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>更多内容请访问<a href="https://www.cnblogs.com/passwordgloo/p/git.html" target="_blank" rel="noopener noreferrer">Git配置说明</a></p>
</div>
<h2 id="区域" tabindex="-1"><a class="header-anchor" href="#区域"><span>区域</span></a></h2>
<p>工作区：处理工作的区域</p>
<p>暂存区：临时存放的区域</p>
<p>版本库：永久存档区域</p>
<h2 id="回退" tabindex="-1"><a class="header-anchor" href="#回退"><span>回退</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> log</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --oneline</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reflog</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> //查看全部记录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reset</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --hard</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> xxxx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> //回退到特定版本xxx</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="忽略" tabindex="-1"><a class="header-anchor" href="#忽略"><span>忽略</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -r</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --cached</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> //清除暂存区所有跟踪记录</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="冲突" tabindex="-1"><a class="header-anchor" href="#冲突"><span>冲突</span></a></h2>
<p>多个分支，修改同一文件</p>
</div></template>


