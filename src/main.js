import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Employees from './pages/Employees.vue'
import App from './App.vue'

const routes = [
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
