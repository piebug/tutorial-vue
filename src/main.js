import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Employees from './pages/Employees.vue'
import Home from './pages/Home.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/employees', component: Employees },
]

const router = createRouter({
  // createWebHistory is an alternate option
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.mount('#app')
