import { defineStore } from "pinia";

export const useProfileStore = defineStore({
  id: "userProfile",
  state: () => ({
    basic: {
      username: "amos",
      realname: "amosliang",
      email: "amosliang77@gmail.com",
      avatar: "https://relax-dev.oss-cn-shanghai.aliyuncs.com/amos/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240505120619.png",
      location: "Tokyo,Japan",
      role: "Admin",
      disabled: false,
      about: "Full Stack Developer",
      lastSignIn: "2023-03-29T01:11:13Z",
    },
    authorized: {
      google: false,
      facebook: false,
    },
    notifications: {
      officialEmails: true,
      followerUpdates: true,
    },
  }),
  actions: {
    getProfile() {
      return {
        basic: this.basic,
        authorized: this.authorized,
        notifications: this.notifications,
      };
    },

    // update Basic Info
    updateBasicInfo(info) {
      this.basic = { ...this.basic, ...info };
    },
    // update Authorized
    updateAuthorizedStatus(service, status) {
      this.authorized[service] = status;
    },
    // Update Notifications
    updateNotificationSettings(settings) {
      this.notifications = { ...this.notifications, ...settings };
    },
  },
});
