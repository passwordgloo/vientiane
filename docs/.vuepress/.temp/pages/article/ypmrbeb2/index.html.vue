<template><div><h2 id="js的构成" tabindex="-1"><a class="header-anchor" href="#js的构成"><span>Js的构成</span></a></h2>
<p>请访问<RouteLink to="/article/67jtyktz/">Javascript 介绍</RouteLink></p>
<h2 id="内核" tabindex="-1"><a class="header-anchor" href="#内核"><span>内核</span></a></h2>
<p>渲染引擎：用于解析html标签、css样式</p>
<p>Javascript解析引擎：用于解析和翻译Js代码</p>
<h3 id="v8引擎" tabindex="-1"><a class="header-anchor" href="#v8引擎"><span>V8引擎</span></a></h3>
<p>嵌入在谷歌浏览器中使用，提供内置API调用</p>
<p>内置API包括DOM、BOM、Canvas、XMLhttp、Js内置对象等</p>
<h2 id="node" tabindex="-1"><a class="header-anchor" href="#node"><span>Node</span></a></h2>
<blockquote>
<p>node是一个基于Chrome v8引擎的Javascript运行的独立环境</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>Node环境无法使用DOM和BOM</p>
</div>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<p>建议安装到非中文目录下</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Powershell需要降低安全性才能使用node，推荐使用cmd</p>
</div>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>
<p>Vs code在集成终端中打开</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">node</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> filename.js</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化"><span>模块化</span></a></h2>
<p>某个模块发布后，所有程序员都能使用</p>
<p>封装一些常用的工具函数</p>
<h3 id="模块规范" tabindex="-1"><a class="header-anchor" href="#模块规范"><span>模块规范</span></a></h3>
<CardGrid>
  <LinkCard title="CommonJs规范" href="/article/wq87xhx5/"/>
<LinkCard title="ES6规范" href="/article/a5joal9k/"/></CardGrid>
<h3 id="模块分类" tabindex="-1"><a class="header-anchor" href="#模块分类"><span>模块分类</span></a></h3>
<p>内置模块</p>
<p>自定义模块</p>
<p>第三方模块</p>
<h3 id="内置模块" tabindex="-1"><a class="header-anchor" href="#内置模块"><span>内置模块</span></a></h3>
<p><RouteLink to="/article/4gihfcsz/">fs模块</RouteLink></p>
</div></template>


