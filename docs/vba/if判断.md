---
title: if判断
author: 枯树生花
createTime: 2024/07/07 10:01:03
permalink: /vba/k7f5uvj9/
---
## range

:::warning
会在当前工作表执行
:::

```vb
Sub 指定区域()
Dim i As Integer
For i = 1
  Range("a" & i) = i
Next
End Sub
```

```vb
Sub 另外的写法()
Dim ge As Range
Dim i As Integer
For Each ge In Range("a1:a10")
i = i + 1
ge = i

Next

End Sub
```

## if语句

### 单分支

:::danger

注意Then（然后）与Than（比较）

:::

```vb
Sub 修昵称改()
Dim i As Integer
For i = 2 To 26
If Range("e" & i) = "男" Then
    Range("f" & i) = "先生"
Else
    Range("f" & i) = "女生"
End If
Next

End Sub
```

### 多分支

```vb
Sub if多分支()
Dim i As Integer
For i = 2 To 12

If Range("c" & i) - 3500 <= 0 Then
    Range("d" & i) = 0
ElseIf Range("c" & i) - 3500 > 0 And Range("c" & i) - 3500 <= 1500 Then
    Range("d" & i) = (Range("c" & i) - 3500) * 0.03
ElseIf Range("c" & i) - 3500 > 1500 And Range("c" & i) - 3500 <= 4500 Then
    Range("d" & i) = (Range("c" & i) - 3500) * 0.1 - 105
ElseIf Range("c" & i) - 3500 > 4500 And Range("c" & i) - 3500 <= 9000 Then
    Range("d" & i) = (Range("c" & i) - 3500) * 0.2 - 555
ElseIf Range("c" & i) - 3500 > 9000 And Range("c" & i) - 3500 <= 35000 Then
    Range("d" & i) = (Range("c" & i) - 3500) * 0.25 - 1005
ElseIf Range("c" & i) - 3500 > 35000 And Range("c" & i) - 3500 <= 55000 Then
    Range("d" & i) = (Range("c" & i) - 3500) * 0.3 - 2755
ElseIf Range("c" & i) - 3500 > 55000 And Range("c" & i) - 3500 <= 80000 Then
    Range("d" & i) = (Range("c" & i) - 3500) * 0.35 - 5505
Else
    Range("d" & i) = (Range("c" & i) - 3500) * 0.45 - 13505
End If

Next
    
End Sub
```

## 退出for循环

```vb
Sub 退出for循环()
If xxx Then
Exit For

End If
    
End Sub
```
