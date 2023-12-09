import { createRouter, createWebHistory } from "vue-router";
import LandingPageEn from '../pages/LandingPageEn.vue'
import LandingPageAr from '../pages/LandingPageAr.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/en',
            name: 'LandingEn',
            component: LandingPageEn
        },
        {
            path: '/ar',
            name: 'LandingAr',
            component: LandingPageAr
        },
        {
            path: '/',
            redirect: '/ar'
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound
        },
        // Redirect all non-matching routes to /404
        { path: '/:pathMatch(.*)*', redirect: '/404' }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            console.log(savedPosition);
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        } else if (savedPosition) {
            return savedPosition;
        }
    }
});

export default router;