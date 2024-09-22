---
title: Fs模块
createTime: 2024/09/07 20:34:56
permalink: /article/4gihfcsz/
---
> [!warning]
>重复写入会自动覆盖掉之前的内容

>[!tip]
>回调函数写法请参考[Js进阶开发（2）](/javascript/bwer4ndo/)
```js
import fs from 'fs'
const filepath = '/path/file'
//判断文件存在
fs.access(filepath,(err) =>{
	if(err){
    console.log('file no exist')
  }else{
    
    //写入内容
    fs.writeFile(filePath,'test text',err =>{
      if(err){
        console.log(err)
        console.log('fail to write')
      }else{
        console.log('write success')
      }
    })
    
    //读取文件
    fs.readFile(filepath,(err,data)=>{
      if(err){
        console.log(err)
        console.log('fail to read')
      }else{
        //转为字符串
        console.log(data.toString())
      }
    })
    console.log('file exist')
  }
})
```

