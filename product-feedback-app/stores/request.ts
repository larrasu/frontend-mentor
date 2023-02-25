import { Request } from "~/types";
import { useUserStore } from "./user";

export const useRequestStore = defineStore({
  id: "request",
  state: () => ({
    request: {} as Request,
    requests: [] as Request[],
    categories: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
    sortOptions: [
      "Most Upvotes",
      "Least Upvotes",
      "Most Comments",
      "Least Comments",
    ],
    currentCategory: "All",
    currentOption: "Most Upvotes",
  }),
  getters: {
    // getRequestById:
    //   (state) =>
    //   (id: number): Request | null => {
    //     return state.requests.find((request) => request.id === id) || null;
    //   },
    filteredRequests(): Request[] {
      if (this.currentCategory === "All") {
        return this.requests;
      } else {
        return this.requests.filter(
          (request) => request.category === this.currentCategory.toLowerCase()
        );
      }
    },
    sortedRequests(): Request[] {
      switch (this.currentOption) {
        case "Most Upvotes":
          return this.filteredRequests.sort((a, b) => b.upvotes - a.upvotes);
        case "Least Upvotes":
          return this.filteredRequests.sort((a, b) => a.upvotes - b.upvotes);
        case "Most Comments":
          return this.filteredRequests.sort(
            (a, b) => b.comments.length - a.comments.length
          );
        case "Least Comments":
          return this.filteredRequests.sort(
            (a, b) => a.comments.length - b.comments.length
          );
        default:
          return this.filteredRequests;
      }
    },
  },
  actions: {
    setCurrentCategory(category: string) {
      this.currentCategory = category;
    },
    setCurrentOption(option: string) {
      this.currentOption = option;
    },
    async fetchRequests() {
      const { productRequests } = await $fetch("/data.json");
      this.requests = productRequests as Request[];
    },
    setCurrentRequest(id: number) {
      this.request = this.requests.find(
        (request) => request.id === id
      ) as Request;
    },
    upvoteRequest(id: number) {
      this.setCurrentRequest(id);
      const userStore = useUserStore();
      const currentUser = userStore.currentUser;

      if (this.request.upvotesBy.includes(currentUser.username)) {
        this.request.upvotes -= 1;
        this.request.upvotesBy = this.request.upvotesBy.filter(
          (username) => username !== currentUser.username
        );
      } else {
        this.request.upvotes += 1;
        this.request.upvotesBy.push(currentUser.username);
      }
    },
    createRequest(request: Request) {
      const exists = this.requests.some(
        (item) =>
          Object.is(item.title, request.title) &&
          Object.is(item.description, request.description) &&
          Object.is(item.category, request.category)
      );
      if (!exists) {
        this.requests.push(request);
      }
    },
    deleteRequest(id: number) {
      const index = this.requests.findIndex((request) => request.id === id);
      if (index !== -1) {
        this.requests.splice(index, 1);
      }
    },
  },
  persist: true,
});
