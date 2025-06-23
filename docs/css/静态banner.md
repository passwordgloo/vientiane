---
tags:
  - CSS基础
title: 静态banner
createTime: 2025/06/14 23:10:42
permalink: /article/sae8ua5z/
---

:::: demo title="小米产品版式"

::: code-tabs

@tab CSS

```css
.banner{
    height:200px;
    background: #ffcc00 url(/home/image.png) no-repeat left bottom;
    text-align: right;
}

.banner h2 {
    color: #333;
    font-size: 36px;
    font-weight: 400;
    line-height: 100px;
}

.banner p {
    font-size: 20px;
}

.banner a {
    display: inline-block;
    width:125px;
    height: 40px;
    background-color: #d23569;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 20px;
}

```

@tab HTML

```html
<div class="banner">
    <h2>创造产生价值</h2>
    <p>兼容并蓄，走向世界；兼容并蓄，走向世界；兼容并蓄，走向世界；兼容并蓄，走向世界</p>
    <a href="#">我要报名</a>
</div>
```

:::

::::
