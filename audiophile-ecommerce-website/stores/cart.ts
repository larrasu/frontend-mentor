import { useStorage } from "@vueuse/core";

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: useStorage("ls-items", [] as Item[]),
  }),
  actions: {
    addItem(item: Item) {
      const found = this.items.find((i) => i.id === item.id);
      if (found) {
        found.quantity += item.quantity;
      } else {
        this.items.push(item);
      }
    },
  },
});
