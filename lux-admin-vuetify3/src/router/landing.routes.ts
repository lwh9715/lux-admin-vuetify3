export default [
  {
    path: "/landing",
    name: "landing-home",
    component: () =>
      import(
        /* webpackChunkName: "landing-home" */ "@/views/landing/HomePage.vue"
      ),
    meta: {
      requiresAuth: true,
      layout: "landing",
    },
  },
  {
    path: "/landing/card",
    name: "landing-card",
    component: () =>
      import(
        /* webpackChunkName: "landing-card" */ "@/views/landing/card/CardPage.vue"
      ),
    meta: {
      requiresAuth: true,
      layout: "landing",
    },
  }
];
