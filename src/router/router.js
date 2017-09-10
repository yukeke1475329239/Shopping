import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import sortment from '../views/sortment.vue'
import shopcar from '../views/shopcar.vue'
import my from '../views/my.vue'
import search from '../views/search.vue'
import goodsdetail from '../views/goodsdetail.vue'
import address from '../views/address.vue'
import addaddress from '../views/addaddress.vue'

Vue.use(VueRouter);

const routers = [
    { 
        path: '/', redirect: '/home'
    },
    {
        name: 'home', path: '/home', component: home
    },
    {
        name: 'sortment', path: '/sortment', component: sortment
    },
    {
        name: 'shopcar', path: '/shopcar', component: shopcar
    },
    {
        name: 'my', path: '/my', component: my
    },
    {
        name: 'search', path: '/search', component: search
    },
    {
        name: 'goodsdetail', path: '/goodsdetail', component: goodsdetail
    },
    {
        name: 'address', path: '/address', component: address
    },
    {
        name: 'addaddress', path: '/addaddress/:index', component: addaddress
    }
]

let Router = new VueRouter({ routes:routers })


Router.beforeEach(function(to,from,next){
    console.log(to)
    console.log(from)
    
    next();
})

export default Router
