// users Data Page
export default [
  // edit table
  {
    path: "/data/edit-table",
    component: () => import("@/views/datatable/EditTablePage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "EditTable",
    },
  },
];
