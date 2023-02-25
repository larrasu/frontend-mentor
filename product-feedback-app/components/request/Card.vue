<template>
  <div class="bg-base-100 rounded-base px-[32px] py-7">
    <div class="flex items-center gap-10">
      <div class="self-start">
        <button
          @click="upvote"
          class="btn-plain btn-sm group flex flex-col items-center gap-1"
          :class="{ active: upvoted }"
        >
          <NuxtSvgIcon
            name="arrow-up"
            :use-origin-size="true"
            class="stroke-secondary fill-none"
            :class="{ 'stroke-white fill-none': upvoted }"
          />
          <span>{{ request.upvotes }}</span>
        </button>
      </div>
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
      <div class="ml-auto">
        <div class="flex items-center gap-2">
          <Icon
            name="heroicons:chat-bubble-oval-left-20-solid"
            class="text-base-400"
          />
          <p class="font-bold">{{ request.comments.length }}</p>
        </div>
      </div>
    </div>
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

const requestStore = useRequestStore();
const userStore = useUserStore();
const { currentUser } = storeToRefs(userStore);
const upvote = () => {
  requestStore.upvoteRequest(request.value.id);
};
const upvoted = computed(() =>
  request.value.upvotesBy.includes(currentUser.value.username)
);

const category = computed(
  () =>
    request.value.category.charAt(0).toUpperCase() +
    request.value.category.slice(1)
);
</script>
