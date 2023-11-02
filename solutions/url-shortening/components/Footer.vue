<script lang="ts" setup>
const columns = [
  {
    title: 'Features',
    links: ['Link Shortening', 'Branded Links', 'Analytics']
  },
  {
    title: 'Resources',
    links: ['Blog', 'Developers', 'Support']
  },
  {
    title: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact']
  }
];
</script>
<template>
  <footer class="bg-[#232127] text-white">
    <div class="grid py-14">
      <img
        src="~/assets/images/logo.svg"
        alt="Shortly"
        class="invert brightness-0 mx-auto"
      />

      <div
        v-for="(column, index) of columns"
        :key="index"
        class="mt-[50px] text-center"
      >
        <h3 class="font-bold text-base/normal tracking-[-0.25px]">
          {{ column.title }}
        </h3>
        <div class="grid gap-[10px] mt-[22px]">
          <div v-for="(link, index) of column.links" :key="index">
            <NuxtLink
              to="/"
              class="text-[#BFBFBF] hover:text-primary transition"
            >
              {{ link }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
