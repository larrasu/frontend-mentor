import { User } from "types";
import data from "~~/src/data.json";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: data.currentUser as User,
    users: data.users as User[],
  }),
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
    getUsers(state) {
      return state.users;
    },
  },
  actions: {
    setCurrentUser(user: User): void {
      this.currentUser = user;
    },
  },
  persist: true,
});
