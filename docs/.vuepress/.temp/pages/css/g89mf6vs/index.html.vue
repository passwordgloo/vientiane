<template><div><p><img src="/body/green_5.webp" alt=""></p>
<PDFViewer src="https://file.iglooblog.top/pdf/day08%EF%BC%88CSS06-%E5%AE%9A%E4%BD%8D%2B%E8%A3%85%E9%A5%B0%EF%BC%89v1.0.pdf" title="day08%EF%BC%88CSS06-%E5%AE%9A%E4%BD%8D%2B%E8%A3%85%E9%A5%B0%EF%BC%89v1.0.pdf" :page="1" :no-toolbar="false" width="100%" height="" ratio="" :zoom="50" /><h2 id="定位" tabindex="-1"><a class="header-anchor" href="#定位"><span>定位</span></a></h2>
<h3 id="静态定位" tabindex="-1"><a class="header-anchor" href="#静态定位"><span>静态定位</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:17rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/br3Lpshm/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位"><span>相对定位</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:24rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/c7mnjbwk/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位"><span>绝对定位</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:28rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/tuzhgse8/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h4 id="父子关系" tabindex="-1"><a class="header-anchor" href="#父子关系"><span>父子关系</span></a></h4>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:42rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/qt04L723/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h4 id="居中" tabindex="-1"><a class="header-anchor" href="#居中"><span>居中</span></a></h4>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:26rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/p401uyoq/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><CodeDemo id="code-demo-27" type="normal" title="%E5%B1%82%E7%BA%A7%E5%85%B3%E7%B3%BB" code="eJyNUV1LwlAY/isvu4yZGnQzzV+yG92WG65zhjumJYKQCzNMiQwxpASjbrKiD0T7+DOeM/cvOnNbEXTRzQvv8z5fh1MVdLJjCpKQVo1dUMysbW/JAkaaLGT4TMc5nJHRryspY37lM7oKoqDYNjfxWVUZAZQNlegSbCQSViXlA7pm5HXyg9RkJKN1nhDwLWwbxMBIgmzOxmaJaCuVqW2vNKEJwZYEm8Hm7/sxA6laRYJkCOSySiFfxCWkxhRs4qIEloEK33G88j/iwoAwLhkW/tveLuzlzJKvXiXE18DnAXjz/nIyZgcOPXxZTI9FoJPB4r3tDhruxSm96wLQ7gkbXi/rDn10FtMWiIEwehLrPbPeQwpo55zW35avLTq+EYH1P9zxzBvN6KzDMW94xaViJOLuQS5XsP59InBkT7es0ZEiEv10vNHcc9q02wxKsaO2e3bJek0ZrcX5Z9a+AIOH4UU=">
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">one</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">one</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">two</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">two</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 200</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 200</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">one</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  position</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> absolute</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  left</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  top</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 50</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  z-index</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> pink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">two</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  position</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> absolute</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  left</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 50</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  top</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> skyblue</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    默认情况下, 定位的盒子  后来者居上 ,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    z-index:整数; 取值越大, 显示顺序越靠上, z-index的默认值是0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    注意: z-index必须配合定位才生效</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">*/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<h2 id="装饰" tabindex="-1"><a class="header-anchor" href="#装饰"><span>装饰</span></a></h2>
<h3 id="垂直对齐" tabindex="-1"><a class="header-anchor" href="#垂直对齐"><span>垂直对齐</span></a></h3>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>基线：浏览器文字类型元素排版中存在用于对齐的基线</p>
</div>
<p><img src="/css/PixPin_2024-01-17_06-06-12.png" alt=""></p>
<table>
<thead>
<tr>
<th>属性值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td>baseline</td>
<td>默认，基线对齐</td>
</tr>
<tr>
<td>top</td>
<td>顶部对齐</td>
</tr>
<tr>
<td>middle</td>
<td>中部对齐</td>
</tr>
<tr>
<td>bottom</td>
<td>底部对齐</td>
</tr>
</tbody>
</table>
<h3 id="光标类型" tabindex="-1"><a class="header-anchor" href="#光标类型"><span>光标类型</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用属性<code v-pre>cursor</code></p>
</div>
<table>
<thead>
<tr>
<th>属性值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>默认值，通常是箭头</td>
</tr>
<tr>
<td>pointer</td>
<td>小手效果，提示用户可点击</td>
</tr>
<tr>
<td>text</td>
<td>工字形，提示用户可选择文字</td>
</tr>
<tr>
<td>move</td>
<td>十字光标，提示用户可以移动</td>
</tr>
<tr>
<td>url</td>
<td>自定义图片</td>
</tr>
</tbody>
</table>
<h3 id="圆角边框" tabindex="-1"><a class="header-anchor" href="#圆角边框"><span>圆角边框</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用属性<code v-pre>border-radius</code></p>
</div>
<p>一个值：表示四个角是相同的</p>
<p>三个值：左上、右上（对角左下）、右下</p>
<p>四个值：左上、右上、右下、左下</p>
<h3 id="圆" tabindex="-1"><a class="header-anchor" href="#圆"><span>圆</span></a></h3>
<div class="vp-steps"><ol>
<li>
<p>步骤1</p>
<p>盒子必须是正方形</p>
</li>
<li>
<p>步骤2</p>
<p>取值50%，超过50%无效果</p>
</li>
</ol>
</div><iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:11rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/yn3p1b6j/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="胶囊按钮" tabindex="-1"><a class="header-anchor" href="#胶囊按钮"><span>胶囊按钮</span></a></h3>
<div class="vp-steps"><ol>
<li>
<p>步骤1</p>
<p>盒子要求是矩形</p>
</li>
<li>
<p>步骤2</p>
<p>值是盒子高度的一半</p>
</li>
</ol>
</div><iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:11rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/39Lvba24/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="溢出效果" tabindex="-1"><a class="header-anchor" href="#溢出效果"><span>溢出效果</span></a></h3>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>指的是盒子内容部分超出盒子范围</p>
</div>
<table>
<thead>
<tr>
<th>属性值</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td>visible</td>
<td>默认值</td>
</tr>
<tr>
<td>hidden</td>
<td>溢出部分隐藏</td>
</tr>
<tr>
<td>scroll</td>
<td>无论是否溢出，显示滚动条</td>
</tr>
<tr>
<td>auto</td>
<td>根据内容自动显示滚动条</td>
</tr>
</tbody>
</table>
<h3 id="元素隐藏" tabindex="-1"><a class="header-anchor" href="#元素隐藏"><span>元素隐藏</span></a></h3>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p><code v-pre>visibility:hidden</code>浏览器正常渲染元素，<code v-pre>display:none</code>浏览器不渲染元素</p>
</div>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:25rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/Lubom8hd/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="透明属性" tabindex="-1"><a class="header-anchor" href="#透明属性"><span>透明属性</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用属性<code v-pre>opacity</code></p>
</div>
<h3 id="三角形" tabindex="-1"><a class="header-anchor" href="#三角形"><span>三角形</span></a></h3>
<div class="vp-steps"><ol>
<li>
<p>步骤1</p>
<p>画一个盒子</p>
</li>
<li>
<p>步骤2</p>
<p>设置四周不同颜色边框，方便区分</p>
</li>
<li>
<p>步骤3</p>
<p>盒子高度改为0，仅保留边框</p>
</li>
</ol>
</div><iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:13rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/wqy3ejvb/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h2 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展"><span>拓展</span></a></h2>
<h3 id="表格边框合并" tabindex="-1"><a class="header-anchor" href="#表格边框合并"><span>表格边框合并</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:18rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/zgbe7jtn/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="焦点伪类选择器" tabindex="-1"><a class="header-anchor" href="#焦点伪类选择器"><span>焦点伪类选择器</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:11rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/qb5x0dpr/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器"><span>属性选择器</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:13rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/8ztsj7hf/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe></div></template>


