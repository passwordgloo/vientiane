---
title: Git
createTime: 2024/08/19 21:48:40
permalink: /article/a2gb1wc9/
---
::: tip

更多内容请访问[Git配置说明](https://www.cnblogs.com/passwordgloo/p/git.html)

:::

## 区域

工作区：处理工作的区域

暂存区：临时存放的区域

版本库：永久存档区域

## 回退

```bash
git log --oneline
git reflog //查看全部记录
git reset --hard xxxx //回退到特定版本xxx
```

## 忽略

```bash
git rm -r --cached . //清除暂存区所有跟踪记录
```

## 冲突

多个分支，修改同一文件
