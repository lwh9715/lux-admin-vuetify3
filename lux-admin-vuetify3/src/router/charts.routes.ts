export default [
  {
    path: "/chart/echart-bar",
    name: "chart-echart-bar",
    component: () =>
      import(
        /* webpackChunkName: "chart-echart-bar" */ "@/views/chart/EchartBar.vue"
      ),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Chart",
      title: "Echart Bar",
    },
  },
];
