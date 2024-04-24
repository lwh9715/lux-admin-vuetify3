// users Data Page
export default [
  {
    path: "/ai/chatbot",
    component: () => import("@/views/chatgpt/ChatBot.vue"),
    meta: {
      requiresAuth: true,
      layout: "landing",
      category: "AI",
      title: "ChatBot",
    },
  },
];
