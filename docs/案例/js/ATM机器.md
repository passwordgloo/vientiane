---
title: ATM机器
author: 清风
createTime: 2024/07/16 23:04:24
permalink: /article/2hykm2o5/
tags:
  - js案例
---

```js
// 1. 只要一打开页面,就立即执行
// 定义变量默认保存金额
let m = 100;
// 只要条件成立(true) ,循环体中的代码就会一直执行
while (true) {
  let res = prompt(`请选择您的操作: 1 存钱 2 取钱  3 查看余额  4 退出`);
  if (res === '4') {
    // 立即退出
    break;
  }
  // 如果是其他操作?
switch (res) {
  case '1':
    //提示用户输入存款金额
    let money = Number(prompt('请输入存款金额'));
    // 在原来金额上累加
    m += money;
    break;
  case '2':
    // 提示用户输入取款金额
    let money1 = Number(prompt('请输入取款金额'));
    // 最好判断一下
    if (m < money1) {
      alert('余额不足');
    } else {
      m -= money1;
    }
    break;

  case '3':
    alert(`账户余额是: ${m}`);
    break;
}
```

