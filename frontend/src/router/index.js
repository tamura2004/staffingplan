import Vue from 'vue'
import Router from 'vue-router'
import UserProjects from '@/pages/UserProjects'
import Users from '@/pages/Users'
import SelectProject from '@/pages/SelectProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'UserProjects',
      path: '/user/:userId/projects',
      component: UserProjects,
      props (route) {
        return { userId: Number(route.params.userId) }
      }
    },
    {
      name: 'SelectProject',
      path: '/projects/select',
      component: SelectProject,
      props: true
    },
    {
      name: 'Users',
      path: '/',
      component: Users
    }
  ]
})
