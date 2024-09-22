---
title: 商品的SKU处理
author: igloo
createTime: 2024/07/21 11:50:43
permalink: /article/zg10ay7j/
tags:
  - js案例
  - 对象
---

```js
// SKU 就是商品的信息，比如 白色，38码，XL，一箱.......
let spec = { size: '小号', color: '紫色' }   // 小号/紫色
console.log(Object.values(spec).join('/')) // ['小号', '紫色'].join('/')
```

