import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodsView from "../views/FoodsView.vue";
import FoodDetailView from "../views/FoodDetailView.vue";
import KeranjangView from "../views/KeranjangView.vue";
import PesananSuksesView from "../views/PesananSuksesView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/foods",
    name: "foods",
    component: FoodsView,
  },
  {
    path: "/foods/:id",
    name: "foodDetail",
    component: FoodDetailView,
  },

  {
    path: "/keranjang",
    name: "Keranjang",
    component: KeranjangView,
  },
  {
    path: "/pesanan-sukses",
    name: "PesananSuksesView",
    component: PesananSuksesView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
