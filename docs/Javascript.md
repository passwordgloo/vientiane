---
title: Javascript介绍
author: 清风
createTime: 2024/07/17 23:51:59
permalink: /article/67jtyktz/
---

> 强烈建议首先了解[HTML](/html/jcg4iavr/)和[CSS](/css/bsfm7ror/)

::: info Js是什么
是一种运行在客户端（浏览器）的编程语言，实现人机交互效果

:::

<CardGrid>
  <LinkCard title="Js基础" href="/javascript/1qc7byvw/" />

 <LinkCard title="Js高级开发" href="/javascript/bwer4ndo/" />

  <LinkCard title="WEB API" href="/" />

</CardGrid>


## Javascript 组成

> 关于ECMAScript与Javascript的区别，推荐看知乎提问[JavaScript 和 ECMAScript 究竟是什么关系？](https://www.zhihu.com/question/538397613)

- ECMAScript：规定了js基础语法核心知识。
- Web APIs：DOM、BOM、Ajax操作、其他

::: info DOM

文档对象模型（Document Object Model），形象化地将网页结构比作一棵树（数据结构），当成Document对象使用

编程领域中，对象(Object)指一种拥有具体数据（Data）并且具有（并不总是）特定行为（Behavior）的东西。
:::

![](/js/html.png)

::: tip BOM
BOM是浏览器对象模型（Browser Object Model）的缩写。除了能访问DOM外，还能方便控制浏览器窗口、标签页等行为<br>
可以理解为，DOM${\color{purple}\subseteq}$BOM
:::

[Javascript MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/Javascript)

## Javascript 书写位置

### 内嵌式

:::: tabs

@tab 步骤

::: steps

1. 步骤1

   要将js代码嵌入到html文件中

2. 步骤2

   在html文件中添加一个 script, script标签中的代码就是js代码

3. 步骤3

   `script`标签的位置可以在任何地方 (推荐在 `head`标签中或者 `body`标签中)

@tab 示例

```js
<script>
  alert('预见你真好！')
 </script>
```

::::

### 外联式

::: tip
js外联式写法在网页中任何一个位置都都可以 (推荐head标签中或者body标签中)

:::

::: danger
js中内嵌式写法和外联式写法不可以混合使用

:::

:::: tabs

@tab 步骤

::: steps

1. 步骤1

   先创建一个js文件  后缀名是 xxxx.js

2. 步骤2

   不能使用link标签引入js文件,使用script标签引入js文件

:::

@tab 示例

```js
<script src="src/dir/test.js"></script>
```

::::

### 行内式

::: danger

不推荐使用，vue喜欢用

:::

@[jsfiddle tab="html,result" height="8rem"](passwordgloo/dLawr1g4)

## Javascript 注释
`Ctrl` + `/`：行内注释

`Shift` +  `Alt` + `A`：块级注释

## Javascript 结束符

::: warning

统一格式,要加都加,否则不加

:::

- js中结束符号以`;`结尾
- js中结束符号`;`可以省略的

## Javascript 输出信息

```js
alert('123');   // 将信息在网页中以弹窗形式输出
console.log(123)  // 将信息在浏览器控制台中输出
document.write('abc');  // 将信息在网页中 (body标签中)输出
console.warn()    //控制台输入警告信息
console.error()   //控制台输入错误信息
```
::: warning
输出字符串需要添加引号
:::

@[jsfiddle tab="js,result" height="7rem"](passwordgloo/q5hrbc12/)

## Javascript 输入消息

### 输入消息方式

@[jsfiddle tab="js,result" height="6rem"](passwordgloo/3otqen4s/)

### 选择输入

@[jsfiddle tab="js,result" height="6rem"](passwordgloo/jr2umpLs/)

## Javascript 注意事项

1. js中是严格区分字母大小写的
2. 如果希望在网页中输出一个html标签,通过 document.write();

## 断点测试

> 推荐阅读知乎用户Native8418写的[一小时实践入门Edge浏览器的开发者工具](https://zhuanlan.zhihu.com/p/639174201)

![](/js/breakpoint.png)

