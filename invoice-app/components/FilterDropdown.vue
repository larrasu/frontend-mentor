<template>
  <Menu as="div" class="relative" v-slot="{ open }">
    <MenuButton class="flex items-center gap-3">
      <p>Filter</p>
      <NuxtSvgIcon
        name="arrow-down"
        :use-origin-size="true"
        class="stroke-primary-500 fill-none transition"
        :class="{ 'transform -rotate-180': open }"
      />
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        as="div"
        class="shadow-base absolute p-6 mt-2 bg-white rounded-lg"
      >
        <ul class="grid gap-4">
          <li class="flex items-center gap-3">
            <input
              type="checkbox"
              id="draft"
              v-model="filter.draft"
              @change="toggleFilter('draft')"
              class="hover:border-primary-400 bg-[#DFE3FA] focus:ring-0 transition border-transparent rounded-sm cursor-pointer"
            />
            <label for="draft" class="cursor-pointer">Draft</label>
          </li>
          <li class="flex items-center gap-3">
            <input
              type="checkbox"
              id="pending"
              v-model="filter.pending"
              @change="toggleFilter('pending')"
              class="hover:border-primary-400 bg-[#DFE3FA] focus:ring-0 transition border-transparent rounded-sm cursor-pointer"
            />
            <label for="pending" class="cursor-pointer">Pending</label>
          </li>
          <li class="flex items-center gap-3">
            <input
              type="checkbox"
              id="paid"
              v-model="filter.paid"
              @change="toggleFilter('paid')"
              class="hover:border-primary-400 bg-[#DFE3FA] focus:ring-0 transition border-transparent rounded-sm cursor-pointer"
            />
            <label for="paid" class="cursor-pointer">Paid</label>
          </li>
        </ul>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
const invoiceStore = useInvoiceStore();

const filter = invoiceStore.filter.reduce(
  (acc, cur) => ({ ...acc, [cur]: true }),
  { draft: false, pending: false, paid: false }
);

const toggleFilter = (filter) => {
  if (invoiceStore.filter.includes(filter)) {
    invoiceStore.filter = invoiceStore.filter.filter((f) => f !== filter);
  } else {
    invoiceStore.filter = [...invoiceStore.filter, filter];
  }
};
</script>
