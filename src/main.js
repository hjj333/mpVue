import Vue from 'vue'
import Fly from 'flyio/dist/npm/wx'
import store from './store/store'
import App from './App'

Vue.config.productionTip = false
// 声明当前组件的类型
App.mpType = 'app'
// 将store对象放在Vue原型上
Vue.prototype.$store = store
// 使用flyio插件
let fly = new Fly
Vue.prototype.$fly = fly

// 生成应用实例
const app = new Vue(App)
// 挂载应用
app.$mount()
