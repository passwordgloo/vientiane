---
title: for循环
author: 枯树生花
createTime: 2024/07/07 10:01:03
permalink: /vba/jm8qxygr/
---


:::tip
书写注释是个良好习惯，按`Tab`控制缩进

VBA支持中文命名模块

:::

## 注释

```vb
'勤写注释方便自己理解
```

## 语法

### 基本语法

```vb
Sub for循环()
'定义i变量数据类型为整数
Dim i As Integer
For i = 1 To 50

Next
End Sub
```

### 固定步长

::: tip 解决删行跳行问题

从最后一行开始数，将step改为负数
:::

```vb
Sub 固定步长()
Dim i As Integer
For i = 1 To 6 Step 2
  '相关代码
Next
End Sub
```

