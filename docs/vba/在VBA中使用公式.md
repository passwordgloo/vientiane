---
title: 在VBA中使用公式
author: 枯树生花
createTime: 2024/07/07 10:01:03
permalink: /vba/wdey4ynl/
---


## 工作表函数

```vb
Sub 统计()
Dim i, k, l, m As Integer

For i = 2 To Sheets.Count
    k = k + Application.WorksheetFunction.CountA(Sheets(i).Range("a:a")) - 1
    l = l + Application.WorksheetFunction.CountIf(Sheets(i).Range("f:f"), "男")
    m = m + Application.WorksheetFunction.CountIf(Sheets(i).Range("f:f"), "女")
Next

Sheet1.Range("d26") = k
Sheet1.Range("d27") = l
Sheet1.Range("d28") = m

End Sub
```

```vb
Sub 查询()

On Error Resume Next

Sheet1.Range("d14").ClearContents

For i = 2 To Sheets.Count
    Sheet1.Range("d14") = Application.WorksheetFunction.VLookup(Sheet1.Range("d9"), Sheets(i).Range("a:h"), 5, 0)
    Sheet1.Range("d16") = Application.WorksheetFunction.VLookup(Sheet1.Range("d9"), Sheets(i).Range("a:h"), 6, 0)
    Sheet1.Range("d18") = Application.WorksheetFunction.VLookup(Sheet1.Range("d9"), Sheets(i).Range("a:h"), 3, 0)
    Sheet1.Range("d20") = Application.WorksheetFunction.VLookup(Sheet1.Range("d9"), Sheets(i).Range("a:h"), 8, 0)
    Sheet1.Range("d22") = Sheets(i).Name
    
    If Sheet1.Range("d14") <> "" Then
        Exit For
    End If
Next
End Sub
```

## VBA函数

```vb
Sub test()

Sheet1.Range("b2") = Left(Sheet1.Range("a2"), InStr(Sheet1.Range("a2"), "@") - 1)

End Sub


Sub tiqu()

On Error Resume Next
For i = 2 To Sheet2.Range("a65536").End(xlUp).Row

    Sheet2.Range("b" & i) = Split(Sheet2.Range("a" & i), "-")(2) & "年 第" & Split(Sheet2.Range("a" & i), "-")(3) & "周"

Next

End Sub
```

