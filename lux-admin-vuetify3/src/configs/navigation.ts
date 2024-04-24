import menuApps from "./menus/apps.menu";
import menuPages from "./menus/pages.menu";
import menuLanding from "./menus/landing.menu";
import menuData from "./menus/data.menu";
import menuAi from "./menus/ai.menu";

export default {
  menu: [
    {
      text: "",
      key: "",
      items: [
        {
          key: "menu.dashboard",
          text: "Dashboard",
          link: "/dashboard",
          icon: "mdi-view-dashboard-outline",
        },
      ],
    },
    {
      text: "Apps",
      items: menuApps,
    },
    {
      text: "Data",
      items: menuData,
    },
    {
      text: "Landing",
      items: menuLanding
    },
    {
      text: "chatgpt",
      items: menuAi,
    },
    {
      text: "Pages",
      key: "menu.pages",
      items: menuPages,
    },
  ],
};
