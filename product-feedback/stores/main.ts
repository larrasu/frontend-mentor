import data from "~~/src/data.json";
import { Feedback } from "types";
import { useUserStore } from "./user";

export const useMainStore = defineStore("main", {
  state: () => ({
    feedbacks: data.productRequests as Feedback[],
    filteredFeedbacks: [] as Feedback[],
    categories: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
    sortBy: [
      "Most Upvotes",
      "Least Upvotes",
      "Most Comments",
      "Least Comments",
    ],
    statuses: ["Planned", "In-Progress", "Live"],
    currentCategory: "All",
    currentSortBy: "Most Upvotes",
  }),
  getters: {
    getCategories(): string[] {
      return this.categories;
    },
    getSortBy(): string[] {
      return this.sortBy;
    },
    getStatuses(): string[] {
      return this.statuses;
    },
    getCurrentCategory(): string {
      return this.currentCategory;
    },
    getCurrentSortBy(): string {
      return this.currentSortBy;
    },
    getFeedbacks(): Feedback[] {
      return this.feedbacks;
    },
    getFilteredFeedbacks(): Feedback[] {
      return this.filteredFeedbacks;
    },
  },
  actions: {
    filterFeedbacks(): void {
      if (this.currentCategory === "All") {
        this.filteredFeedbacks = this.feedbacks;
      } else {
        this.filteredFeedbacks = this.feedbacks.filter(
          (feedback) => feedback.category === this.currentCategory
        );
      }
    },
    sortFeedbacks(): void {
      if (this.currentSortBy === "Most Upvotes") {
        this.filteredFeedbacks.sort((a, b) => b.upvotes - a.upvotes);
      } else if (this.currentSortBy === "Least Upvotes") {
        this.filteredFeedbacks.sort((a, b) => a.upvotes - b.upvotes);
      } else if (this.currentSortBy === "Most Comments") {
        this.filteredFeedbacks.sort(
          (a, b) => b.comments.length - a.comments.length
        );
      } else if (this.currentSortBy === "Least Comments") {
        this.filteredFeedbacks.sort(
          (a, b) => a.comments.length - b.comments.length
        );
      }
    },
    setCurrentCategory(category: string): void {
      this.currentCategory = category;
      this.filterFeedbacks();
      this.sortFeedbacks();
    },
    setCurrentSortBy(sortBy: string): void {
      this.currentSortBy = sortBy;
      this.sortFeedbacks();
    },

    // Add feedback
    addFeedback(feedback: Feedback): void {
      this.feedbacks.push(feedback);
      this.filterFeedbacks();
      this.sortFeedbacks();
    },
    updateFeedback(id: number, feedback: Feedback): void {
      const index = this.feedbacks.findIndex((feedback) => feedback.id === id);
      this.feedbacks[index] = feedback;
      this.filterFeedbacks();
      this.sortFeedbacks();
    },
    deleteFeedback(id: number): void {
      this.feedbacks = this.feedbacks.filter((feedback) => feedback.id !== id);
      this.filterFeedbacks();
      this.sortFeedbacks();
    },
  },
  persist: true,
});
