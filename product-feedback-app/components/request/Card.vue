<template>
  <div class="bg-base-100 rounded-base px-[32px] py-7">
    <component
      :is="isLink ? NuxtLink : 'div'"
      :to="isLink ? `/requests/${request.id}` : false"
    >
      <div class="text-lg font-bold tracking-[-0.25px]">
        {{ request.title }}
      </div>
      <p class="text-dark-100">{{ request.description }}</p>
      <div class="mt-3">
        <span class="badge-plain">{{ category }}</span>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
import { Request } from "~/types";
const props = defineProps<{
  request: Request;
  isLink: boolean;
}>();

const NuxtLink = resolveComponent("NuxtLink");

const { request } = toRefs(props);

const category =
  request.value.category.charAt(0).toUpperCase() +
  request.value.category.slice(1);
</script>
