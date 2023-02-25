<template>
  <div>
    <div class="across">
      <div class="flex items-center gap-4">
        <img
          :src="reply.user.image"
          :alt="`${reply.user.name}'s avatar'`"
          class="w-10 h-10 rounded-full"
        />
        <div class="md:text-sm">
          <p class="font-bold tracking-[-0.18px]">
            {{ reply.user.name }}
          </p>
          <p>@{{ reply.user.username }}</p>
        </div>
      </div>
      <div>
        <button class="link">Reply</button>
      </div>
    </div>
    <div class="text-dark-100 mt-4 md:text-[15px]">
      <p>
        <span class="text-primary font-bold">@{{ reply.replyingTo }}</span
        >&nbsp;&nbsp;{{ reply.content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Reply } from "~/types";

const props = defineProps<{
  reply: Reply;
}>();

const { reply } = toRefs(props);
</script>
