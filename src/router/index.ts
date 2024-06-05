import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      name: 'home',
      redirect: '/home',
      meta: {title: '首页', icon: 'HomeFilled'},
      children: [
        {
          name: 'home',
          path: 'home',
          component: () => import('@/views/Home.vue'),
          meta: {title: '首页', icon: 'HomeFilled', hidden: true},
        },
        {
          name: 'user',
          path: 'user',
          component: () => import('@/views/User.vue'),
          meta: {title: '用户管理', icon: 'UserFilled'},
        },
        {
          name: 'other',
          path: 'other',
          redirect: '/other/page1',
          meta: {title: '其它', icon: "Tools"},
          children: [
            {
              name: 'page1',
              path: 'page1',
              component: () => import('@/views/Page1.vue'),
              meta: {title: '页面1', icon: "Document"}
            },
            {
              name: 'page2',
              path: 'page2',
              component: () => import('@/views/Page2.vue'),
              meta: {title: '页面2', icon: "Document"}
            },
          ]
        }
      ]
    }
  ]
})