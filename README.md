<!--
 * @Date: 2020-07-14 14:34:09
 * @LastEditors: kjs
 * @LastEditTime: 2020-07-20 11:22:09
 * @FilePath: \vue-h5-template\README.md
--> 
# h5模板

>快速初始化vue项目
## 目录规范

1. api 
    + index.js 对接口的统一管理
    + urls.js 对接口路径的统一管理
2. assets 静态资源
3. components 组件 
    + baseUI 封装的基础UI组件，loading，toast之类
    + lib 对组件的注入，全局使用
    + 业务组件
4. filters 过滤器
5. pages 页面
    + about 关于页面
    + home 首页
6. router 
    + index.js 路由
7. store 
    + modules vuex模块划分，需要维护的store庞大时划分模块更好维护
    + index.js vuex
8. styles 
    + common.less 全局常见样式 contaniner类定义页面的样式，button类定义按钮的全局样式等等
    + reset.less 样式重置，去除像ul，li的默认间距之类的样式
    + root.less 样式变量
9. util 工具方法
    + http.js axios请求的封装
    + index.js 全局导出工具方法
    + performance.js 性能测试
    + reg.js 正则
    + rem.js 相对单位 100px为1rem，方便单位换算，实现样式的自适应
    + share.js 分享的工具方法
    + webp.js webp图片的方法

    ## vue文件规范
   

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
    ``` 
    <template>
        <div class="example contaniner">
            例子页面
            <test-component />
        </div>
    </template>
    ```
    - 脚本
    ```
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
            }
        },

        watch:{

        },

        computed:{

        }
    }
    </script>
    
    ```
    - 样式 scoped属性为vue文件添加样式的作用域，不用担心样式命名冲突
    ```
    <style lang="less" scoped>

    </style>
    ```

    > js使用规范
    - 变量命名不使用var，使用let或const
    - 函数声明尽量使用箭头函数，减少this指向的紊乱
    - 变量名使用驼峰式
    ```
        let name = 'test'
        const sayName  = () => {
            console.log(name)
        }
        sayName()
    ```

    > 样式规范
    - 用less或sass实现标签的嵌套写法，更加直观
    - 多处使用可写成全局样式，放在 styles中的common.less文件
    - 单位使用rem，百分比布局，vw,vh，实现样式大小的自适应
