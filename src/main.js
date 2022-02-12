import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Employees from './pages/Employees.vue'
import Home from './pages/Home.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/employees', component: Employees },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.mount('#app')
