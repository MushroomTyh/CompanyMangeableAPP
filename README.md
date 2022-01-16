# 使用React模板开发
-----------------------------

更多React开发技巧和学习指南可参考[React 官网](https://zh-hans.reactjs.org)。

使用WeLink React开发框架可以快速构建和开发We码程序，基于 npm + webpack + react + hooks + weui 的快速开发本地化的框架。

<li style="list-style-type:disc;">遵循WeLink目录规范，构建项目时会生成遵循WeLink目录规范的目录。
<li style="list-style-type:disc;">集成了WeLink JSAPI，构建项目时会自动引入JSAPI。
<li style="list-style-type:disc;">基于weui，适配WeLink风格。</li>

### 目录结构

- [新建项目](#新建项目)
- [工程目录](#工程目录)
  - [引入图片和文件](#引入图片和文件)
  - [common 文件夹的使用](#common文件夹的使用)
    - [引入公共组件、三方库资源](#引入公共组件、三方库资源)
  - [添加路由](#添加路由)
    - [路由跳转](#路由跳转)
  - [样式引用](#样式引用)
  - [使用标准UI组件](#使用标准ui组件)
  - [国际化](#国际化)
  - [创建新页面](#创建新页面)
  - [真机调试](#真机调试)

### 新建项目

通过IDE**新建项目**，选择项目类型“**React模板**”。

### 工程目录

项目文件结构如下：

```text
└───template/
    ├───src/
        ├───common                   // 用于存放所有公用文件，例如图片、三方库、公用组件等
            ├───i18n/                // 国际化
                ├─── zh_CN           // 中文国际化
                  └─── common.json          
                └─── en_US            // 英文国际化
                  └─── common.json
            └───library/             // 公共组件、三方库资源
                ├───list_tab/        // 公共组件（例如列表切换）
                    ├───component    // 公共组件子组件
                    ├───img          // 公共组件用到的静态图片文件
                    ├───TO_DELETE    // 需要替换的一些静态文件
                    └───index.js     // 公共组件的入口文件
                └───JQuery           // 其他三方库文件
        ├───Page_Home/               // 应用主页面
            ├───component            // 存放所有子组件
            ├───img                  // 页面用到的静态图片文件
            ├───TO_DELETE            // 需要替换的一些静态文件
            └───index.js             // 页面的入口文件
        ├───index.html               // 应用入口文件
        └───app.json                 // 项目的配置文件，包含路由、服务器地址配置等代码配置相关信息
    └───.wecode/                     // eslint代码检查配置
        └───plugin.json              // We码相关的配置信息
```

当项目构建时，**必须包含以下文件**：

<li style="list-style-type:disc;"><code style="padding: .2em;margin: 0;font-size: .85em;background-color: #f7f7f7;">src/index.html</code>是页面模板

可以在 `src` 目录创建子目录，为了更快地重新构建，Webpack 只处理 `src` 中的文件。**需要将 JS 和 CSS 放到 `src` 里面**，否则 Webpack 将不会处理。

### 引入图片和文件

使用静态模块，比如图片和样式等，通过 Webpack 编译。

可以通过**`import` 引入 JavaScript 模块**，使 Webpack 打包时包含这些文件。
这些文件的路径最终将在 html 自动引用，比如通过图片的 `src` 属性或者通过 `href` 引入样式。

为了减少页面请求，导入的图片小于 1000 bytes 将返回一个data URI替换图片地址。支持格式：bmp, gif, jpg, jpeg, 和 png。

以下有个例子：

```js
import React from "react";
import logo from "./logo.png"; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

当项目构建完，Webpack 会将图片放到 `build` 目录中，以及引用正确的访问地址。

同样适合在 CSS 中：

```css
.Logo {
  background-image: url(./logo.png);
}
```

### common文件夹的使用

#### `引入公共组件、三方库资源`

可以通过 `common` 文件夹引入其他模块代码。

注意，建议使用 JavaScript 文件中的`import`引入。
例如，请参阅[样式引用](#样式引用)和[引入图片和文件](#引入图片和文件)部分。

这种机制提供了许多好处:

<li style="list-style-type:disc;">脚本和样式表被压缩并打包在一起，以避免额外的网络请求。
<li style="list-style-type:disc;">丢失的文件会导致编译错误，而不会造成 404 错误。</li>


### 添加路由

在 `src/app.json` 添加配置，如下：

```json
{
  "pages": {
    "./Page_Home/index": "/",
    "./Page_Desc/index": "/desc"
  }
}
```

以键值对存在：

`key` 表示 `src` 目录下具体路由组件文件的位置，不需要带文件后缀.js，如 `./Page_Home/index`；

`value` 表示页面访问的 hash 路由。如首页配置 `/`，访问地址为：`html/index.html#/`。又如 desc页面配置 `/desc`，访问地址为：`html/index.html#/desc`。

#### `路由跳转`

方法一：使用 Link 组件进行跳转

```js
import { Link } from "react-router-dom";
<Link to="/desc" className="desc-link">
  使用说明
</Link>;
```

方法二：使用 history 进行跳转

```js
export default function Home(props) {
  const { history } = props;
  // 跳转路由，并传参
  history.push({
    pathname: "/desc", 
    params: 'test' // 自定义参数，params 也可自定义。可在下个路由页面，通过 history.location.params 里获取。
  });
  history.goForward(); // 访问前一个页面
  history.goBack(); // 后退
}
```

### 样式引用

项目使用[Webpack](https://webpack.js.org/) 对所有模块进行处理。
Webpack 提供了一种自定义的方式来“扩展”，通过 JavaScript 的`import`，
在 JavaScript 中引用 CSS 文件:

#### `index.module.css`

```css
.content {
  padding: 20px;
}
```

#### `index.js`

```js
import React, { Component } from "react";
import * as css from './index.module.css'; // Tell Webpack that Button.js uses these styles

export default function Home(props) {
  render() {
    // You can use them as regular CSS styles
    return <div className={css.content} />;
  }
}
```

### 使用标准UI组件

```jsx
import React from "react";
import {
  Tab,
  TabBody,
  TabBar,
  TabBarItem,
  TabBarIcon,
  TabBarLabel,
  Article
} from "@wecode/react-weui";
```

### 国际化

输出 src/common/i18n/zh_CN 中 common.json 配置的国际化字段 appName 信息

使用：

```jsx
import i18n from "i18n";
i18n.t("common:appName");
```

### 创建新页面

第一步：例如创建 `Page_List` (以页面内容或名称命名文件名)文件夹，在该文件夹下创建 `index.js` (页面入口文件)、`index.css` (样式文件)、`TO_DELETE`(可更换的静态文件)，具体结构如下所示：

```text
└───template/
    ├───src/
        ├───Page_List               // 应用主页面
            ├───TO_DELETE            // 需要替换的一些静态文件
            └───index.js             // 页面的入口文件
            └───index.module.css     // 页面的样式文件
```

第二步： 在 `src/app.json` 中新增页面的路由导航映射，例如

```json
{
  "pages": {
    "./Page_List/index": "/list"
  }
}
```
具体映射方式请参阅[添加路由](#添加路由)，至此一个页面创建完成。

### 真机调试

当新建 `React` 项目时，在`src/index.html`中默认添加如下代码，是为了方便在真机上打开调试器调试代码，但上传打包项目时不需要删除此代码，因为 `webpack` 打包时会自动过滤此代码。

```html
<body>
   <%= htmlWebpackPlugin.options.vconsole === true ? '<script type="text/javascript" src="../../../../common/js/vconsole.js"></script>' : '' %>
</body>
```

注意，上传打包阶段默认屏蔽此代码，如需强制开启，可在 `app.json` 的 runtimes 字段开启 debug 为 true：

```json
{
  "runtime": {
    ...
    "debug": true,
    ...
  }
}
```
