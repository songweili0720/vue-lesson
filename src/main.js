import Vue from 'vue'
import App from './App.vue'
import Announcement from "./announcement/Announcement.vue";
import Article from  "./article/Article.vue";
import  User from "./simweb/User.vue";

import DataSource from "./simweb/DataSource.vue";
import Content from "./simweb/Content.vue";
import Search from "./simweb/Search.vue";
import VueResource from "vue-resource"
import VueRouter from "vue-router";
import Axios from "axios"
import Register from "./simweb/Regester";
import UserEdit from "./simweb/UserEdit";
import Layout from "./simweb/Layout";
//全局组件
Vue.component("app-announcement",Announcement);
Vue.component("app-article",Article);
Vue.component("app-user",User);
//注册使用路由
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.prototype.$axios = Axios;

// require('./css/index.css');

var router = new VueRouter({
 mode:'history',
  routes:[
    // {path:"/",component:Content},
    {path:"/",name:'menu',component:Content},
    {path:"/dataSource",component:DataSource},
    {path:"/search",component:Search},
    {path:"/register",component:Register},
    {path:"/user",component:User},
    {path:"/userEdit",name:'edit',component:UserEdit},
    {path:"/layout",component:Layout},
    //当匹配不上路径或者路径错误时，就使用redirect跳转路径，可以写自己想要跳转的路径
    {path:"*",redirect:"/"}
  ]
});
new Vue({
  router,
  el: '#app',
  render: h => h(App)

})
