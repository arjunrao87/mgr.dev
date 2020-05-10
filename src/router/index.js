import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/views/Books'
import Links from '@/views/Links'
import Podcasts from '@/views/Podcasts'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'Links',
            component: Links
        },
        {
            path: '/books',
            name: 'Books',
            component: Books
        },
        {
            path: '/links',
            name: 'Links',
            component: Links
        },
        {
            path: '/podcasts',
            name: 'Podcasts',
            component: Podcasts
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
          }
    ]
})