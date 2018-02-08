import Vue from 'vue'
import Router from 'vue-router'
import donghua from '@/components/donghua'
import firstchild from '@/components/firstchild'
import second from '@/components/second'



Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      component: donghua
    },
    {
      path: '/firstchild',
      component: firstchild
    },
    {
      path: '/second',       
      component: second
    }
  ]
})
