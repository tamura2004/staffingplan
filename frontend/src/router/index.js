import Vue from 'vue'
import Router from 'vue-router'
import UserProjects from '@/pages/UserProjects'
import Users from '@/pages/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'UserProjects',
      path: '/user/:user_id/projects',
      component: UserProjects,
      props: true
    },
    {
      name: 'Users',
      path: '/',
      component: Users
    }
  ]
})
