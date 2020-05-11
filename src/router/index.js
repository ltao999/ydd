import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from './shouye'
import dingdan from './dingdan'
import paiban  from './paiban'
import mine from './mine'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
	redirect:shouye,
	
  },
	shouye,
	dingdan,
	paiban,
	mine
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
