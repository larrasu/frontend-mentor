<template>
  <div class="hidden gap-[10px] md:grid md:grid-cols-3 lg:flex-col lg:flex">
    <section
      class="bg-cover md:bg-tablet-header lg:bg-desktop-header rounded-base text-white md:h-[178px] lg:w-[255px] lg:h-[137px] flex flex-col justify-end p-6"
    >
      <h1 class="text-xl font-bold tracking-[-0.25px]">Frontend Mentor</h1>
      <p class="font-medium">Feedback Board</p>
    </section>
    <section class="bg-base-100 rounded-base p-6">
      <div class="flex flex-wrap w-full gap-2">
        <button
          v-for="category of categories"
          @click="requestStore.setCurrentCategory(category)"
          class="btn-sm btn-plain"
          :class="{ active: category == currentCategory }"
        >
          {{ category }}
        </button>
      </div>
    </section>
    <section class="bg-base-100 rounded-base p-6">
      <div class="across">
        <p class="font-bold text-lg tracking-[-0.25px]">Roadmap</p>
        <NuxtLink to="/roadmap" class="link text-[13px]">View</NuxtLink>
      </div>
      <div class="grid gap-2 mt-5">
        <div v-for="item of roadmap" class="flex items-center gap-4">
          <div class="w-2 h-2 rounded-full" :class="item.color"></div>
          <p>{{ item.label }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const requestStore = useRequestStore();
const { categories, currentCategory } = storeToRefs(requestStore);

const roadmap = [
  {
    color: "bg-orange",
    label: "Planned",
  },
  {
    color: "bg-primary",
    label: "In-Progress",
  },
  {
    color: "bg-cyan",
    label: "Live",
  },
];
</script>
