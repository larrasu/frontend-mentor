<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

const props = defineProps({
  type: { type: String as PropType<ButtonHTMLAttributes['type']>, default: 'button' },
  label: { type: String, default: null },
  rounded: { type: String, default: 'full' }
})

type ButtonRound = 'full' | 'base' | string;

const roundness: Record<ButtonRound, string> = {
  full: 'rounded-full',
  base: 'rounded-[5px]'
}
</script>
<template>
  <button :type="type" class="bg-primary text-white hover:bg-primary-hover font-bold transition px-10 py-4"
    :class="$attrs, [roundness[rounded]]">
    <slot>{{ label }}</slot>
  </button>
</template>

