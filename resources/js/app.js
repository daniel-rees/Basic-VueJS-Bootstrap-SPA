// import 'es6-promise/auto';
// import 'babel-polyfill';

import router from './router/router';

require('./bootstrap');

var Vue = require('vue');
Vue.use(require('vue-moment'));

const app = new Vue({
    el: '#app',
    router: router,
});
