import Vue from 'vue'
import App from './App.vue'
import './plugins/vant.js'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router=new VueRouter({
	routes:Routes,
});

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
