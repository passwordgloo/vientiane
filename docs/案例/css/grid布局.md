---
title: grid布局
author: 落笔生花
createTime: 2024/07/14 20:56:45
permalink: /article/pvf28khi/
tags:
  - css布局
---

## grid-column-start

### 正值

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start:3 // [!code focus]
}
```

![](/css/image_1681543302390.png)

### 负值

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water{
    grid-column-start:-3  // [!code focus]
}
```

![](/css/image_1681543588717.png)

### span

将`span`关键字和`grid-column-start`一起使用，相对于结束位置来设置其宽度

```css{9}
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-column-start:span 3; 
    grid-column-end:6;
}
```

![](/css/image_1681543982151.png)

## grid-column-ends

### 正值

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water {
    grid-column-start: 1;
    grid-column-end:4  // [!code focus]//从第一列到第三列，注意写出4
}
```

![](/css/image_1681543362691.png)

### 负值

::: info
你也许已经注意到结束的值比起始的值大。但事实证明并非如此！

:::

```css{9-10}
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-column-start: 5;
    grid-column-end:2;
}
```

![](/css/image_1681543396921.png)

>如果你想要从右边数网格的列数而不是从左边数，你可以设置`grid-column-start`和`grid-column-end`为负值。比如说，你可以设置它为-1来指定为右边的第一列。

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-column-start:1;
    grid-column-end:-2;
}
```

![](/css/image_1681543412736.png)

### span

::: warning

你可以根据网格的开始和结束位置来定义一个网格项，你也可以用`span`关键词来指定你所要跨越的宽度。请注意`span`只能是正值。

:::

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-column-start:2;
    grid-column-end:span 2 // [!code focus]
}
```

![](/css/image_1681543810335.png)

## grid-column缩写

如果每次都输入`grid-column-start`和`grid-column-end`两个属性，我们一定会厌烦的。幸运的是，`grid-column`是一个缩写形式，它可以一次接受两个值，只要用'/'分开就好。


>比如说：`grid-column: 2 / 4;`就会设置网格项从第二列开始，到第四列结束。

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-column: 4 / 6 // [!code focus]
}
```

![](/css/image_1681544003919.png)

::: tip

`span`关键字在这个简写中也是可以使用的

:::

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-column:2/span 3 // [!code focus]
}
```

![](/css/image_1681544012099.png)


## grid-row-start

其中一件事情使CSS网格布局和Flex盒布局不同的是，你可以很轻松的在二维的空间里定位一个网格项: 行和列。`grid-row-start`就像`grid-column-start`一样，只不过是在垂直方向指定起始位置。

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-row-start:3 // [!code focus]
}
```

![](/css/image_1681544029114.png)

### 缩写

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-row:3/6 // [!code focus]
}
```

![](/css/image_1681544276934.png)

```css{9-10}
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#poison{
    grid-column:2;
    grid-row:5;
}
```

![](/css/image_1681544537791.png)

::: info
使用`grid-column`和`grid-row`一起来定义一个较大区域的网格

:::

```css{9-10}
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-column:2/span 4;
    grid-row:1/span 5;
}
```

![](/css/image_1681544713126.png)


## grid-area

如果你觉得同时输入`grid-column`和`grid-row`也很复杂，我们还有另一种缩写。`grid-area`属性接受4个由'/'分开的值：`grid-row-start`, `grid-column-start`, `grid-row-end`, 最后是`grid-column-end`。

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water{
    grid-area:1/2/4/6 // [!code focus]
}
```

![](/css/image_1681544996767.png)

::: tip
`grid-area`可以重叠使用

:::

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


#water-1{
    grid-area: 1 / 4 / 6 / 5 // [!code focus]
}
#water-2{
    grid-area:2/3/5/6 // [!code focus]
}
```

![](/css/image_1681545331420.png)

## order

如果网格项不是以`grid-area`、`grid-column`、`grid-row` 等显示的，它们会自动按照它们在源程序中出现的位置摆放。同样我们也可以使用`order`属性来重写它的顺序，这也是网格布局优于表格布局的好处之一。


默认情况下，所有的网格项的`order`都是0，但是顺序也可以被任意设置为正数或者负数，就像`z-index`一样。

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


.water {
  order: 0 // [!code focus]
}


#poison{
  order: 1 // [!code focus]
}
```

![](/css/image_1681545552130.png)


```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}


.water {
  order: 0 // [!code focus]
}


#poison{
  order: -1 // [!code focus]
}
```

![](/css/image_1681545610565.png)

## grid-template-columns

```css{3}
#garden {
    display: grid;
    grid-template-columns:50%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}


#water {
    grid-column: 1;
    grid-row: 1;
}
```

![](/css/image_1681545906228.png)

### repeat

指定一些具有相同宽度的网格项会变得很乏味。幸运的是有`repeat`函数来帮助我们。


比如说，之前我们使用`grid-template-columns: 20% 20% 20% 20% 20%;`属性定义了5列，每列占20%。这可以被简写为：`grid-template-columns: repeat(5, 20%);`


```css
#garden {
    display: grid;
    grid-template-columns:repeat(8,12.5%) // [!code focus]
    grid-template-rows: 20% 20% 20% 20% 20%;
}


#water {
    grid-column: 1;
    grid-row: 1;
}
```

![](/css/image_1681546041210.png)

### 像素

::: info

`grid-template-columns`不仅仅只接受百分比的值，也接受像像素或em这样的长度单位。你甚至可以将不同的长度单位混合使用。

:::

```css
#garden {
    display: grid;
    grid-template-columns:100px 3em 40%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}
```

![](/css/image_1681546194163.png)

### 分数fr

::: danger
网格系统也引入了一个新的单位，分数`fr`。每一个`fr`单元分配一个可用的空间。比如说，如果两个元素分别被设置为`1fr`和`3fr`，那么空间就会被平均分配为4份；第一个元素占据1/4，第二个元素占据3/4。

:::


```css
#garden {
    display: grid;
    grid-template-columns:1fr 5fr // [!code focus]
    grid-template-rows: 20% 20% 20% 20% 20%;
}
```

![](/css/image_1681546359732.png)

### px与fr混用

```css
#garden {
    display: grid;
    grid-template-columns:50px 1fr 1fr 1fr 50px // [!code focus]
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area: 1 / 1 / 6 / 2;
}


#poison {
  grid-area: 1 / 5 / 6 / 6;
}
```

![](/css/image_1681546524280.png)


```css
#garden {
    display: grid;
    grid-template-columns:75px 3fr 2fr // [!code focus]
    grid-template-rows: 100%;
}
```

![](/css/image_1681546704279.png)

## grid-template

```css
#garden {
    display: grid;
    grid-template:60% 40%/200px;
}


#water {
    grid-column: 1;
    grid-row: 1;
}
```

![](/css/image_1681548337337.png)
