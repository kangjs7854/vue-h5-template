<!--
 * @Date: 2020-07-14 14:34:09
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-11 15:57:40
 * @FilePath: \vue-h5-template\README.md
--> 
# h5模板

>快速初始化vue项目


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






# vue文件规范
>文件结构

- 注释 vscode安装 koroFileHeader 插件扩展生成页面相关注释，方便查看开发信息
```
<!--
* @Date: 2020-07-20 10:21:49
* @LastEditors: kjs
* @LastEditTime: 2020-07-20 10:55:23
* @FilePath: \vue-h5-template\src\pages\example.vue
--> 
```
- 模板
``` html
<template>
    <div class="example contaniner">
        例子页面
        <test-component />
    </div>
</template>
```
- 脚本

```js
<script>
import TestComponent from '@/components/TestComponent.vue'
export default {
    name:'example',

    props:{ //从父组件接收到的值，尽量写详细
        someData:{
            type:String,
            default:'balala'
        }

    },
    
    components:{//组件的注册,用划线分割区分与原生html标签，更加直观
        "test-component" : TestComponent
    },

    data(){
        return {

        }
    },

    created(){

    },

    async beforeMount(){
        // 开始加载
        this.loading = true
        try {
            const data = await getUserInfo()
        } catch (error) {
            console.log(error)
        } finally {
            // 停止加载
            this.loading = false
        }

    }

    mounted(){
        //使用hook监听生命周期，这样监听和销毁的代码就不会分散在各个生命周期中，代码可读性更高，更好维护
        window.addEventListener('resize',this.handleResize)
        this.$on('hook:destroyed',() => {
            window.removeventListener('resize',this.handleResize)
        })
    },

    methods:{
        handleResize(){
            //do somethings
        },

        getUserInfo(){

        }
    },

    watch:{

    },

    computed:{

    }
}
</script>

```

# 注意事项

1. v-for v-if不能一起使用，v-for优先级高于v-if
可以使用过滤器先过滤，再循环渲染
```
// 计算属性
computed: {
  filterList () {
    return this.showData.filter((data)=> {
        // 返回需要显示的数据
        return data.isShow
    })    
}
  
// DOM
  
<ul>
  <li v-for="item in filterList" :key="item.id">
  {{ item.name }}
  </li>
</ul>

```

2. 不能直接修改props
子组件接收到父组件传过来的props，不能直接修改，防止数据流变得不可控，需要通过注册事件让父组件触发，改变props的值。但是这样的方法比较繁琐，可以使用
v-model和sync的修饰符

- v-model: 
首先要通过props注册value属性，注意v-model本身就是value，onchange的一个语法糖。
```
props:{
    value:{
        type:[String,Number]
    }
}

this.$emit('input',//需要改变的值)


//父组件就可以通过v-model绑定传给子组件的props
```

- sync 修饰符
```
//子组件
this.$emit('update:')
```

3. 样式

- 样式隔离，scoped属性为vue文件添加样式的作用域，不用担心样式命名冲突
```css
<style lang="less" scoped>

</style>
```
- 用less或sass实现标签的嵌套写法，更加直观
- 多处使用可写成全局样式，放在 styles中的common.less文件
- 单位使用rem，百分比布局，vw,vh，实现样式大小的自适应
- /deep/ 前缀修改第三方组件库的默认样式

4. 变量命名

变量命名不使用var，使用let或const
- 函数声明尽量使用箭头函数，减少this指向的紊乱
- 变量名使用驼峰式
```js
    let name = 'test'
    const sayName  = () => {
        console.log(name)
    }
    sayName()
```