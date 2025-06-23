---
title: css介绍
createTime: 2025/06/11 22:56:56
permalink: /css/
---
## CSS定义

层叠样式表是一种样式表语言，用来描述HTML文档的呈现

## 书写位置

### 行内样式

> [!note]
>
> 键值对：key(属性)：value（值）

```html
<p style="color:red">
  红色文字
</p>
```

### 内联样式

```html{3-5}
<html>
  <head>
    <style>
      /* css 样式书写处 */
    </style>
  </head>
</html>
```

### 外链样式

::: code-tree title="外部样式表引入"  entry="index.html"

```html title="index.html"{3}
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <p>
      测试文字
    </p>
  </body>
</html>
```

```css title="style.css"
p {
  color: red;
}
```

:::
