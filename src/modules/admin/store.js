import { defineStore } from "pinia";
import * as storage from "src/modules/auth/storage";
import { api } from "boot/axios";
import { isBlocked } from "src/modules/auth/storage";
export const adminStore = defineStore("admin", {
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers: (state) => state.users,
  },

  actions: {
    async GET_ALL_USER(token) {
      await api.get("/api/user/list", { token: token }).then((response) => {
        // storage.setUser(response.data);
        this.users = response.data.users;
      });
    },
    async ADD_USER(payload, token) {
      await api
        .post("/api/user/create/", payload, { token: token })
        .then(async (response) => {
          this.users.push(response.data);
        });
    },
  },
});
