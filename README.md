
前端业务代码工具库

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

##  安装使用

1. 直接下载目录下的[index.js](https://github.com/YangWenLong123/util/blob/master/index.js)使用，支持UMD通用模块规范
2. 使用npm安装

### 浏览器:
``` html
  <script src="index.js"></script>
  <script>
      const flag = Util.isObject({})
  </script>
```

### npm:
``` bash
$ npm install --save-dev util_alg
```

webpack、RequireJS、SeaJS等

``` javascript
const Util = require('util_alg')
const flag = Util.isObject({})
```

**推荐使用方法**

``` javascript
import Util from 'util_alg';
const flag = Util.isObject({})
```

## API文档

|    method                |   Description               |
|--------------------------|-----------------------------|
| Util.isObject()          |  [是否为对象类型数据]          |
| Util.isArray()           |  [是否为数组类型数据]          |
| Util.isBoolean()         |  [是否为布尔类型数据]          |
| Util.isString()          |  [是否为字符类型数据]          |
| Util.isNumber()          |  [是否为数字类型数据]          |
| Util.isUndefined()       |  [是否为Undefined类型数据]    |
| Util.isNull()            |  [是否为Null类型数据]         |
| Util.isFunction()        |  [是否为函数类型数据]          |
| Util.isSymboll()         |  [是否为Symboll类型数据]      |
| Util.isRegExp()          |  [是否为正则类型数据]          |
| Util.isError()           |  [是否为Error类型数据]        |
| Util.isDate()            |  [是否为日期类型数据]          |
| Util.isMath()            |  [是否为Math类型数据]         |
| Util.isGlobal()          |  [是否为Global类型数据]       |
| Util.isArrayBuffer()     |  [是否为buffer类型数据]       |
| Util.isBlob()            |  [是否为Blob类型数据]         |
| Util.isFinite()          |  [是否为数字]                |
