开始使用Vue

引入vue.js
官网：vuejs.org

开发版本：包含完整的警告和调试模式

生产版本：删除了警告，体积更小

引入vue.js后，给我们提供了一个构造函数 Vue
在js中，new Vue()
new Vue() 后会返回一个vue实例对象，我们用变量接着它
const vm = new Vue()
传递一个配置对象{} -- > const vm = new Vue({})