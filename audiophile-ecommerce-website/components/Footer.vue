<template>
  <div class="bg-black text-white/50">
    <div
      class="grid justify-center gap-12 px-6 pb-[38px] md:justify-start md:grid-cols-2 lg:max-w-[1110px] lg:mx-auto"
    >
      <div
        class="bg-primary-200 w-[101px] h-1 mx-auto md:col-span-2 md:mx-0"
      ></div>
      <div class="mx-auto md:mx-0 lg:col-span-1">
        <img src="~/assets/shared/desktop/logo.svg" alt="Audiophile Logo" />
      </div>
      <div
        class="flex flex-col items-center gap-4 md:flex-row md:gap-[34px] md:col-span-2 lg:col-span-1 lg:justify-end"
      >
        <NuxtLink
          v-for="item of props.menu"
          :to="item.link"
          class="transition uppercase text-white hover:text-primary-200 font-bold text-[13px] leading-[25px] tracking-[2px]"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="text-center md:text-left md:col-span-2 lg:col-span-1">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div class="text-center md:text-left lg:order-last lg:col-span-2">
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
      <div class="flex items-center gap-4 md:justify-end lg:items-end">
        <button class="transition text-white hover:text-primary-200">
          <Icon name="mdi:facebook-box" class="w-6 h-6" />
        </button>
        <button class="transition text-white hover:text-primary-200">
          <Icon name="mdi:twitter" class="w-6 h-6" />
        </button>
        <button class="transition text-white hover:text-primary-200">
          <Icon name="mdi:instagram" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menu: {
    required: true,
  },
});
</script>
