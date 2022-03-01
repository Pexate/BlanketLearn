import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LearningPage from '../views/LearningPage.vue'
import Learn from '../views/Learn.vue'
import sedmi11 from '../zdk/sedmi/1cjelina/1/Index.vue'
import sedmi12 from '../zdk/sedmi/1cjelina/2/Index.vue'
import sedmi13 from '../zdk/sedmi/1cjelina/3/Index.vue'
import sedmi21 from '../zdk/sedmi/2cjelina/1/Index.vue'
import sedmi22 from '../zdk/sedmi/2cjelina/2/Index.vue'
import sedmi23 from '../zdk/sedmi/2cjelina/3/Index.vue'
import sedmi31 from '../zdk/sedmi/3cjelina/1/Index.vue'
import sedmi32 from '../zdk/sedmi/3cjelina/2/Index.vue'
import sedmi33 from '../zdk/sedmi/3cjelina/3/Index.vue'
import sedmi34 from '../zdk/sedmi/3cjelina/4/Index.vue'
import sedmi35 from '../zdk/sedmi/3cjelina/5/Index.vue'
import sedmi36 from '../zdk/sedmi/3cjelina/6/Index.vue'
import question11 from '../questions/11/Index.vue'
import question12 from '../questions/12/Index.vue'
import question13 from '../questions/13/Index.vue'
import question21 from '../questions/21/Index.vue'
import question22 from '../questions/22/Index.vue'
import question23 from '../questions/23/Index.vue'
import question31 from '../questions/31/Index.vue'
import question32 from '../questions/32/Index.vue'
import question33 from '../questions/33/Index.vue'
import question34 from '../questions/34/Index.vue'
import question35 from '../questions/35/Index.vue'
import question36 from '../questions/36/Index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BlanketLearn',
    component: Home
  },
  {
    path: '/learn',
    name: 'BlanketLearn - Informatika',
    component: Learn
  },
  {
    path: '/learningpage',
    name: 'BlanketLearn',
    component: LearningPage
  },
  {
    path: '/sedmi/1cjelina/1/',
    name: 'BlanketLearn',
    component: sedmi11
  },
  {
    path: '/sedmi/1cjelina/2/',
    name: 'BlanketLearn',
    component: sedmi12
  },
  {
    path: '/sedmi/1cjelina/3/',
    name: 'BlanketLearn',
    component: sedmi13
  },
  {
    path: '/sedmi/2cjelina/1/',
    name: 'BlanketLearn',
    component: sedmi21
  },
  {
    path: '/sedmi/2cjelina/2/',
    name: 'BlanketLearn',
    component: sedmi22
  },
  {
    path: '/sedmi/2cjelina/3/',
    name: 'BlanketLearn',
    component: sedmi23
  },
  {
    path: '/sedmi/3cjelina/1/',
    name: 'BlanketLearn',
    component: sedmi31
  },
  {
    path: '/sedmi/3cjelina/2/',
    name: 'BlanketLearn',
    component: sedmi32
  },
  {
    path: '/sedmi/3cjelina/3/',
    name: 'BlanketLearn',
    component: sedmi33
  },
  {
    path: '/sedmi/3cjelina/4/',
    name: 'BlanketLearn',
    component: sedmi34
  },
  {
    path: '/sedmi/3cjelina/5/',
    name: 'BlanketLearn',
    component: sedmi35
  },
  {
    path: '/sedmi/3cjelina/6/',
    name: 'BlanketLearn',
    component: sedmi36
  },
  {
    path: '/sedmi/1cjelina/question1',
    name: 'BlanketLearn',
    component: question11
  },
  {
    path: '/sedmi/1cjelina/question2',
    name: 'BlanketLearn',
    component: question12
  },
  {
    path: '/sedmi/1cjelina/question3',
    name: 'BlanketLearn',
    component: question13
  },
  {
    path: '/sedmi/2cjelina/question1',
    name: 'BlanketLearn',
    component: question21
  },
  {
    path: '/sedmi/2cjelina/question2',
    name: 'BlanketLearn',
    component: question22
  },
  {
    path: '/sedmi/2cjelina/question3',
    name: 'BlanketLearn',
    component: question23
  },
  {
    path: '/sedmi/3cjelina/question1',
    name: 'BlanketLearn',
    component: question31
  },
  {
    path: '/sedmi/3cjelina/question2',
    name: 'BlanketLearn',
    component: question32
  },
  {
    path: '/sedmi/3cjelina/question3',
    name: 'BlanketLearn',
    component: question33
  },
  {
    path: '/sedmi/3cjelina/question4',
    name: 'BlanketLearn',
    component: question34
  },
  {
    path: '/sedmi/3cjelina/question5',
    name: 'BlanketLearn',
    component: question35
  },
  {
    path: '/sedmi/3cjelina/question6',
    name: 'BlanketLearn',
    component: question36
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})

export default router
