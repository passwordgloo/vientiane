---
title: flex布局
author: 落笔生花
createTime: 2024/07/14 21:37:43
permalink: /article/66oyxjbe/
tags:
  - css布局
---

::: warning
父元素设置`display:flex`
:::

## 主轴对齐

:::info
使用`justify-content`属性设置主轴对齐<br>
使用`align-content`设置换行后主轴对齐
:::

| 属性值        | 说明                         |
| ------------- | ---------------------------- |
| flex-start    | 默认值                       |
| flex-end      | 终点开始                     |
| center        | 居中排列                     |
| space-around  | 均匀分布，空白在盒子两侧     |
| space-between | 均匀分布，空白在相邻盒子两侧 |
| space-evenly  | 弹性盒子与容器之间距离相等   |


## 侧轴对齐

:::tip
使用`align-items`属性<br>
使用`align-self`控制单个盒子
:::

| 属性值     | 说明     |
| ---------- | -------- |
| flex-start | 默认值   |
| flex-end   | 终点开始 |
| center     | 居中排列 |
| stretch    | 默认值   |

## 主轴方向

::: info

flex-direction

:::

| 属性值         | 说明     |
| -------------- | -------- |
| row            | 行       |
| column         | 列       |
| row-reverse    | 行（反） |
| column-reverse | 列（反） |

## 换行

::: warning
父元素设置`flex-wrap`

:::
