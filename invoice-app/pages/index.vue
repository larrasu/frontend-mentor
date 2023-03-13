<template>
  <div class="md:max-w-[672px] md:mx-auto lg:max-w-[730px] px-6 mt-8">
    <section
      class="flex items-center gap-5 text-[15px] leading-[15px] tracking-[-0.25px]"
    >
      <div class="mr-auto">
        <h1
          class="text-2xl font-bold tracking-[-0.75px] text-accent-400 dark:text-white"
        >
          Invoices
        </h1>
        <p
          class="text-accent-300 dark:text-white text-[13px] tracking-[-0.1px]"
        >
          7 invoices
        </p>
      </div>
      <FilterDropdown />
      <button
        class="bg-primary-500 hover:bg-primary-400 flex items-center gap-2 pl-[6px] pr-4 py-2 text-white rounded-full font-bold transition"
      >
        <div
          class="flex items-center justify-center w-8 h-8 bg-white rounded-full"
        >
          <NuxtSvgIcon
            name="plus"
            :use-origin-size="true"
            class="fill-primary-500"
          />
        </div>
        <p>New</p>
      </button>
    </section>

    <section class="grid gap-4 mt-8">
      <InvoiceCard
        v-for="invoice of filteredInvoices"
        :key="invoice.id"
        :invoice="invoice"
      />
    </section>
  </div>
</template>

<script setup>
const invoiceStore = useInvoiceStore();
const { filteredInvoices } = storeToRefs(invoiceStore);

useAsyncData(async () => {
  await invoiceStore.getAll();
});
</script>
