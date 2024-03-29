import unsplashRoutes from "@/views/app/unsplash/UnsplashRoutes";
import todoRoutes from "@/views/app/todo/todoRoutes";

export default [
{
    path: "/apps/board",
    name: "app-board",
    component: () =>
      import(
        /* webpackChunkName: "utility-board" */ "@/views/app/utility/BoardPage.vue"
      ),
    meta: {
      requiresAuth: true,
      title: "Board",
      layout: "ui",
      category: "APP",
    },
  },
  {
    path: "/apps/todo",
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "APP",
      title: "Todo",
    },
    component: () =>
      import(/* webpackChunkName: "app-todo" */ "@/views/app/todo/TodoApp.vue"),
    children: [...todoRoutes],
  },
  {
    path: "/apps/nitori",
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "APP",
      title: "Nitori",
    },
    component: () =>
      import(
        /* webpackChunkName: "app-nitori" */ "@/views/app/nitori/NitoriApp.vue"
      ),
    children: [],
  },
  {
    path: "/apps/booking",
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "APP",
      title: "Booking",
    },
    component: () =>
      import(
        /* webpackChunkName: "app-booking" */ "@/views/app/booking/BookingApp.vue"
      ),
    children: [],
  },
  {
    path: "/apps/ikea",
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "APP",
      title: "Ikea",
    },
    component: () =>
      import(/* webpackChunkName: "app-ikea" */ "@/views/app/ikea/IkeaApp.vue"),
    children: [],
  },
  {
    path: "/apps/unsplash",
    meta: {
      requiresAuth: true,
      layout: "ui",
      category: "APP",
      title: "Photos",
    },
    component: () =>
      import(
        /* webpackChunkName: "app-unsplash" */ "@/views/app/unsplash/UnsplashApp.vue"
      ),
    children: [...unsplashRoutes],
  },
];
