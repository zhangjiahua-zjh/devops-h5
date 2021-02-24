import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/pages/login/Login';
import Home from '@/pages/home';

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: HelloWorld},
    {path: '/login', component: Login, hidden: true },
    {path: '/home', component: Home, hidden: true },
  ]
})
