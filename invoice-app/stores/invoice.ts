import { Invoice } from "~/types";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoice: {} as Invoice,
    invoices: [] as Invoice[],
    loading: false,
  }),
  actions: {
    async getAll() {
      try {
        const data = await $fetch<Invoice[]>("/api/invoices");
        this.invoices = data;
      } catch (error: any) {
        alert("Error fetching invoices:\n" + error);
      }
    },
  },
  persist: true,
});
