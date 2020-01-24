import home from '../components/pages/Home';
import notFound from '../components/pages/NotFound';


class Routes {
    static get() {
        return [
            {
                path: '/',
                name: 'home',
                component: home,
                meta: {
                  title: 'Basic',
                  requiresAuth: false
                }
            },
            {
                path: '/not-found',
                name: 'not-found',
                component: notFound,
                meta: {
                  title: 'Basic - Page not found',
                  requiresAuth: false
                }
            }
        ];
    }
}

export default Routes;
