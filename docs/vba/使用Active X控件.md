---
title: 使用Active X控件
author: 枯树生花
createTime: 2024/07/07 10:01:03
permalink: /vba/cjalwr8e/
---


::: warning Mac不支持

Mac上Office启用Active X控件时，会弹出警告框，提示不支持显示该功能

:::

## 按钮控件

```vb
Sub test1()

Sheet1.CommandButton1.Caption = "结束"

End Sub


Sub test2()

Sheet1.CommandButton1.Enabled = False

End Sub

Sub test3()

Sheet1.CommandButton1.Visible = False

End Sub


Sub test4()

Sheet1.CommandButton1.Top = Sheet1.CommandButton1.Top + Sheet1.CommandButton1.Height

End Sub
```

## 标签控件

```vb
Sub test1()

Sheet1.Label1.Caption = "ABCD"

End Sub

Sub test2()

Sheet1.Label1.Visible = False

End Sub
```

## 单选按钮控件

```vb
Sub test()

If Sheet1.OptionButton1.Value = True Then
    MsgBox "男性"
ElseIf Sheet1.OptionButton2.Value = False Then
    MsgBox "女性"
Else
    MsgBox "未选择性别"
End If

End Sub
```

## 微调按钮控件

```vb
Sub test()
Sheet1.SpinButton1.Min = 1
Sheet1.SpinButton1.Max = 10
End Sub


Sub test1()
Range("a1") = Sheet1.SpinButton1.Value
End Sub
```

