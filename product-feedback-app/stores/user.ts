import { User } from "~/types/index";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    currentUser: {} as User,
    users: [] as User[],
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      const { users } = await $fetch("/data.json");
      this.users = users as User[];
    },
    async fetchCurrentUser() {
      const { currentUser } = await $fetch("/data.json");
      this.currentUser = currentUser as User;
    },
    switchUser(user: User) {
      this.currentUser = user;
    },
  },
  persist: true,
});
