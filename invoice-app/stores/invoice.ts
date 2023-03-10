import { Invoice } from "~/types";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoice: {} as Invoice,
    invoices: [] as Invoice[],
    filter: [] as String[],
    loading: false,
  }),
  getters: {
    filteredInvoices(state) {
      let filtered = state.invoices;
      if (state.filter.length > 0) {
        filtered = filtered.filter((invoice) =>
          state.filter.includes(invoice.status)
        );
      }
      return filtered;
    },
  },
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
