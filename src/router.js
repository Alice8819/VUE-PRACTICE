import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './pages/Home'

Vue.use(VueRouter);

const routes = [
    {path:'/',redirect:'/home'},
    {path:'/home' ,component:Home},
    {
        path:'/learn',
        components:{
            default: ()=> import ('./pages/Learn'),
            student: ()=> import ('./pages/Student'),
        }
    },
    {path:'/student',component:()=> import ('./pages/Student')},
    {path:'/about',component:()=> import ('./pages/About')},
    {
        path:'/activity',
        redirect:to => {
            return {
                name:'academic'
            }
        },
        component:()=> import (/* webpackChunkName:'academic'*/'./pages/Activity'),
        children:[
            {path:'academic',name:'academic',component:()=>import(/* webpackChunkName:'academic'*/'./pages/Academic')},
            {path:'personal',name:'personal',component:()=>import('./pages/Personal')},
            {path:'/activity/download',name:'download',component:()=>import('./pages/Download')}
        ]
    },
    {path:'/question/:id',
    props:true,
    name:'question',component:()=> import ('./pages/Question')}
]

// 解决路由报错:Error: Avoided redundant navigation to current location: "/XXX".
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 一样代码解决路由报错

export default new VueRouter ({
    routes,
    mode:'history', // 默认hash
    linkActiveClass: 'a-active',
    linkExactActiveClass: 'a-exact-active',
})


