import Vue from "vue";
import VueRouter from "vue-router";
import Field from "../components/game/Field.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Field",
    component: Field,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
