import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);


const router = new VueRouter({
    routes: routes.get(),

    // Scroll to top after loading new page
    scrollBehavior() {
        return { x: 0, y: 0 }
    }

});


// Handle 404s and session before loading any page
router.beforeEach((to, from, next) =>
{
    document.title = to.meta.title;

    if (!to.matched.length) {
        next('/not-found');
    } else {
        next();
    }
    
});


// Called after route loaded
router.afterEach((to) =>
{
    // Log to analytics here, eg, to.meta.title
});

export default router;
