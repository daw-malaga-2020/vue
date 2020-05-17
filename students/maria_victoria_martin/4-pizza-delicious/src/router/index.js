import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/pages/Home' 
import Pedidos from '@/pages/Pedidos'
import Blog from '@/pages/Blog'
import Contacto from '@/pages/Contacto'
import NotFound from '@/pages/NotFound'
import MyOrders from '@/pages/MyOrders'
import Login from '@/pages/Login'
import RegisterPage from '@/pages/RegisterPage'

import { store } from "@/store";


const routes= [
  {path: "/", name: "home", component: Home, meta: { isPrivate: false } },
  {path: "/pedidos", name: "pedidos", component: Pedidos, meta: { isPrivate: false } },
  {path: "/blog", name: "blog", component: Blog, meta: { isPrivate: false } },
  {path: "/contacto", name: "contacto", component: Contacto, meta: { isPrivate: false } },
  {path: "/myorders", name: "myorders", component: MyOrders, meta: { isPrivate: true } },
  {path: "/login", name: "login", component: Login, meta: { isPrivate: false } },
  {path: "/register", name: "register", component: RegisterPage, meta: { isPrivate: false } },
  {path: "*", name: "notFound", component: NotFound, meta: { isPrivate: false } },
  ]

 export const router = new VueRouter({routes, mode:"history"})

router.beforeEach((to, from, next)=>{
  console.log(to)
  if(to.meta.isPrivate && !store.state.isAuth){
    next("login")
  }else{
    next()
  }
})

Vue.use(VueRouter);
