---
title: CommonJs规范导入导出
createTime: 2024/08/22 21:55:19
permalink: /article/wq87xhx5/
tags:
  - Node规范
---
## 导出示例

```js
const baseURL='http://geek.itheima.net'
const getSum =（numA,numB）=>numA+numB
const getArraySum =arr =>{
    let sum = 0
    arr.forEach(item => sum += item)
    return sum
}
//目标：想要被外部使用的话，需要"导出"
//语法：module.exports=}
//作用：把要导出的装入此对象内（key是外部要使用的，value是内部导出的值）
//注意：外部无法使用未导出的变量
module.exports={
		url:baseURL
}
```

## 导入示例

```js
// const 变量名 = require('模块路径')
const obj=require("test.js")
consollog(obj)
```
