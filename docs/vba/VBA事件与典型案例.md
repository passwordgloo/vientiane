---
title: VBA事件与典型案例
author: 枯树生花
createTime: 2024/07/07 10:01:03
permalink: /vba/x8qykpyf/
---


```vb
Private Sub Worksheet_SelectionChange(ByVal Target As Range)

Call gys

End Sub
```

## 自动筛选

```vb
Private Sub Worksheet_Change(ByVal Target As Range)
Application.EnableEvents = False
Call shaixuan
Application.EnableEvents = True
End Sub
```

## 自动更新

```vb
Private Sub Worksheet_Activate()
ActiveWorkbook.RefreshAll
End Sub
```

## 数据备份

```vb
Private Sub Workbook_BeforeSave(ByVal SaveAsUI As Boolean, Cancel As Boolean)

ThisWorkbook.SaveCopyAs "d:\data\" & Format(Now(), "yyyymmddhhmmss") & ".xls"

End Sub
```

## 其他对象事件

```vb
Private Sub CommandButton1_Click()
MsgBox "点我干嘛"
End Sub
```

