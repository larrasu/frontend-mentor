<template>
  <div class="dark:bg-secondary-500 px-8 py-4 bg-white rounded-lg">
    <div class="grid items-center grid-cols-6">
      <div class="heading-sm-v">
        <span class="text-accent-300">#</span>{{ invoice.id }}
      </div>
      <div class="text-accent-300 body-v">Due {{ paymentDue }}</div>
      <div class="text-accent-300 body-v">{{ invoice.clientName }}</div>
      <div class="heading-sm">{{ useCurrency.format(invoice.total) }}</div>
      <div
        class="heading-sm-v flex items-center justify-center gap-2 px-5 py-4 rounded-md"
        :class="[
          { 'text-success bg-success/[6%]': invoice.status == 'paid' },
          { 'text-warning bg-warning/[6%]': invoice.status == 'pending' },
          { 'text-draft bg-draft/[6%]': invoice.status == 'draft' },
        ]"
      >
        <div
          class="w-2 h-2 rounded-full"
          :class="[
            { 'bg-success': invoice.status == 'paid' },
            { 'bg-warning': invoice.status == 'pending' },
            { 'bg-draft': invoice.status == 'draft' },
          ]"
        ></div>
        {{ useChangeCase(invoice.status, "capitalCase").value }}
      </div>
      <div class="md:flex items-center justify-end hidden">
        <NuxtSvgIcon
          name="arrow-right"
          use-origin-size
          class="stroke-primary-500 fill-none"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Invoice } from "~/types";
import { useChangeCase } from "@vueuse/integrations/useChangeCase";
const props = defineProps<{
  invoice: Invoice;
}>();
const paymentDue = useDateFormat(props.invoice.paymentDue, "D MMM YYYY");
</script>
