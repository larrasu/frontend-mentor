<template>
  <div
    class="w-full relative bg-secondary text-white rounded-[10px] px-6 py-10 z-10"
  >
    <nav
      aria-label="Mobile Site Navigation"
      class="divide-neutral/25 space-y-[30px] font-bold text-center divide-y"
    >
      <ul class="grid gap-[30px]">
        <li v-for="item of menu">
          <NuxtLink @click="emit('close')" to="/">{{ item }}</NuxtLink>
        </li>
      </ul>
      <ul class="grid gap-6 pt-[32px]">
        <li><NuxtLink @click="emit('close')" to="/">Login</NuxtLink></li>
        <li>
          <NuxtLink
            @click="emit('close')"
            to="/"
            class="bg-primary hover:bg-primary-hover block py-3 text-white transition rounded-full"
          >
            Sign Up
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
defineProps(["menu"]);
const emit = defineEmits(["close"]);
</script>
