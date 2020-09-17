
# h5模板

>基于vue的移动端项目模板


# 目录规范


```
|-- vue-h5-template
    |-- babel.config.js            babel插件、去除console的配置等
    |-- package.json               依赖包
    |-- postcss.config.js          vw、vh单位的换算配置
    |-- README.md
    |-- vue.config.js              vue-cli3的配置文件，wepack配置
    |-- .vscode
    |   |-- launch.json
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.js
        |-- api
        |   |-- index.js            对接口的统一管理
        |   |-- urls.js             对接口路径的统一管理
        |-- assets                  静态资源
        |   |-- logo.png
        |-- components
        |   |-- share.vue           业务组件
        |   |-- baseUI              封装的基础UI组件，loading，toast之类
        |   |   |-- loading.vue
        |   |-- lib                 对组件的注入，全局使用
        |       |-- index.js
        |       |-- loading.js
        |       |-- toast.js
        |-- directive
        |   |-- lazy.js
        |-- filters
        |   |-- index.js
        |-- pages                   页面
        |   |-- about.vue           关于页面
        |   |-- home.vue            首页
        |-- router                  
        |   |-- index.js            路由
        |-- store
        |   |-- index.js            vuex模块划分，需要维护的store庞大时划分模块更好维护
        |   |-- modules
        |       |-- product.js
        |-- styles
        |   |-- common.less         全局常见样式 contaniner类定义页面的样式，button类定义按钮的全局样式等等
        |   |-- reset.less          样式重置，去除像ul，li的默认间距之类的样式
        |   |-- root.less           样式变量
        |-- util
            |-- http.js             axios请求的封装
            |-- index.js            全局导出工具方法
            |-- performance.        性能测试
            |-- reg.js
            |-- rem.js              相对单位 100px为1rem，方便单位换算，实现样式的自适应
            |-- share.js            分享的工具方法
            |-- webp.js             webp图片的方法


```
