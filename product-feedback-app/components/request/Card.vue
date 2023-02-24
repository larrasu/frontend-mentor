<template>
  <div>
    <div>
      <p>{{ request.title }}</p>
      <p>{{ request.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Request } from "~/types";
const props = defineProps<{
  request: Request;
}>();
const { request } = toRefs(props);
</script>
