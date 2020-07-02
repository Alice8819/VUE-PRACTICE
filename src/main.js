import Vue from 'vue'
import App from './App.vue'
import 'animate.css'
import 'velocity-animate'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),   // 参数h函数,返回h函数执行参数：组件或标签名如'a'   h = createElement
}).$mount('#app')

//模板：
// render (createElement) {
//   const vnode = createElement('h' + this.level , this.$slots.default)   // 创建虚拟DOM  虚拟DOM描述
// }