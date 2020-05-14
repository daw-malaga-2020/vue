import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/pages/HomePage";
import OrderPage from "@/pages/OrderPage";
import NotFound from "@/pages/NotFound";
import BlogPage from "@/pages/BlogPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ContactPage from "@/pages/ContactPage";
import MyOrders from "@/pages/MyOrders";
import Admin from "@/pages/Admin";
import AdminMenu from "@/pages/AdminMenu";
import AdminOrders from "@/pages/AdminOrders";

import { store } from "@/store";

const routes = [
  { path: "/", name: "home", component: HomePage, meta: { isPrivate: false } },
  {
    path: "/pedidos",
    name: "order",
    component: OrderPage,
    meta: { isPrivate: false },
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
    meta: { isPrivate: false },
  },
  {
    path: "/contacto",
    name: "contact",
    component: ContactPage,
    meta: { isPrivate: false },
  },
  {
    path: "/myorders",
    name: "myorders",
    component: MyOrders,
    meta: { isPrivate: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: { isPrivate: false },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
    meta: { isPrivate: false },
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: { isPrivate: true },
    children: [
      { path: "", component: AdminOrders },
      { path: "menu", component: AdminMenu },
    ],
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
    meta: { isPrivate: false },
  },
];

export const router = new VueRouter({ routes, mode: "history" });

router.beforeEach((to, from, next) => {
  
  if (to.meta.isPrivate && !store.state.isAuth) {
    next("login");
  } else {
    next();
  }
});

Vue.use(VueRouter);