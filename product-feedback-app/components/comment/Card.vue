<template>
  <div class="pt-6 text-[13px]">
    <div class="across">
      <div class="flex items-center gap-4">
        <img
          :src="comment.user.image"
          :alt="`${comment.user.name}'s avatar'`"
          class="w-10 h-10 rounded-full"
        />
        <div class="md:text-sm">
          <p class="font-bold tracking-[-0.18px]">
            {{ comment.user.name }}
          </p>
          <p>@{{ comment.user.username }}</p>
        </div>
      </div>
      <div>
        <button @click="showReplyBox = !showReplyBox" class="link">
          Reply
        </button>
      </div>
    </div>
    <div
      class="text-dark-100 mt-4 md:text-[15px]"
      :class="{
        'border-l border-dark-100/10 ml-5 pl-6': comment.replies.length > 0,
      }"
    >
      <p>{{ comment.content }}</p>
    </div>

    <div
      v-if="comment.replies.length > 0"
      class="border-dark-100/10 grid gap-8 pt-8 pl-6 ml-5 border-l"
    >
      <ReplyCard v-for="reply of comment.replies" :reply="reply" />
    </div>

    <div v-if="showReplyBox" class="flex gap-4 mt-4 md:ml-[72px] md:mt-6">
      <textarea rows="3" class="flex-1"></textarea>
      <div><button class="btn-primary">Post Reply</button></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Comment } from "~/types";
const props = defineProps<{
  comment: Comment;
}>();
const { comment } = toRefs(props);

const showReplyBox = ref(false);
</script>
