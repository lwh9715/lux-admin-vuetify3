export default [
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
