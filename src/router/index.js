import Vue from 'vue'
import Router from 'vue-router'
import CourseList from '@/components/CourseList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CourseList',
      component: CourseList
    }
  ]
})
