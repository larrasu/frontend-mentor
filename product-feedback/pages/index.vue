<template>
  <div>
    <MobileHeader />

    <main class="px-6 py-8">
      <div class="flex flex-col gap-6">
        <Feedback
          v-for="feedback in filteredFeedbacks"
          :key="feedback.id"
          :feedback="feedback"
          @upvote="mainStore.upvoteFeedback(feedback.id, currentUser.username)"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
const mainStore = useMainStore();
const userStore = useUserStore();

const currentUser = computed(() => userStore.getCurrentUser);
const filteredFeedbacks = computed(() => mainStore.getFilteredFeedbacks);
</script>
