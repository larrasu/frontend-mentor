<template>
  <div
    class="flex flex-wrap gap-4 p-6 bg-white text-accent-200 text-[13px] tracking-[-0.18px]"
  >
    <div class="order-2">
      <!-- TODO: upvote -->
      <button @click="upvote" class="btn-plain font-bold">
        <Icon name="heroicons:chevron-up-20-solid" />
        <p>{{ feedback.upvotes }}</p>
      </button>
    </div>
    <div class="basis-full space-y-[9px]">
      <h3 class="text-accent-200 font-bold">
        {{ feedback.title }}
      </h3>
      <p class="text-accent-100">{{ feedback.description }}</p>
      <div>
        <span
          class="text-secondary-200 bg-base-200 rounded-base px-4 py-[6px]"
          >{{ category }}</span
        >
      </div>
    </div>
    <div class="flex items-center order-last gap-2 ml-auto font-bold">
      <Icon
        name="heroicons:chat-bubble-oval-left-20-solid"
        class="text-base-300 w-5 h-5"
      />
      <p>{{ feedback.comments ? feedback.comments.length : 0 }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  feedback: Object,
});

const emit = defineEmits(["upvote"]);

const category =
  props.feedback.category.charAt(0).toUpperCase() +
  props.feedback.category.slice(1);
</script>
