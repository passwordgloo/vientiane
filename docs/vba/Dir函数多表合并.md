---
title: Dir函数多表合并
author: 枯树生花
createTime: 2024/07/07 10:01:03
permalink: /vba/85xwsg5c/
---


## 对象赋值到变量

```vb
Sub test()
Dim sht As Worksheet

For i = 2 To 5
Set sht = Sheets.Add
sht.Name = Sheet1.Range("a" & i)
Next

End Sub
```

## Dir函数

```vb
'获得所有文件名
Sub test()
Dim str As String

str = Dir("d:\data\*.*")

For i = 1 To 100
    Range("a" & i) = str
    str = Dir
    
    
    If str = "" Then
        Exit For
    End If
Next

End Sub
```

## 多文件合并

```vb
Sub wjhb()
Dim str As String
Dim wb As Workbook

str = Dir("d:\data\*.xls*")

For i = 1 To 100
    Set wb = Workbooks.Open("d:\data\" & str)
    
    wb.Sheets(1).Copy after:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count)
    ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count).Name = Split(wb.Name, ".")(0)
    
    wb.Close
    str = Dir
    If str = "" Then
        Exit For
    End If
Next
End Sub
```

```vb
Sub wjhb()
Dim str As String
Dim wb As Workbook
Dim sht As Worksheet

str = Dir("d:\data\*.xls*")

For i = 1 To 100
    Set wb = Workbooks.Open("d:\data\" & str)
    For Each sht In wb.Sheets
        sht.Copy after:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count)
        ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count).Name = Split(wb.Name, ".")(0) & sht.Name
    Next
    wb.Close
    str = Dir
    If str = "" Then
        Exit For
    End If
Next
End Sub
```

## 查找功能

```vb
Sub chazhao()
Dim rng As Range

Set rng = Range("d:d").Find(Range("l3"))

If Not rng Is Nothing Then
    Range("m3") = rng.Offset(0, 3)
End If

End Sub
```

