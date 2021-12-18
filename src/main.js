import Vue from 'vue'
import App from './components/Home/App.vue'
import App2 from './components/Informatika/App.vue'
import App3 from './components/Fizika/App.vue'
import Router from 'vue-router';
Vue.config.productionTip = false

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: App,
    },
    {
      path: '/informatika',
      name: 'Informatika',
      component: App2,
    },
    {
      path: '/fizika',
      name: 'Fizika',
      component: App3,
    },
  ],
});


new Vue({ 
  render: h => h(App),
}).$mount('#app')
new Vue({
  render: h => h(App2),
}).$mount('#app2')
new Vue({
  render: h => h(App3),
}).$mount('#app3')
