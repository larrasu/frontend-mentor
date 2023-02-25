<template>
  <div class="grid gap-6 p-6">
    <div class="across">
      <NuxtLink to="/" class="btn-ghost flex items-center gap-2">
        <NuxtSvgIcon
          name="arrow-left"
          :use-origin-size="true"
          class="stroke-secondary fill-none"
        />
        <span>Go Back</span>
      </NuxtLink>

      <NuxtLink to="/requests/edit" class="btn-secondary">
        Edit Feedback
      </NuxtLink>
    </div>
    <div>
      <RequestCard :request="request" :is-link="false" />
    </div>
    <div class="bg-base-100 rounded-base p-6">
      <h2 class="text-lg tracking-[-0.25px] font-bold">
        {{ request.comments.length }} Comments
      </h2>
      <div class="divide-dark-100/25 grid gap-6 divide-y">
        <CommentCard v-for="comment of request.comments" :comment="comment" />
      </div>
    </div>
    <div>
      <!-- CommentBox -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const requestStore = useRequestStore();
const { currentUser, request } = storeToRefs(requestStore);
const route = useRoute();

onMounted(() => requestStore.setCurrentRequest(parseInt(route.params.id)));
</script>
