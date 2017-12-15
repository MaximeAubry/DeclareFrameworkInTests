import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
