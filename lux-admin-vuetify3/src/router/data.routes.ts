// users Data Page
export default [
  // file upload preview
  {
    path: "/data/file-upload-preview",
    component: () => import("@/views/datatable/FileUploadPreviewPage.vue"),
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "Data",
      title: "FileUploadPreview",
    },
  },
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
