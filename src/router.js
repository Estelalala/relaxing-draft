import { createRouter, createWebHashHistory } from 'vue-router'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/Page4.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Page1
        },
        {
            path: '/page2',
            component: Page2
        },
        {
            path: '/page3',
            component: Page3
        },
        {
            path: '/page4',
            component: Page4
        },
    ],
})

export default router;