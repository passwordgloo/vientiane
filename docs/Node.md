---
title: Node
createTime: 2024/08/22 21:13:51
permalink: /article/ypmrbeb2/
---
## Js的构成

请访问[Javascript 介绍](/article/67jtyktz/)

## 内核

渲染引擎：用于解析html标签、css样式

Javascript解析引擎：用于解析和翻译Js代码

### V8引擎

嵌入在谷歌浏览器中使用，提供内置API调用

内置API包括DOM、BOM、Canvas、XMLhttp、Js内置对象等

## Node

> node是一个基于Chrome v8引擎的Javascript运行的独立环境

> [!warning]
> Node环境无法使用DOM和BOM

### 安装

建议安装到非中文目录下

> [!tip]
>Powershell需要降低安全性才能使用node，推荐使用cmd

### 使用

Vs code在集成终端中打开

```bash
node filename.js
```

## 模块化

某个模块发布后，所有程序员都能使用

封装一些常用的工具函数

### 模块规范

<CardGrid>
  <LinkCard title="CommonJs规范" href="/article/wq87xhx5/"/>

<LinkCard title="ES6规范" href="/article/a5joal9k/"/>

</CardGrid>

### 模块分类

内置模块

自定义模块

第三方模块

### 内置模块

[fs模块](/article/4gihfcsz/)

