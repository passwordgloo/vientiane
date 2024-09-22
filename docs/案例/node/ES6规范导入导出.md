---
title: ES6规范导入导出
createTime: 2024/08/22 22:04:34
permalink: /article/a5joal9k/
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
export default {
    getArraySum,
    getSum,
    url:baseURL,
}
```

## 导入示例

### Node

> [!caution]
> Node默认采用commonjs解析，请在package.json并配置`"type":"module"`

```js
//语法：import 变量名 form '模块标识'
import obj from'./01_export.js'
console.log(obj);
console.log(obj.getArraySum（[1,2,3]));
```

### 浏览器

```js
<script type="module">
  import obj from 'test.js'
  console.log(obj)
</script>
```

